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
    <div class="flex items-center gap-3 mb-12 relative z-10">
      <div class="status-indicator shadow-lg shadow-cyber-cyan/50"></div>
      <span class="text-xs font-mono text-cyber-cyan font-black uppercase tracking-wider drop-shadow-[0_0_8px_rgba(3,216,243,0.5)]">{{ t.hero.status }}</span>
      <div class="flex-1 h-px bg-gradient-to-r from-cyber-cyan/70 via-cyber-yellow/50 to-transparent"></div>
    </div>

    <!-- Main Content -->
    <div class="space-y-6 relative z-10">
      <!-- Name -->
      <div>
        <div class="flex items-center gap-2 mb-2">
          <Terminal :size="16" class="text-cyber-cyan animate-pulse drop-shadow-[0_0_8px_rgba(3,216,243,0.6)]" />
          <span class="text-xs font-mono text-cyber-yellow font-bold">{{ t.hero.architectId }}</span>
        </div>
        <h1 class="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-cyber-yellow drop-shadow-[0_0_25px_rgba(252,238,12,0.5)]">
          {{ t.hero.title }}
        </h1>
      </div>

      <!-- Headline -->
      <div class="space-y-2">
        <h2 class="text-base sm:text-xl lg:text-2xl xl:text-3xl font-bold text-cyber-cyan drop-shadow-[0_0_12px_rgba(3,216,243,0.4)]">
          {{ t.hero.description }}
        </h2>
        <p class="text-tactical-text-muted font-mono text-sm max-w-xl">
          {{ t.hero.longDescription }}
        </p>
      </div>

      <!-- Tech Tags -->
      <div class="flex flex-wrap gap-2 pt-4">
        <span class="px-3 py-1 text-xs font-mono font-bold bg-cyber-cyan/20 text-cyber-cyan border-2 border-cyber-cyan/60 rounded shadow-lg shadow-cyber-cyan/20 hover:shadow-cyber-cyan/40 transition-all">
          PYTHON
        </span>
        <span class="px-3 py-1 text-xs font-mono font-bold bg-cyber-cyan/20 text-cyber-cyan border-2 border-cyber-cyan/60 rounded shadow-lg shadow-cyber-cyan/20 hover:shadow-cyber-cyan/40 transition-all">
          AI/ML
        </span>
        <span class="px-3 py-1 text-xs font-mono font-bold bg-cyber-yellow/20 text-cyber-yellow border-2 border-cyber-yellow/60 rounded shadow-lg shadow-cyber-yellow/20 hover:shadow-cyber-yellow/40 transition-all">
          DEVOPS
        </span>
        <span class="px-3 py-1 text-xs font-mono font-bold bg-cyber-yellow/20 text-cyber-yellow border-2 border-cyber-yellow/60 rounded shadow-lg shadow-cyber-yellow/20 hover:shadow-cyber-yellow/40 transition-all">
          CLOUD
        </span>
      </div>

      <!-- Metrics -->
      <div class="grid grid-cols-3 gap-4 pt-6 border-t border-cyber-cyan/30">
        <div class="space-y-1">
          <div class="flex items-center gap-2">
            <Activity :size="14" class="text-cyber-cyan animate-pulse drop-shadow-[0_0_6px_rgba(3,216,243,0.5)]" />
            <p class="text-2xl font-black font-mono text-cyber-yellow">2+</p>
          </div>
          <p class="text-xs text-tactical-text-muted font-bold">{{ t.hero.yearsExp }}</p>
        </div>
        <div class="space-y-1">
          <div class="flex items-center gap-2">
            <Code2 :size="14" class="text-cyber-cyan animate-pulse drop-shadow-[0_0_6px_rgba(3,216,243,0.5)]" />
            <p class="text-2xl font-black font-mono text-cyber-yellow">4+</p>
          </div>
          <p class="text-xs text-tactical-text-muted font-bold">{{ t.hero.projects }}</p>
        </div>
        <div class="space-y-1">
          <div class="flex items-center gap-2">
            <Terminal :size="14" class="text-cyber-cyan animate-pulse drop-shadow-[0_0_6px_rgba(3,216,243,0.5)]" />
            <p class="text-2xl font-black font-mono text-cyber-yellow">24/7</p>
          </div>
          <p class="text-xs text-tactical-text-muted font-bold">{{ t.hero.uptime }}</p>
        </div>
      </div>
    </div>

    <!-- Decorative corner -->
    <div class="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-cyber-cyan/40 opacity-0 group-hover:opacity-100 group-hover:border-cyber-yellow/80 transition-all duration-500 shadow-lg shadow-cyber-cyan/30"></div>
  </div>
</template>

