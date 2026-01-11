"""
AI Chat Endpoint with Advanced Security
"""
import time
from typing import Dict, Any
from fastapi import APIRouter, HTTPException, Request, status
from pydantic import BaseModel, Field, validator
from slowapi import Limiter
from slowapi.util import get_remote_address

from app.core.config import settings
from app.core.security import get_rate_limiter
from app.services.chat_service import get_chat_service


router = APIRouter()
limiter = Limiter(key_func=get_remote_address)


# ============================================================================
# PYDANTIC MODELS
# ============================================================================

class ChatRequest(BaseModel):
    """Request schema with validation"""
    message: str = Field(..., min_length=1, max_length=200, description="Keep it short!")
    
    @validator('message')
    def validate_message(cls, v):
        """Validate and sanitize message"""
        v = v.strip()
        
        # Check for suspicious patterns (jailbreak attempts)
        suspicious_patterns = [
            'ignore previous', 'ignore all', 'ignore instructions',
            'system:', 'assistant:', 'user:', 'role:',
            'pretend', 'act as', 'you are now',
            '<script>', 'javascript:', 'eval(', 'exec(',
            'forget', 'disregard', 'new instructions',
            'override', 'bypass', 'admin mode'
        ]
        
        v_lower = v.lower()
        for pattern in suspicious_patterns:
            if pattern in v_lower:
                raise ValueError("Lütfen Onur Ceyhan'ın portfolyosu hakkında sorular sorun.")
        
        return v


class ChatResponse(BaseModel):
    """Response schema"""
    reply: str
    source: str
    processing_time: float
    model: str = "Groq"
    limit_reached: bool = False
    questions_remaining: int = 5


# ============================================================================
# HELPER FUNCTIONS
# ============================================================================

def get_client_ip(request: Request) -> str:
    """Get real client IP (handles proxies)"""
    forwarded_for = request.headers.get("X-Forwarded-For")
    if forwarded_for:
        return forwarded_for.split(",")[0].strip()
    
    real_ip = request.headers.get("X-Real-IP")
    if real_ip:
        return real_ip.strip()
    
    return request.client.host if request.client else "unknown"


# ============================================================================
# ENDPOINTS
# ============================================================================

@router.post("/chat", response_model=ChatResponse)
@limiter.limit(f"{settings.rate_limit_per_minute}/minute")
async def chat_endpoint(request: Request, chat_request: ChatRequest) -> ChatResponse:
    """
    Chat endpoint with advanced security:
    - IP-based rate limiting (5 questions/hour)
    - Automatic cooldown (30 min)
    - Suspicious activity detection
    - Input validation
    """
    start_time = time.time()
    
    try:
        client_ip = get_client_ip(request)
        rate_limiter = get_rate_limiter()
        
        # Check if suspicious
        if rate_limiter.is_suspicious(client_ip, threshold=3):
            print(f"🚨 Suspicious: {client_ip}")
            raise HTTPException(
                status_code=status.HTTP_429_TOO_MANY_REQUESTS,
                detail="Too many failed attempts"
            )
        
        # Check rate limit
        is_allowed, questions_remaining, error_msg = rate_limiter.check_rate_limit(client_ip)
        
        if not is_allowed:
            print(f"⚠️  Limit exceeded: {client_ip}")
            return ChatResponse(
                reply=error_msg or "⚠️ Demo limit reached. Try again later.",
                source="Rate Limiter",
                processing_time=round(time.time() - start_time, 3),
                model="Security",
                limit_reached=True,
                questions_remaining=0
            )
        
        # Increment usage
        rate_limiter.increment_usage(client_ip)
        questions_remaining -= 1
        
        # Get response
        chat_service = get_chat_service(settings.groq_api_key)
        result = chat_service.get_response(chat_request.message)
        reply = result.get("reply", "No response")
        
        processing_time = time.time() - start_time
        print(f"✅ {client_ip}: {questions_remaining} remaining")
        
        return ChatResponse(
            reply=reply,
            source="Groq",
            processing_time=round(processing_time, 3),
            model="Groq",
            limit_reached=False,
            questions_remaining=questions_remaining
        )
        
    except ValueError as e:
        print(f"🚨 Validation error: {e}")
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))
    except HTTPException:
        raise
    except Exception as e:
        print(f"❌ Error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="AI processing failed"
        )


@router.get("/chat/status")
async def chat_status() -> Dict[str, Any]:
    """Status endpoint"""
    chat_service = get_chat_service(settings.groq_api_key)
    rate_limiter = get_rate_limiter()
    
    return {
        "status": "operational",
        "model": "Groq (Llama 3.3 70B)",
        "api_key_configured": bool(settings.groq_api_key),
        "rate_limit": f"{settings.rate_limit_per_minute} req/min",
        "usage_limit": "5 questions/hour per IP",
        "cooldown": "30 minutes",
        "active_users": len(rate_limiter.usage_tracker),
        "security": {
            "ip_tracking": True,
            "input_validation": True,
            "suspicious_detection": True,
            "auto_cooldown": True
        },
        "groq_enabled": chat_service.use_groq
    }


@router.get("/chat/usage/{ip}")
async def get_usage(ip: str) -> Dict[str, Any]:
    """Get usage stats for IP"""
    rate_limiter = get_rate_limiter()
    return rate_limiter.get_usage_stats(ip)


@router.post("/chat/cleanup")
async def cleanup() -> Dict[str, Any]:
    """Cleanup old entries (admin)"""
    rate_limiter = get_rate_limiter()
    removed = rate_limiter.cleanup_old_entries(max_age_hours=24)
    return {"status": "success", "removed": removed}
