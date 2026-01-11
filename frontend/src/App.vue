<script setup>
import { ref } from 'vue'
import HomeView from './views/HomeView.vue'
import ProjectsView from './views/ProjectsView.vue'
import { useLanguage } from './composables/useLanguage'

// Toggle between views: 'home' or 'projects'
const currentView = ref('home')

// Language management
const { currentLanguage, setLanguage, t } = useLanguage()

const toggleLanguage = () => {
  const newLang = currentLanguage.value === 'tr' ? 'en' : 'tr'
  setLanguage(newLang)
}
</script>

<template>
  <div class="min-h-screen grid-bg">

    <!-- Cyber Navigation Bar -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-cyber-black/90 backdrop-blur-xl border-b-2 border-cyber-cyan/30 shadow-lg shadow-cyber-cyan/10">
      <div class="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between gap-2">
        <div class="flex items-center gap-2 sm:gap-3">
          <div class="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse shadow-lg shadow-cyber-cyan/50"></div>
          <span class="text-sm sm:text-lg font-mono font-black text-cyber-yellow drop-shadow-[0_0_10px_rgba(252,238,12,0.5)]">ONUR_CEYHAN</span>
          <div class="hidden sm:block h-4 w-px bg-gradient-to-b from-cyber-cyan to-cyber-yellow ml-2"></div>
          <span class="hidden md:block text-xs font-mono text-cyber-cyan/70 font-semibold">PORTFOLIO.SYS</span>
        </div>
        
        <div class="flex gap-1 sm:gap-2 items-center flex-wrap">
          <button 
            @click="currentView = 'home'"
            class="px-2 sm:px-4 py-1.5 sm:py-2 font-mono font-bold uppercase tracking-wider rounded transition-all border-2 whitespace-nowrap"
            style="font-size: clamp(0.625rem, 0.8vw + 0.125rem, 0.75rem);"
            :class="currentView === 'home' 
              ? 'bg-cyber-cyan/20 text-cyber-cyan border-cyber-cyan/60 shadow-lg shadow-cyber-cyan/30' 
              : 'text-cyber-cyan/70 border-cyber-cyan/20 hover:text-cyber-yellow hover:border-cyber-yellow/40 hover:bg-cyber-yellow/10'"
          >
            {{ t.nav.home }}
          </button>
          <button 
            @click="currentView = 'projects'"
            class="px-2 sm:px-4 py-1.5 sm:py-2 font-mono font-bold uppercase tracking-wider rounded transition-all border-2 whitespace-nowrap"
            style="font-size: clamp(0.625rem, 0.8vw + 0.125rem, 0.75rem);"
            :class="currentView === 'projects' 
              ? 'bg-cyber-cyan/20 text-cyber-cyan border-cyber-cyan/60 shadow-lg shadow-cyber-cyan/30' 
              : 'text-cyber-cyan/70 border-cyber-cyan/20 hover:text-cyber-yellow hover:border-cyber-yellow/40 hover:bg-cyber-yellow/10'"
          >
            {{ t.nav.projects }}
          </button>
          
          <!-- Language Switcher -->
          <div class="hidden sm:block h-8 w-px bg-cyber-cyan/30 mx-1"></div>
          <button
            @click="toggleLanguage"
            class="group flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-cyber-cyan/10 border-2 border-cyber-cyan/40 hover:border-cyber-yellow/60 rounded transition-all hover:bg-cyber-yellow/10 hover:shadow-lg hover:shadow-cyber-yellow/20"
            :title="currentLanguage === 'tr' ? 'Switch to English' : 'Türkçe\'ye geç'"
          >
            <img 
              :src="currentLanguage === 'tr' ? '/images/flag-tr.svg' : '/images/flag-uk.svg'" 
              :alt="currentLanguage === 'tr' ? 'Turkish Flag' : 'UK Flag'" 
              class="w-5 h-auto group-hover:scale-110 transition-transform" 
            />
            <span class="hidden sm:inline font-mono font-bold text-cyber-cyan group-hover:text-cyber-yellow uppercase" style="font-size: clamp(0.625rem, 0.8vw, 0.75rem);">
              {{ currentLanguage === 'tr' ? 'TR' : 'EN' }}
            </span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Main Content with top padding for fixed nav -->
    <div class="pt-16 sm:pt-20">
      <HomeView v-if="currentView === 'home'" />
      <ProjectsView v-else />
    </div>
  </div>
</template>

