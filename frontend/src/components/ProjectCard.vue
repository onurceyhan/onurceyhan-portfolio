<script setup>
import { ExternalLink, Github } from 'lucide-vue-next'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: { type: Array, default: () => [] },
  liveUrl: { type: String, default: '' },
  repoUrl: { type: String, default: '' },
  imageUrl: { type: String, default: '' }
})
</script>

<template>
  <div class="group relative bg-tactical-surface/60 backdrop-blur-sm border border-cyber-cyan/20 rounded-lg overflow-hidden hover:border-cyber-yellow/50 transition-all duration-300 hover:-translate-y-1">
    <!-- Görsel -->
    <div v-if="imageUrl" class="relative h-44 overflow-hidden bg-tactical-bg">
      <img
        :src="imageUrl"
        :alt="title"
        class="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-tactical-bg via-tactical-bg/30 to-transparent"></div>
    </div>
    <div v-else class="relative h-44 bg-gradient-to-br from-tactical-surface to-tactical-bg flex items-center justify-center">
      <div class="text-6xl font-black text-cyber-cyan/10 font-mono">{{ title.charAt(0) }}</div>
    </div>

    <!-- İçerik -->
    <div class="p-5 sm:p-6 space-y-4">
      <div class="flex items-start justify-between gap-2">
        <h3 class="font-black text-tactical-text-primary group-hover:text-cyber-yellow transition-colors break-words" style="font-size: clamp(1rem, 1.5vw + 0.25rem, 1.2rem); line-height: 1.3;">
          {{ title }}
        </h3>
        <div class="flex-shrink-0 w-6 h-0.5 bg-gradient-to-r from-cyber-cyan to-cyber-yellow mt-2.5"></div>
      </div>

      <p class="text-tactical-text-secondary leading-relaxed min-h-[60px] break-words" style="font-size: clamp(0.78rem, 1vw + 0.1rem, 0.875rem);">
        {{ description }}
      </p>

      <div v-if="techStack.length > 0" class="flex flex-wrap gap-1.5">
        <span
          v-for="tech in techStack"
          :key="tech"
          class="px-2 py-0.5 font-mono font-semibold bg-cyber-cyan/8 text-cyber-cyan/90 border border-cyber-cyan/25 rounded whitespace-nowrap"
          style="font-size: clamp(0.6rem, 0.9vw, 0.72rem);"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Butonlar -->
      <div class="grid grid-cols-2 gap-3 pt-3 border-t border-tactical-border/50">
        <a
          v-if="liveUrl"
          :href="liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center gap-2 px-3 py-2.5 bg-cyber-cyan/10 hover:bg-cyber-yellow/15 border border-cyber-cyan/40 hover:border-cyber-yellow rounded text-cyber-cyan hover:text-cyber-yellow font-mono font-bold uppercase tracking-wider transition-all"
          style="font-size: clamp(0.625rem, 0.8vw + 0.05rem, 0.72rem);"
        >
          <ExternalLink :size="13" class="flex-shrink-0" />
          <span class="truncate">{{ t.projects.liveSystem }}</span>
        </a>
        <div
          v-else
          class="flex items-center justify-center gap-2 px-3 py-2.5 border border-tactical-border/40 rounded text-tactical-text-muted text-xs font-mono uppercase tracking-wider cursor-not-allowed opacity-40"
        >
          <ExternalLink :size="13" />
          <span>{{ t.projects.liveSystem }}</span>
        </div>

        <a
          v-if="repoUrl"
          :href="repoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center gap-2 px-3 py-2.5 bg-cyber-black/40 hover:bg-cyber-cyan/15 border border-cyber-cyan/30 hover:border-cyber-cyan rounded text-cyber-cyan hover:text-cyber-yellow font-mono font-bold uppercase tracking-wider transition-all"
          style="font-size: clamp(0.625rem, 0.8vw + 0.05rem, 0.72rem);"
        >
          <Github :size="13" class="flex-shrink-0" />
          <span class="truncate">{{ t.projects.sourceCode }}</span>
        </a>
        <div
          v-else
          class="flex items-center justify-center gap-2 px-3 py-2.5 border border-tactical-border/40 rounded text-tactical-text-muted text-xs font-mono uppercase tracking-wider cursor-not-allowed opacity-40"
        >
          <Github :size="13" />
          <span>{{ t.projects.sourceCode }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
