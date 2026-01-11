"""
Configuration Management
Loads environment variables and provides typed settings
"""
from typing import List
from pydantic_settings import BaseSettings
from pydantic import Field


class Settings(BaseSettings):
    """Application settings loaded from environment variables"""
    
    # API Keys
    groq_api_key: str = Field(default="", env="GROQ_API_KEY")
    
    # Environment
    environment: str = Field(default="development", env="ENVIRONMENT")
    
    # Server
    host: str = Field(default="127.0.0.1", env="HOST")
    port: int = Field(default=8000, env="PORT")
    
    # CORS
    allowed_origins: str = Field(
        default="http://localhost:5173,http://127.0.0.1:5173",
        env="ALLOWED_ORIGINS"
    )
    
    # Rate Limiting
    rate_limit_per_minute: int = Field(default=5, env="RATE_LIMIT_PER_MINUTE")
    
    class Config:
        env_file = ".env"
        case_sensitive = False
    
    @property
    def origins_list(self) -> List[str]:
        """Convert comma-separated origins to list"""
        return [origin.strip() for origin in self.allowed_origins.split(",")]
    
    @property
    def is_development(self) -> bool:
        """Check if running in development mode"""
        return self.environment.lower() == "development"


# Global settings instance
settings = Settings()

