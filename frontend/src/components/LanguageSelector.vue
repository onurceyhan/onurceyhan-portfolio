<script setup>
import { useLanguage } from '../composables/useLanguage'

const emit = defineEmits(['close'])
const { setLanguage, t } = useLanguage()

const languages = [
  {
    code: 'tr',
    name: 'Türkçe',
    flag: '🇹🇷',
    gradient: 'from-red-500 to-red-600'
  },
  {
    code: 'en',
    name: 'English',
    flag: '🇬🇧',
    gradient: 'from-blue-500 to-blue-600'
  }
]

const selectLanguage = (code) => {
  setLanguage(code)
  emit('close')
}
</script>

<template>
  <!-- Backdrop -->
  <div class="fixed inset-0 bg-cyber-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in">
    <!-- Modal -->
    <div class="relative bg-gradient-to-br from-tactical-surface/95 to-cyber-black/95 border-2 border-cyber-cyan/50 rounded-xl p-8 max-w-md w-full shadow-2xl shadow-cyber-cyan/30 animate-slide-up backdrop-blur-xl">
      <!-- Decorative corners -->
      <div class="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-cyber-yellow/60"></div>
      <div class="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-cyber-cyan/60"></div>
      
      <!-- Cyber Glow Effects -->
      <div class="absolute top-0 right-0 w-32 h-32 bg-cyber-cyan/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-32 h-32 bg-cyber-yellow/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <!-- Content -->
      <div class="relative z-10">
        <!-- Title -->
        <div class="text-center mb-8">
          <div class="flex items-center justify-center gap-2 mb-2">
            <div class="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse shadow-lg shadow-cyber-cyan/50"></div>
            <h2 class="text-2xl font-black font-mono text-cyber-yellow drop-shadow-[0_0_15px_rgba(252,238,12,0.5)]">
              {{ currentLanguage ? t.languageModal.title : 'LANGUAGE SELECTION' }}
            </h2>
            <div class="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse shadow-lg shadow-cyber-cyan/50"></div>
          </div>
          <p class="text-sm text-cyber-cyan/70 font-mono font-semibold">
            {{ currentLanguage ? t.languageModal.subtitle : 'Choose your preferred language' }}
          </p>
        </div>

        <!-- Language Options -->
        <div class="space-y-3">
          <button
            v-for="lang in languages"
            :key="lang.code"
            @click="selectLanguage(lang.code)"
            class="group w-full p-5 bg-cyber-black/60 border-2 border-cyber-cyan/40 hover:border-cyber-yellow/80 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-cyber-yellow/30 hover:-translate-y-1 relative overflow-hidden"
          >
            <!-- Scan line effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-cyan/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            
            <!-- Content -->
            <div class="relative flex items-center justify-between">
              <div class="flex items-center gap-4">
                <div class="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {{ lang.flag }}
                </div>
                <div class="text-left">
                  <div class="text-xl font-bold text-tactical-text-primary group-hover:text-cyber-yellow transition-colors">
                    {{ lang.name }}
                  </div>
                  <div class="text-xs font-mono text-cyber-cyan/70 uppercase tracking-wider">
                    {{ lang.code.toUpperCase() }}
                  </div>
                </div>
              </div>
              
              <!-- Arrow -->
              <div class="text-cyber-cyan group-hover:text-cyber-yellow group-hover:translate-x-2 transition-all duration-300 text-2xl">
                →
              </div>
            </div>

            <!-- Corner accents -->
            <div class="absolute top-2 right-2 w-4 h-4 border-t border-r border-cyber-cyan/0 group-hover:border-cyber-yellow/80 transition-all duration-300"></div>
            <div class="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-cyber-cyan/0 group-hover:border-cyber-yellow/80 transition-all duration-300"></div>
          </button>
        </div>

        <!-- Info Text -->
        <div class="mt-6 text-center">
          <p class="text-xs text-tactical-text-muted font-mono">
            <span class="text-cyber-cyan">></span> You can change language anytime from the navigation bar
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}

.animate-slide-up {
  animation: slide-up 0.4s ease-out;
}
</style>

