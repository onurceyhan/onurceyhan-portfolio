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

    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-tactical-bg/80 backdrop-blur-xl border-b border-tactical-border/70">
      <div class="container mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4 flex items-center justify-between gap-2">
        <button @click="currentView = 'home'" class="flex items-center gap-2.5 group">
          <span class="w-2 h-2 rounded-full bg-tactical-accent animate-pulse-glow"></span>
          <span class="text-sm sm:text-base font-bold tracking-tight text-tactical-text-primary group-hover:text-tactical-accent transition-colors">Onur Ceyhan</span>
        </button>

        <div class="flex gap-1 sm:gap-2 items-center">
          <button
            @click="currentView = 'home'"
            class="relative px-3 sm:px-4 py-1.5 sm:py-2 font-medium rounded-lg transition-colors whitespace-nowrap"
            style="font-size: clamp(0.75rem, 0.8vw + 0.2rem, 0.875rem);"
            :class="currentView === 'home'
              ? 'text-tactical-accent bg-tactical-accent/10'
              : 'text-tactical-text-secondary hover:text-tactical-text-primary'"
          >
            {{ t.nav.home }}
          </button>
          <button
            @click="currentView = 'projects'"
            class="relative px-3 sm:px-4 py-1.5 sm:py-2 font-medium rounded-lg transition-colors whitespace-nowrap"
            style="font-size: clamp(0.75rem, 0.8vw + 0.2rem, 0.875rem);"
            :class="currentView === 'projects'
              ? 'text-tactical-accent bg-tactical-accent/10'
              : 'text-tactical-text-secondary hover:text-tactical-text-primary'"
          >
            {{ t.nav.projects }}
          </button>

          <div class="hidden sm:block h-5 w-px bg-tactical-border mx-1.5"></div>
          <button
            @click="toggleLanguage"
            class="group flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 border border-tactical-border/80 hover:border-tactical-accent/50 rounded-lg transition-colors"
            :title="currentLanguage === 'tr' ? 'Switch to English' : 'Türkçe\'ye geç'"
          >
            <img
              :src="currentLanguage === 'tr' ? '/images/flag-tr.svg' : '/images/flag-uk.svg'"
              :alt="currentLanguage === 'tr' ? 'Turkish Flag' : 'UK Flag'"
              class="w-5 h-auto group-hover:scale-105 transition-transform"
            />
            <span class="hidden sm:inline font-medium text-tactical-text-secondary group-hover:text-tactical-text-primary uppercase" style="font-size: clamp(0.7rem, 0.8vw, 0.8rem);">
              {{ currentLanguage === 'tr' ? 'TR' : 'EN' }}
            </span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Main Content with top padding for fixed nav -->
    <div class="pt-16 sm:pt-20">
      <Transition name="view" mode="out-in">
        <HomeView v-if="currentView === 'home'" @navigate="currentView = $event" />
        <ProjectsView v-else />
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.view-enter-active,
.view-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.view-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.view-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
@media (prefers-reduced-motion: reduce) {
  .view-enter-active,
  .view-leave-active {
    transition: none;
  }
  .view-enter-from,
  .view-leave-to {
    transform: none;
  }
}
</style>

