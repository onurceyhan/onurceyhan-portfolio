"""
FastAPI Main Application
Portfolio Backend with AI Chat (RAG Architecture)
"""
import time
from typing import Dict, Any
from fastapi import FastAPI, Request, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded

from app.core.config import settings
from app.api.endpoints import chat


# Initialize rate limiter
limiter = Limiter(key_func=get_remote_address)

# Initialize FastAPI app
app = FastAPI(
    title="Onur Ceyhan Portfolio API",
    description="AI-Powered Backend with RAG Architecture",
    version="1.0.0",
    docs_url="/docs" if settings.is_development else None,
    redoc_url="/redoc" if settings.is_development else None,
)

# Rate limiter state
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)


# ============================================================================
# MIDDLEWARE CONFIGURATION
# ============================================================================

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Request timing middleware
@app.middleware("http")
async def add_process_time_header(request: Request, call_next):
    """Add X-Process-Time header to all responses"""
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    response.headers["X-Process-Time"] = f"{process_time:.4f}s"
    return response


# ============================================================================
# ROUTES
# ============================================================================

@app.get("/", response_model=Dict[str, Any])
@limiter.limit(f"{settings.rate_limit_per_minute}/minute")
async def health_check(request: Request) -> Dict[str, Any]:
    """
    Health Check Endpoint
    Returns system status and configuration
    """
    return {
        "status": "System Online",
        "module": "backend",
        "version": "1.0.0",
        "environment": settings.environment,
        "ai_enabled": bool(settings.groq_api_key),
        "endpoints": {
            "chat": "/api/chat",
            "health": "/",
            "docs": "/docs" if settings.is_development else "disabled"
        }
    }


@app.get("/health")
async def simple_health() -> Dict[str, str]:
    """Simple health check without rate limiting"""
    return {"status": "ok"}


# ============================================================================
# API ROUTERS
# ============================================================================

# Include chat endpoint
app.include_router(
    chat.router,
    prefix="/api",
    tags=["AI Chat"]
)


# ============================================================================
# ERROR HANDLERS
# ============================================================================

@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    """Global exception handler for unhandled errors"""
    return JSONResponse(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        content={
            "error": "Internal Server Error",
            "detail": str(exc) if settings.is_development else "An unexpected error occurred",
            "path": str(request.url)
        }
    )


# ============================================================================
# STARTUP/SHUTDOWN EVENTS
# ============================================================================

@app.on_event("startup")
async def startup_event():
    """Execute on application startup"""
    print("=" * 60)
    print("🚀 Onur Ceyhan Portfolio Backend - STARTING")
    print("=" * 60)
    print(f"📡 Environment: {settings.environment}")
    print(f"🔐 API Key Configured: {bool(settings.groq_api_key)}")
    print(f"🌐 CORS Origins: {settings.origins_list}")
    print(f"⏱️  Rate Limit: {settings.rate_limit_per_minute} requests/minute")
    print("=" * 60)


@app.on_event("shutdown")
async def shutdown_event():
    """Execute on application shutdown"""
    print("\n🛑 Backend shutting down...")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "app.main:app",
        host=settings.host,
        port=settings.port,
        reload=settings.is_development
    )

