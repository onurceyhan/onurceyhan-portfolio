<script setup>
import { ref, computed } from 'vue'
import { Server, Activity, GitBranch, Gauge } from 'lucide-vue-next'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const metrics = computed(() => [
  { label: t.value.devops.serverLoad, value: '24%', status: 'optimal' },
  { label: t.value.devops.uptime, value: '99.98%', status: 'optimal' },
  { label: t.value.devops.deployments, value: '247', status: 'active' },
])

const infrastructure = computed(() => t.value.devops.infrastructure)
</script>

<template>
  <div class="glass-panel h-full p-4 sm:p-6 relative overflow-hidden group">
    <!-- Cyber Glow Effects -->
    <div class="absolute top-0 right-0 w-56 h-56 bg-cyber-yellow/5 rounded-full blur-3xl pointer-events-none"></div>
    
    <!-- Header -->
    <div class="flex items-center gap-2 mb-6 relative z-10">
      <Server :size="18" class="text-cyber-cyan animate-pulse drop-shadow-[0_0_8px_rgba(3,216,243,0.6)]" />
      <h3 class="text-lg font-bold font-mono text-cyber-yellow text-glow-yellow">{{ t.devops.title }}</h3>
    </div>

    <!-- Metrics Grid -->
    <div class="grid grid-cols-3 gap-3 mb-6 relative z-10">
      <div 
        v-for="metric in metrics" 
        :key="metric.label"
        class="group/metric p-3 bg-cyber-black/50 border-2 border-cyber-cyan/40 rounded hover:border-cyber-yellow/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-cyan/20"
      >
        <p class="text-xs font-mono text-cyber-cyan/70 mb-1 font-semibold">{{ metric.label }}</p>
        <p class="text-xl font-black font-mono text-cyber-yellow group-hover/metric:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(252,238,12,0.4)]">{{ metric.value }}</p>
      </div>
    </div>

    <!-- Server Load Visualization -->
    <div class="mb-4 relative z-10">
      <div class="flex items-center justify-between mb-2">
        <span class="text-xs font-mono font-bold text-cyber-cyan">{{ t.devops.resourceUsage }}</span>
        <Gauge :size="14" class="text-cyber-yellow animate-pulse drop-shadow-[0_0_6px_rgba(252,238,12,0.5)]" />
      </div>
      <div class="h-3 bg-cyber-black/70 border border-cyber-cyan/30 rounded-full overflow-hidden">
        <div class="h-full w-1/4 bg-gradient-to-r from-cyber-cyan via-cyber-yellow to-cyber-cyan rounded-full animate-pulse shadow-lg shadow-cyber-cyan/50" style="animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite, shimmer 3s ease-in-out infinite;">
        </div>
      </div>
    </div>

    <!-- Infrastructure List -->
    <div class="space-y-2 relative z-10">
      <div 
        v-for="item in infrastructure" 
        :key="item"
        class="flex items-center gap-2 text-xs font-mono text-tactical-text-secondary pl-3 py-2 border-l-2 border-cyber-cyan/50 hover:border-cyber-yellow hover:text-cyber-yellow transition-all bg-cyber-black/20 rounded-r"
      >
        <Activity :size="12" class="text-cyber-cyan animate-pulse drop-shadow-[0_0_4px_rgba(3,216,243,0.5)]" />
        {{ item }}
      </div>
    </div>

    <!-- Status Indicator -->
    <div class="absolute bottom-4 right-4 flex items-center gap-2 z-10">
      <div class="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse shadow-lg shadow-cyber-cyan/50"></div>
      <span class="text-xs font-mono font-bold text-cyber-yellow">{{ t.devops.operational }}</span>
    </div>
  </div>
</template>
