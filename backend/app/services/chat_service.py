"""
Chat Service with Groq LLM
"""
import os
from pathlib import Path
from typing import Optional
from groq import Groq

try:
    from groq import Groq
    GROQ_AVAILABLE = True
except ImportError:
    GROQ_AVAILABLE = False
    print("⚠️  Groq not available. Install with: pip install groq")


def load_system_prompt() -> str:
    """
    Load system prompt from environment variable (production) or file (local)
    Priority: SYSTEM_PROMPT env var > system_prompt.txt file > fallback
    """
    # 1. Try environment variable (for Render/production)
    env_prompt = os.getenv("SYSTEM_PROMPT")
    if env_prompt:
        print("📝 System Prompt: Loaded from SYSTEM_PROMPT environment variable")
        return env_prompt
    
    # 2. Try local file (for development)
    try:
        prompt_path = Path(__file__).parent.parent / "data" / "system_prompt.txt"
        with open(prompt_path, "r", encoding="utf-8") as f:
            content = f.read()
            print("📝 System Prompt: Loaded from system_prompt.txt file")
            return content
    except FileNotFoundError:
        print("⚠️  System prompt not found in env or file. Using fallback prompt.")
        return "Sen Onur Ceyhan'ın portfolyo asistanısın. Sadece onun projeleri ve yetenekleri hakkında bilgi ver."


class ChatService:
    """Chat Service using Groq for LLM"""
    
    def __init__(self, groq_api_key: Optional[str] = None):
        self.groq_api_key = groq_api_key
        self.use_groq = GROQ_AVAILABLE and groq_api_key
        self.groq_client = Groq(api_key=groq_api_key) if self.use_groq else None
        
        # Load system prompt (env var in production, file in local)
        self.system_prompt = load_system_prompt()
        
        print(f"🤖 Chat: {'Groq' if self.use_groq else 'Mock'}")
        print(f"✅ System Prompt: {len(self.system_prompt)} characters loaded")
    
    def get_response(self, message: str) -> dict:
        """Get AI response with portfolio-focused protection"""
        
        # Check for off-topic questions
        off_topic_keywords = [
            "weather", "hava durumu", "recipe", "tarif", "yemek",
            "news", "haber", "football", "futbol", "maç",
            "movie", "film", "music", "müzik", "şarkı",
            "game", "oyun", "bitcoin", "crypto"
        ]
        
        message_lower = message.lower()
        if any(keyword in message_lower for keyword in off_topic_keywords):
            return {
                "reply": "Ben sadece Onur Ceyhan'ın portfolyosu hakkında bilgi verebilirim. Projeleri, yetenekleri veya iş fırsatları hakkında sormak ister misiniz?",
                "source": "Portfolio Guard",
                "model": "Security"
            }
        
        if self.use_groq and self.groq_client:
            try:
                response = self.groq_client.chat.completions.create(
                    messages=[
                        {"role": "system", "content": self.system_prompt},
                        {"role": "user", "content": message}
                    ],
                    model="llama-3.3-70b-versatile",
                    temperature=0.7,
                    max_tokens=150
                )
                
                return {
                    "reply": response.choices[0].message.content,
                    "source": "Groq",
                    "model": "llama-3.3-70b-versatile"
                }
            except Exception as e:
                print(f"❌ Groq error: {e}")
                return {
                    "reply": "Üzgünüm, şu an bir teknik sorun yaşıyorum. Lütfen daha sonra tekrar deneyin.",
                    "source": "Error",
                    "model": "none"
                }
        else:
            # Mock responses
            if "proje" in message_lower or "project" in message_lower:
                return {
                    "reply": "Onur'un 5 önemli projesi var: Psikoloji Kliniği, Ceyhan Farm, Metal Band Website, Araç Kiralama ve TagWise. Hangi proje ilginizi çekiyor?",
                    "source": "Mock",
                    "model": "none"
                }
            
            if "skill" in message_lower or "yetenek" in message_lower or "teknoloji" in message_lower:
                return {
                    "reply": "Onur, Python (FastAPI, Django), Vue.js, Docker ve AI/ML konularında uzman. Full-stack geliştirme ve cloud deployment deneyimine sahip.",
                    "source": "Mock",
                    "model": "none"
                }
            
            if "iletişim" in message_lower or "contact" in message_lower:
                return {
                    "reply": "Onur ile iletişime geçmek için portfolyo sitesindeki iletişim bölümünü kullanabilirsiniz.",
                    "source": "Mock",
                    "model": "none"
                }
            
            return {
                "reply": "Groq API anahtarı yapılandırılmamış. Yine de Onur Ceyhan'ın projeleri veya yetenekleri hakkında sorabilirsiniz.",
                "source": "Mock",
                "model": "none"
            }


# Global service instance
_chat_service: Optional[ChatService] = None


def get_chat_service(groq_api_key: Optional[str] = None) -> ChatService:
    """Get or create chat service instance"""
    global _chat_service
    
    if _chat_service is None:
        _chat_service = ChatService(groq_api_key)
    
    return _chat_service
