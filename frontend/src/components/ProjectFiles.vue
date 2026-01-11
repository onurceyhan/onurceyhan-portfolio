<script setup>
import { ref, computed } from 'vue'
import { FileCode, ChevronRight, Lock, Unlock } from 'lucide-vue-next'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const projects = computed(() => [
  { 
    id: 'PRJ_001', 
    name: 'AI Microservices', 
    status: t.value.projectFiles.statuses.deployed, 
    classification: 'production',
    locked: false 
  },
  { 
    id: 'PRJ_002', 
    name: 'Real-time Analytics', 
    status: t.value.projectFiles.statuses.active, 
    classification: 'production',
    locked: false 
  },
  { 
    id: 'PRJ_003', 
    name: 'ML Pipeline', 
    status: t.value.projectFiles.statuses.testing, 
    classification: 'staging',
    locked: false 
  },
  { 
    id: 'PRJ_004', 
    name: 'Cloud Migration', 
    status: t.value.projectFiles.statuses.classified, 
    classification: 'confidential',
    locked: true 
  },
])
</script>

<template>
  <div class="glass-panel h-full p-4 sm:p-6 relative overflow-hidden group">
    <!-- Cyber Glow Effects -->
    <div class="absolute top-0 left-0 w-48 h-48 bg-cyber-yellow/5 rounded-full blur-3xl pointer-events-none"></div>
    
    <!-- Header -->
    <div class="flex items-center justify-between mb-6 relative z-10">
      <div>
        <h3 class="text-lg font-bold font-mono flex items-center gap-2">
          <FileCode :size="18" class="text-cyber-cyan animate-pulse drop-shadow-[0_0_8px_rgba(3,216,243,0.6)]" />
          <span class="text-cyber-yellow text-glow-yellow">{{ t.projectFiles.title }}</span>
        </h3>
        <p class="text-xs text-cyber-cyan/70 font-mono mt-1 font-semibold">{{ t.projectFiles.subtitle }}</p>
      </div>
    </div>

    <!-- Project List -->
    <div class="space-y-3 relative z-10">
      <div 
        v-for="project in projects" 
        :key="project.id"
        class="group/proj p-3 bg-cyber-black/40 border-2 border-cyber-cyan/30 hover:border-cyber-yellow/60 rounded cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-cyber-cyan/20"
      >
        <div class="flex items-start justify-between">
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xs font-mono font-bold text-cyber-cyan">{{ project.id }}</span>
              <component 
                :is="project.locked ? Lock : Unlock" 
                :size="10" 
                class="text-cyber-yellow group-hover/proj:rotate-12 transition-transform"
              />
            </div>
            <p class="text-sm font-bold text-tactical-text-primary group-hover/proj:text-cyber-yellow transition-colors">
              {{ project.name }}
            </p>
            <div class="flex items-center gap-2 mt-2">
              <span 
                class="text-xs font-mono font-bold px-2 py-0.5 rounded border"
                :class="{
                  'bg-cyber-cyan/20 text-cyber-cyan border-cyber-cyan/40': project.classification === 'production',
                  'bg-cyber-yellow/20 text-cyber-yellow border-cyber-yellow/40': project.classification === 'staging',
                  'bg-red-500/20 text-red-400 border-red-500/40': project.classification === 'confidential',
                }"
              >
                {{ project.status }}
              </span>
            </div>
          </div>
          <ChevronRight 
            :size="16" 
            class="text-cyber-cyan group-hover/proj:text-cyber-yellow group-hover/proj:translate-x-1 transition-all" 
          />
        </div>
      </div>
    </div>

    <!-- View All -->
    <button class="w-full mt-4 py-2 border-2 border-cyber-cyan/60 rounded text-sm font-mono font-bold text-cyber-cyan hover:bg-cyber-yellow/20 hover:border-cyber-yellow hover:text-cyber-yellow transition-all shadow-lg shadow-cyber-cyan/20 hover:shadow-cyber-yellow/30 relative z-10">
      {{ t.projectFiles.viewAll }}
    </button>

    <!-- Decorative corners -->
    <div class="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyber-cyan/40 group-hover:border-cyber-yellow/80 transition-colors duration-500"></div>
    <div class="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyber-cyan/40 group-hover:border-cyber-yellow/80 transition-colors duration-500"></div>
  </div>
</template>

