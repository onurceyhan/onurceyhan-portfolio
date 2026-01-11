<script setup>
import { Activity, Code2, Terminal } from 'lucide-vue-next'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
</script>

<template>
  <div class="glass-panel h-full p-4 sm:p-6 lg:p-8 relative overflow-hidden group hover:border-cyber-yellow/60 transition-all duration-300 border-2 border-cyber-yellow/30">
    <!-- Decorative accent line -->
    <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyber-cyan via-cyber-yellow to-transparent shadow-lg shadow-cyber-cyan/50"></div>
    
    <!-- Cyber Glow Effects -->
    <div class="absolute top-0 right-0 w-64 h-64 bg-cyber-cyan/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-48 h-48 bg-cyber-yellow/10 rounded-full blur-3xl pointer-events-none"></div>
    
    <!-- Status Bar -->
    <div class="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 lg:mb-12 relative z-10">
      <div class="status-indicator shadow-lg shadow-cyber-cyan/50"></div>
      <span class="font-mono text-cyber-cyan font-black uppercase tracking-wider drop-shadow-[0_0_8px_rgba(3,216,243,0.5)]" style="font-size: clamp(0.625rem, 1.2vw, 0.75rem);">{{ t.hero.status }}</span>
      <div class="flex-1 h-px bg-gradient-to-r from-cyber-cyan/70 via-cyber-yellow/50 to-transparent"></div>
    </div>

    <!-- Main Content -->
    <div class="space-y-4 sm:space-y-6 relative z-10">
      <!-- Name -->
      <div>
        <div class="flex items-center gap-2 mb-2">
          <Terminal :size="16" class="text-cyber-cyan animate-pulse drop-shadow-[0_0_8px_rgba(3,216,243,0.6)] flex-shrink-0" />
          <span class="font-mono text-cyber-yellow font-bold" style="font-size: clamp(0.625rem, 1.2vw, 0.75rem);">{{ t.hero.architectId }}</span>
        </div>
        <h1 class="font-black tracking-tight text-cyber-yellow drop-shadow-[0_0_25px_rgba(252,238,12,0.5)] break-words" style="font-size: clamp(1.875rem, 5vw + 0.5rem, 4.5rem); line-height: 1.1;">
          {{ t.hero.title }}
        </h1>
      </div>

      <!-- Headline -->
      <div class="space-y-2">
        <h2 class="font-bold text-cyber-cyan drop-shadow-[0_0_12px_rgba(3,216,243,0.4)] break-words" style="font-size: clamp(1rem, 2vw + 0.25rem, 1.875rem); line-height: 1.3;">
          {{ t.hero.description }}
        </h2>
        <p class="text-tactical-text-muted font-mono max-w-xl" style="font-size: clamp(0.75rem, 1vw + 0.25rem, 0.875rem); line-height: 1.6;">
          {{ t.hero.longDescription }}
        </p>
      </div>

      <!-- Tech Tags -->
      <div class="flex flex-wrap gap-2 pt-2 sm:pt-4">
        <span class="px-2 sm:px-3 py-1 font-mono font-bold bg-cyber-cyan/20 text-cyber-cyan border-2 border-cyber-cyan/60 rounded shadow-lg shadow-cyber-cyan/20 hover:shadow-cyber-cyan/40 transition-all whitespace-nowrap" style="font-size: clamp(0.625rem, 1vw + 0.125rem, 0.75rem);">
          PYTHON
        </span>
        <span class="px-2 sm:px-3 py-1 font-mono font-bold bg-cyber-cyan/20 text-cyber-cyan border-2 border-cyber-cyan/60 rounded shadow-lg shadow-cyber-cyan/20 hover:shadow-cyber-cyan/40 transition-all whitespace-nowrap" style="font-size: clamp(0.625rem, 1vw + 0.125rem, 0.75rem);">
          AI/ML
        </span>
        <span class="px-2 sm:px-3 py-1 font-mono font-bold bg-cyber-yellow/20 text-cyber-yellow border-2 border-cyber-yellow/60 rounded shadow-lg shadow-cyber-yellow/20 hover:shadow-cyber-yellow/40 transition-all whitespace-nowrap" style="font-size: clamp(0.625rem, 1vw + 0.125rem, 0.75rem);">
          DEVOPS
        </span>
        <span class="px-2 sm:px-3 py-1 font-mono font-bold bg-cyber-yellow/20 text-cyber-yellow border-2 border-cyber-yellow/60 rounded shadow-lg shadow-cyber-yellow/20 hover:shadow-cyber-yellow/40 transition-all whitespace-nowrap" style="font-size: clamp(0.625rem, 1vw + 0.125rem, 0.75rem);">
          CLOUD
        </span>
      </div>

      <!-- Metrics -->
      <div class="grid grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-cyber-cyan/30">
        <div class="space-y-1">
          <div class="flex items-center gap-1 sm:gap-2">
            <Activity :size="14" class="text-cyber-cyan animate-pulse drop-shadow-[0_0_6px_rgba(3,216,243,0.5)] flex-shrink-0" />
            <p class="font-black font-mono text-cyber-yellow" style="font-size: clamp(1.125rem, 2vw + 0.25rem, 1.5rem);">2+</p>
          </div>
          <p class="text-tactical-text-muted font-bold" style="font-size: clamp(0.625rem, 1vw + 0.125rem, 0.75rem);">{{ t.hero.yearsExp }}</p>
        </div>
        <div class="space-y-1">
          <div class="flex items-center gap-1 sm:gap-2">
            <Code2 :size="14" class="text-cyber-cyan animate-pulse drop-shadow-[0_0_6px_rgba(3,216,243,0.5)] flex-shrink-0" />
            <p class="font-black font-mono text-cyber-yellow" style="font-size: clamp(1.125rem, 2vw + 0.25rem, 1.5rem);">4+</p>
          </div>
          <p class="text-tactical-text-muted font-bold" style="font-size: clamp(0.625rem, 1vw + 0.125rem, 0.75rem);">{{ t.hero.projects }}</p>
        </div>
        <div class="space-y-1">
          <div class="flex items-center gap-1 sm:gap-2">
            <Terminal :size="14" class="text-cyber-cyan animate-pulse drop-shadow-[0_0_6px_rgba(3,216,243,0.5)] flex-shrink-0" />
            <p class="font-black font-mono text-cyber-yellow" style="font-size: clamp(1.125rem, 2vw + 0.25rem, 1.5rem);">24/7</p>
          </div>
          <p class="text-tactical-text-muted font-bold" style="font-size: clamp(0.625rem, 1vw + 0.125rem, 0.75rem);">{{ t.hero.uptime }}</p>
        </div>
      </div>
    </div>

    <!-- Decorative corner -->
    <div class="absolute bottom-4 right-4 w-12 h-12 sm:w-16 sm:h-16 border-r-2 border-b-2 border-cyber-cyan/40 opacity-0 group-hover:opacity-100 group-hover:border-cyber-yellow/80 transition-all duration-500 shadow-lg shadow-cyber-cyan/30"></div>
  </div>
</template>
