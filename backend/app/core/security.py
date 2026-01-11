"""
Security utilities for rate limiting and abuse prevention
"""
import time
from typing import Dict, Optional
from datetime import datetime, timedelta
from collections import defaultdict


class IPRateLimiter:
    """
    Advanced IP-based rate limiter with multiple protection layers
    """
    
    def __init__(
        self,
        max_questions: int = 5,
        time_window_minutes: int = 60,
        cooldown_minutes: int = 30
    ):
        self.max_questions = max_questions
        self.time_window = timedelta(minutes=time_window_minutes)
        self.cooldown_period = timedelta(minutes=cooldown_minutes)
        
        # Track usage: {IP: {'count': int, 'first_request': datetime, 'last_request': datetime, 'blocked_until': datetime}}
        self.usage_tracker: Dict[str, Dict] = defaultdict(lambda: {
            'count': 0,
            'first_request': None,
            'last_request': None,
            'blocked_until': None
        })
        
        # Track suspicious activity
        self.suspicious_ips: Dict[str, int] = defaultdict(int)
        
    def check_rate_limit(self, ip: str) -> tuple[bool, int, Optional[str]]:
        """
        Check if IP is within rate limits
        
        Returns:
            Tuple of (is_allowed, questions_remaining, error_message)
        """
        now = datetime.now()
        user_data = self.usage_tracker[ip]
        
        # Check if IP is currently blocked
        if user_data['blocked_until'] and now < user_data['blocked_until']:
            time_left = (user_data['blocked_until'] - now).total_seconds() / 60
            return False, 0, f"Rate limit exceeded. Try again in {int(time_left)} minutes."
        
        # Reset block if cooldown period has passed
        if user_data['blocked_until'] and now >= user_data['blocked_until']:
            user_data['count'] = 0
            user_data['first_request'] = None
            user_data['blocked_until'] = None
        
        # Initialize or reset time window
        if user_data['first_request'] is None:
            user_data['first_request'] = now
            user_data['count'] = 0
        
        # Check if time window has expired
        elif now - user_data['first_request'] > self.time_window:
            user_data['first_request'] = now
            user_data['count'] = 0
        
        # Check if limit exceeded
        if user_data['count'] >= self.max_questions:
            # Block the IP
            user_data['blocked_until'] = now + self.cooldown_period
            self.suspicious_ips[ip] += 1
            
            return False, 0, f"Demo limit reached ({self.max_questions}/{self.max_questions}). Try again in {self.cooldown_minutes} minutes."
        
        # Calculate remaining questions
        questions_remaining = self.max_questions - user_data['count']
        return True, questions_remaining, None
    
    def increment_usage(self, ip: str) -> None:
        """Increment usage count for IP"""
        now = datetime.now()
        user_data = self.usage_tracker[ip]
        user_data['count'] += 1
        user_data['last_request'] = now
    
    def is_suspicious(self, ip: str, threshold: int = 3) -> bool:
        """
        Check if IP has suspicious activity (multiple blocks)
        
        Args:
            ip: IP address to check
            threshold: Number of blocks before marking as suspicious
            
        Returns:
            True if IP is suspicious
        """
        return self.suspicious_ips[ip] >= threshold
    
    def get_usage_stats(self, ip: str) -> Dict:
        """Get usage statistics for an IP"""
        user_data = self.usage_tracker[ip]
        now = datetime.now()
        
        is_blocked = user_data['blocked_until'] and now < user_data['blocked_until']
        time_until_reset = None
        
        if is_blocked:
            time_until_reset = (user_data['blocked_until'] - now).total_seconds()
        elif user_data['first_request']:
            window_end = user_data['first_request'] + self.time_window
            if now < window_end:
                time_until_reset = (window_end - now).total_seconds()
        
        return {
            'ip': ip,
            'questions_used': user_data['count'],
            'questions_remaining': max(0, self.max_questions - user_data['count']),
            'is_blocked': is_blocked,
            'time_until_reset': time_until_reset,
            'is_suspicious': self.is_suspicious(ip),
            'block_count': self.suspicious_ips[ip]
        }
    
    def cleanup_old_entries(self, max_age_hours: int = 24) -> int:
        """
        Clean up old entries from tracker
        
        Args:
            max_age_hours: Maximum age of entries to keep
            
        Returns:
            Number of entries removed
        """
        now = datetime.now()
        max_age = timedelta(hours=max_age_hours)
        
        ips_to_remove = []
        for ip, data in self.usage_tracker.items():
            if data['last_request'] and now - data['last_request'] > max_age:
                ips_to_remove.append(ip)
        
        for ip in ips_to_remove:
            del self.usage_tracker[ip]
            if ip in self.suspicious_ips:
                del self.suspicious_ips[ip]
        
        return len(ips_to_remove)


# Global rate limiter instance
_rate_limiter: Optional[IPRateLimiter] = None


def get_rate_limiter() -> IPRateLimiter:
    """Get or create the global rate limiter instance"""
    global _rate_limiter
    
    if _rate_limiter is None:
        _rate_limiter = IPRateLimiter(
            max_questions=5,
            time_window_minutes=60,
            cooldown_minutes=30
        )
    
    return _rate_limiter

