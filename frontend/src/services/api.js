/**
 * API Service Layer
 * Axios-based HTTP client for backend communication
 */
import axios from 'axios'

// Get API URL from environment variables
const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000'

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 30000, // 30 seconds
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor (for logging, auth tokens, etc.)
apiClient.interceptors.request.use(
  (config) => {
    console.log(`[API] ${config.method?.toUpperCase()} ${config.url}`)
    return config
  },
  (error) => {
    console.error('[API] Request Error:', error)
    return Promise.reject(error)
  }
)

// Response interceptor (for error handling)
apiClient.interceptors.response.use(
  (response) => {
    console.log(`[API] Response:`, response.status, response.data)
    return response
  },
  (error) => {
    if (error.response) {
      // Server responded with error status
      console.error('[API] Response Error:', error.response.status, error.response.data)
    } else if (error.request) {
      // Request made but no response
      console.error('[API] No Response:', error.message)
    } else {
      // Error setting up request
      console.error('[API] Request Setup Error:', error.message)
    }
    return Promise.reject(error)
  }
)

// ============================================================================
// API METHODS
// ============================================================================

/**
 * Health Check
 * Check if backend is online
 */
export async function healthCheck() {
  try {
    const response = await apiClient.get('/')
    return {
      success: true,
      data: response.data,
    }
  } catch (error) {
    return {
      success: false,
      error: error.message,
    }
  }
}

/**
 * Chat with AI
 * Send message to AI endpoint and get response
 * 
 * @param {string} message - User message
 * @returns {Promise} Response object
 */
export async function chatWithAI(message) {
  try {
    const response = await apiClient.post('/api/chat', {
      message: message,
    })
    
    return {
      success: true,
      data: response.data,
    }
  } catch (error) {
    // Handle specific error cases
    if (error.code === 'ECONNREFUSED' || error.code === 'ERR_NETWORK') {
      return {
        success: false,
        error: 'CONNECTION_LOST',
        message: 'Backend server is offline. Please start the FastAPI server.',
      }
    }
    
    if (error.response) {
      // Server error (4xx, 5xx)
      if (error.response.status === 429) {
        return {
          success: false,
          error: 'RATE_LIMIT',
          message: 'Rate limit exceeded. Please wait a moment and try again.',
        }
      }
      
      return {
        success: false,
        error: 'SERVER_ERROR',
        message: error.response.data?.detail || 'Server error occurred',
      }
    }
    
    // Unknown error
    return {
      success: false,
      error: 'UNKNOWN',
      message: error.message || 'An unexpected error occurred',
    }
  }
}

/**
 * Get Chat Status
 * Check AI service status
 */
export async function getChatStatus() {
  try {
    const response = await apiClient.get('/api/chat/status')
    return {
      success: true,
      data: response.data,
    }
  } catch (error) {
    return {
      success: false,
      error: error.message,
    }
  }
}

// Export the client for advanced usage
export default apiClient

