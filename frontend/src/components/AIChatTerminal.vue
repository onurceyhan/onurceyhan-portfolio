<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { Send, Bot, User, Cpu, WifiOff, Zap } from 'lucide-vue-next'
import { chatWithAI, healthCheck } from '../services/api.js'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

// State management
const messages = ref([
  {
    role: 'assistant',
    content: '',
    timestamp: getCurrentTime(),
    status: 'info'
  }
])

const inputCommand = ref('')
const isLoading = ref(false)
const isConnected = ref(false)
const messagesContainer = ref(null)
const questionsRemaining = ref(5)
const usageLimitReached = ref(false)

// Helper: Get current time in HH:MM:SS format
function getCurrentTime() {
  const now = new Date()
  return now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
}

// Helper: Scroll to bottom of messages
async function scrollToBottom() {
  await nextTick()
  const container = document.querySelector('.chat-messages-container')
  if (container) {
    container.scrollTop = container.scrollHeight
  }
}

// Helper: Convert URLs to clickable links
function linkify(text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g
  const parts = text.split(urlRegex)
  
  return parts.map((part, index) => {
    if (urlRegex.test(part)) {
      return {
        type: 'link',
        content: part,
        key: `link-${index}`
      }
    }
    return {
      type: 'text',
      content: part,
      key: `text-${index}`
    }
  })
}

// Check backend connection on mount
onMounted(async () => {
  // Set initial connecting message
  messages.value[0].content = t.value.chat.connecting
  
  const result = await healthCheck()
  
  if (result.success) {
    isConnected.value = true
    messages.value.push({
      role: 'assistant',
      content: `✅ ${t.value.chat.connected} ${result.data.module} v${result.data.version}. ${t.value.chat.ready}`,
      timestamp: getCurrentTime(),
      status: 'success'
    })
    messages.value.push({
      role: 'assistant',
      content: t.value.chat.askMe,
      timestamp: getCurrentTime(),
      status: 'info'
    })
  } else {
    isConnected.value = false
    messages.value.push({
      role: 'assistant',
      content: t.value.chat.offline,
      timestamp: getCurrentTime(),
      status: 'error'
    })
  }
  
  await scrollToBottom()
})

// Send message to AI
async function sendMessage() {
  const message = inputCommand.value.trim()
  
  if (!message || isLoading.value) {
    return
  }
  
  // Word limit validation (max 20 words for a focused question)
  const wordCount = message.split(/\s+/).length
  const MAX_WORDS = 20
  
  if (wordCount > MAX_WORDS) {
    messages.value.push({
      role: 'assistant',
      content: t.value.chat.wordLimit
        .replace('{max}', MAX_WORDS)
        .replace('{current}', wordCount),
      timestamp: getCurrentTime(),
      status: 'warning'
    })
    await scrollToBottom()
    return
  }
  
  // Add user message
  messages.value.push({
    role: 'user',
    content: message,
    timestamp: getCurrentTime()
  })
  
  // Clear input
  inputCommand.value = ''
  await scrollToBottom()
  
  // Set loading state
  isLoading.value = true
  
  // Call API
  const result = await chatWithAI(message)
  
  // Handle response
  if (result.success) {
    isConnected.value = true
    
    // Check if usage limit reached
    if (result.data.limit_reached) {
      usageLimitReached.value = true
      questionsRemaining.value = 0
      messages.value.push({
        role: 'assistant',
        content: result.data.reply,
        timestamp: getCurrentTime(),
        status: 'warning',
        metadata: {
          source: result.data.source,
          processingTime: result.data.processing_time,
          model: result.data.model
        }
      })
    } else {
      // Update questions remaining
      questionsRemaining.value = result.data.questions_remaining || 5
      
      messages.value.push({
        role: 'assistant',
        content: result.data.reply,
        timestamp: getCurrentTime(),
        status: 'success',
        metadata: {
          source: result.data.source,
          processingTime: result.data.processing_time,
          model: result.data.model,
          questionsRemaining: result.data.questions_remaining
        }
      })
    }
  } else {
    // Handle errors
    if (result.error === 'CONNECTION_LOST') {
      isConnected.value = false
      messages.value.push({
        role: 'assistant',
        content: `🔴 ${result.message}`,
        timestamp: getCurrentTime(),
        status: 'error'
      })
    } else if (result.error === 'RATE_LIMIT') {
      messages.value.push({
        role: 'assistant',
        content: `⏱️ ${result.message}`,
        timestamp: getCurrentTime(),
        status: 'warning'
      })
    } else {
      messages.value.push({
        role: 'assistant',
        content: `⚠️ Error: ${result.message}`,
        timestamp: getCurrentTime(),
        status: 'error'
      })
    }
  }
  
  // Reset loading state
  isLoading.value = false
  await scrollToBottom()
}

// Handle Enter key
function handleKeyPress(event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault()
    sendMessage()
  }
}
</script>

<template>
  <div class="glass-panel-bright h-full min-h-[400px] sm:min-h-[480px] flex flex-col relative overflow-hidden border border-cyber-cyan/20 hover:border-cyber-cyan/40 transition-all">
    <!-- Terminal Header -->
    <div class="px-3 sm:px-4 py-2 sm:py-3 border-b border-cyber-cyan/20 flex items-center justify-between bg-cyber-black/80">
      <div class="flex items-center gap-3">
        <Cpu :size="18" class="text-cyber-cyan" />
        <span class="font-mono text-sm font-bold text-cyber-yellow">{{ t.chat.title }}</span>
      </div>
      <div class="flex gap-2">
        <div class="w-3 h-3 rounded-full bg-cyber-cyan/60"></div>
        <div class="w-3 h-3 rounded-full bg-cyber-yellow/60"></div>
        <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
      </div>
    </div>

    <!-- Chat Messages -->
    <div class="flex-1 overflow-y-auto px-3 sm:px-4 py-2 sm:py-3 space-y-2 sm:space-y-3 scrollbar-hide chat-messages-container">
      <div 
        v-for="(msg, idx) in messages" 
        :key="idx"
        class="flex gap-3 animate-slide-in"
      >
        <!-- Avatar -->
        <div class="flex-shrink-0">
          <div 
            v-if="msg.role === 'assistant'" 
            class="w-8 h-8 rounded flex items-center justify-center border shadow-lg"
            :class="{
              'bg-cyber-cyan/20 border-cyber-cyan/60 shadow-cyber-cyan/30': msg.status !== 'error',
              'bg-red-500/20 border-red-500/40': msg.status === 'error',
              'bg-cyber-yellow/20 border-cyber-yellow/60 shadow-cyber-yellow/30': msg.status === 'warning'
            }"
          >
            <Bot :size="16" :class="{
              'text-cyber-cyan': msg.status !== 'error',
              'text-red-400': msg.status === 'error',
              'text-cyber-yellow': msg.status === 'warning'
            }" />
          </div>
          <div 
            v-else 
            class="w-8 h-8 rounded bg-slate-700/50 flex items-center justify-center border border-slate-600/40"
          >
            <User :size="16" class="text-slate-400" />
          </div>
        </div>

        <!-- Message Content -->
        <div class="flex-1 space-y-1">
          <div class="flex items-center gap-2">
            <span class="text-xs font-mono text-tactical-text-muted">
              {{ msg.role === 'assistant' ? 'AI' : 'USER' }}
            </span>
            <span class="text-xs font-mono text-tactical-text-muted opacity-50">
              {{ msg.timestamp }}
            </span>
            <span v-if="msg.metadata?.processingTime" class="text-xs font-mono text-tactical-accent/60">
              {{ msg.metadata.processingTime }}s
            </span>
          </div>
          <div 
            class="text-xs sm:text-sm leading-relaxed font-mono break-words"
            :class="msg.role === 'assistant' ? 'text-tactical-text-secondary' : 'text-tactical-text-primary'"
          >
            <template v-for="part in linkify(msg.content)" :key="part.key">
              <a 
                v-if="part.type === 'link'" 
                :href="part.content" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-cyber-cyan hover:text-cyber-yellow underline decoration-cyber-cyan/50 hover:decoration-cyber-yellow transition-all font-semibold hover:shadow-lg hover:shadow-cyber-yellow/20"
              >
                {{ part.content }}
              </a>
              <span v-else>{{ part.content }}</span>
            </template>
          </div>
        </div>
      </div>

      <!-- Typing Indicator (shown when loading) -->
      <div v-if="isLoading" class="flex gap-3">
        <div class="w-8 h-8 rounded bg-cyber-cyan/20 flex items-center justify-center border border-cyber-cyan/60 shadow-lg shadow-cyber-cyan/30">
          <Bot :size="16" class="text-cyber-cyan" />
        </div>
        <div class="flex items-center gap-2 pt-2">
          <div class="flex gap-1">
            <div class="w-2 h-2 bg-cyber-cyan rounded-full animate-pulse shadow-lg shadow-cyber-cyan/50"></div>
            <div class="w-2 h-2 bg-cyber-cyan rounded-full animate-pulse shadow-lg shadow-cyber-cyan/50" style="animation-delay: 0.2s"></div>
            <div class="w-2 h-2 bg-cyber-cyan rounded-full animate-pulse shadow-lg shadow-cyber-cyan/50" style="animation-delay: 0.4s"></div>
          </div>
          <span class="text-xs font-mono text-cyber-yellow">{{ t.chat.thinking }}</span>
        </div>
      </div>
    </div>

    <!-- Command Input -->
    <div class="px-3 sm:px-4 py-2 sm:py-3 border-t border-cyber-cyan/30 bg-gradient-to-r from-cyber-black/90 to-tactical-surface/95">
      <!-- Connection & Usage Status -->
      <div class="flex items-center justify-between mb-1.5">
        <div class="flex items-center gap-2">
          <component 
            :is="isConnected ? Zap : WifiOff" 
            :size="12" 
            :class="isConnected ? 'text-tactical-accent' : 'text-red-400'"
          />
          <span class="text-xs font-mono font-bold" :class="isConnected ? 'text-cyber-yellow' : 'text-red-400'">
            {{ isConnected ? t.chat.online : t.chat.offline_short }}
          </span>
        </div>
        <div v-if="isConnected && !usageLimitReached" class="flex items-center gap-1">
          <span class="text-xs font-mono font-bold" :class="{
            'text-cyber-cyan': questionsRemaining > 2,
            'text-cyber-yellow': questionsRemaining === 2,
            'text-red-400': questionsRemaining <= 1
          }">
            {{ questionsRemaining }}/5 {{ t.chat.questions }}
          </span>
        </div>
        <div v-if="usageLimitReached" class="text-xs font-mono font-bold text-red-400">
          {{ t.chat.limitReached }}
        </div>
      </div>
      
      <div class="flex gap-2">
        <input 
          v-model="inputCommand"
          type="text"
          :placeholder="usageLimitReached ? t.chat.placeholderLimit : t.chat.placeholder"
          :disabled="isLoading || !isConnected || usageLimitReached"
          @keypress="handleKeyPress"
          class="flex-1 bg-cyber-black/70 border-2 border-cyber-cyan/40 rounded px-4 py-2 text-sm font-mono text-cyber-yellow focus:outline-none focus:border-cyber-cyan focus:shadow-lg focus:shadow-cyber-cyan/30 transition-all placeholder:text-tactical-text-muted disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button 
          @click="sendMessage"
          :disabled="isLoading || !isConnected || !inputCommand.trim() || usageLimitReached"
          class="px-4 py-2 bg-cyber-cyan/20 hover:bg-cyber-cyan/30 border-2 border-cyber-cyan/60 rounded text-cyber-cyan hover:text-cyber-yellow transition-all hover:shadow-lg hover:shadow-cyber-cyan/40 disabled:opacity-50 disabled:cursor-not-allowed font-bold"
        >
          <Send :size="16" />
        </button>
      </div>
      <p class="text-xs text-tactical-text-muted font-mono mt-1.5">
        <span class="text-cyber-cyan font-bold">></span> 
        <span v-if="usageLimitReached" class="text-cyber-yellow font-semibold">
          {{ t.chat.demoLimit }}
        </span>
        <span v-else-if="!isConnected" class="text-red-400 font-semibold">
          {{ t.chat.backendOffline }}
        </span>
        <span v-else class="text-cyber-cyan/80">
          {{ t.chat.poweredBy }} <span class="text-cyber-yellow font-bold">Groq AI</span>
        </span>
      </p>
    </div>
  </div>
</template>

