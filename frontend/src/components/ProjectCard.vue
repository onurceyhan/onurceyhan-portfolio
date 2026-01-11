<script setup>
import { ExternalLink, Github } from 'lucide-vue-next'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  techStack: {
    type: Array,
    default: () => []
  },
  liveUrl: {
    type: String,
    default: ''
  },
  repoUrl: {
    type: String,
    default: ''
  },
  imageUrl: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="group relative bg-slate-900/80 backdrop-blur-sm border-2 border-cyber-cyan/30 rounded-lg overflow-hidden hover:border-cyber-yellow/60 transition-all duration-500 hover:shadow-2xl hover:shadow-cyber-cyan/20 hover:-translate-y-2">
    <!-- Image Section -->
    <div v-if="imageUrl" class="relative h-48 overflow-hidden bg-tactical-bg">
      <img 
        :src="imageUrl" 
        :alt="title"
        class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
      />
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-cyber-black via-slate-900/50 to-transparent"></div>
      
      <!-- Cyber Corner Accents -->
      <div class="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-cyber-cyan/40 opacity-0 group-hover:opacity-100 group-hover:border-cyber-yellow/80 transition-all duration-300"></div>
      <div class="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-cyber-cyan/40 opacity-0 group-hover:opacity-100 group-hover:border-cyber-yellow/80 transition-all duration-300"></div>
    </div>

    <!-- Placeholder if no image -->
    <div v-else class="relative h-48 bg-gradient-to-br from-tactical-surface to-tactical-bg flex items-center justify-center">
      <div class="text-6xl font-black text-tactical-accent/10 font-mono">{{ title.charAt(0) }}</div>
    </div>

    <!-- Content Section -->
    <div class="p-6 space-y-4">
      <!-- Title with accent line -->
      <div class="space-y-2">
        <div class="flex items-start justify-between gap-2">
          <h3 class="text-xl font-black text-tactical-text-primary group-hover:text-cyber-yellow transition-colors group-hover:drop-shadow-[0_0_8px_rgba(252,238,12,0.4)]">
            {{ title }}
          </h3>
          <div class="flex-shrink-0 w-8 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-yellow mt-3 shadow-lg shadow-cyber-cyan/50"></div>
        </div>
      </div>

      <!-- Description -->
      <p class="text-sm text-tactical-text-secondary leading-relaxed min-h-[60px]">
        {{ description }}
      </p>

      <!-- Tech Stack Pills -->
      <div v-if="techStack.length > 0" class="flex flex-wrap gap-2 pt-2">
        <span 
          v-for="tech in techStack" 
          :key="tech"
          class="px-2.5 py-1 text-xs font-mono font-bold bg-cyber-cyan/15 text-cyber-cyan border-2 border-cyber-cyan/40 rounded hover:bg-cyber-yellow/20 hover:text-cyber-yellow hover:border-cyber-yellow/60 transition-all shadow-lg shadow-cyber-cyan/10 hover:shadow-cyber-yellow/20"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Action Buttons -->
      <div class="grid grid-cols-2 gap-3 pt-4 border-t border-tactical-border/50">
        <!-- Live System Button -->
        <a 
          v-if="liveUrl"
          :href="liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center gap-2 px-4 py-2.5 bg-cyber-cyan/15 hover:bg-cyber-yellow/20 border-2 border-cyber-cyan/60 hover:border-cyber-yellow rounded text-cyber-cyan hover:text-cyber-yellow text-xs font-mono font-black uppercase tracking-wider transition-all hover:shadow-lg hover:shadow-cyber-yellow/40 group/btn"
        >
          <ExternalLink :size="14" class="group-hover/btn:rotate-12 group-hover/btn:scale-110 transition-transform" />
          <span>{{ t.projects.liveSystem }}</span>
        </a>
        <div 
          v-else
          class="flex items-center justify-center gap-2 px-4 py-2.5 bg-tactical-border/20 border border-tactical-border/40 rounded text-tactical-text-muted text-xs font-mono font-semibold uppercase tracking-wider cursor-not-allowed opacity-50"
        >
          <ExternalLink :size="14" />
          <span>{{ t.projects.liveSystem }}</span>
        </div>

        <!-- Source Code Button -->
        <a 
          v-if="repoUrl"
          :href="repoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center gap-2 px-4 py-2.5 bg-cyber-black/60 hover:bg-cyber-cyan/20 border-2 border-cyber-cyan/40 hover:border-cyber-cyan rounded text-cyber-cyan hover:text-cyber-yellow text-xs font-mono font-black uppercase tracking-wider transition-all hover:shadow-lg hover:shadow-cyber-cyan/40 group/btn"
        >
          <Github :size="14" class="group-hover/btn:rotate-12 group-hover/btn:scale-110 transition-transform" />
          <span>{{ t.projects.sourceCode }}</span>
        </a>
        <div 
          v-else
          class="flex items-center justify-center gap-2 px-4 py-2.5 bg-tactical-border/20 border border-tactical-border/40 rounded text-tactical-text-muted text-xs font-mono font-semibold uppercase tracking-wider cursor-not-allowed opacity-50"
        >
          <Github :size="14" />
          <span>{{ t.projects.sourceCode }}</span>
        </div>
      </div>
    </div>

    <!-- Cyber Scan Line Effect -->
    <div class="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-cyan/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000"></div>
    </div>
  </div>
</template>

