<script setup>
import { ref, computed } from 'vue'
import { Code2, Database, Cloud, Boxes, Zap, Shield, Cpu, Layers } from 'lucide-vue-next'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const technologies = computed(() => [
  { name: 'Python', icon: Code2, category: t.value.tech.categories.core },
  { name: 'Django', icon: Layers, category: t.value.tech.categories.backend },
  { name: 'FastAPI', icon: Zap, category: t.value.tech.categories.backend },
  { name: 'Vue.js', icon: Boxes, category: t.value.tech.categories.frontend },
  { name: 'Docker', icon: Boxes, category: t.value.tech.categories.devops },
  { name: 'AWS', icon: Cloud, category: t.value.tech.categories.cloud },
  { name: 'PostgreSQL', icon: Database, category: t.value.tech.categories.database },
  { name: 'Redis', icon: Cpu, category: t.value.tech.categories.cache },
])
</script>

<template>
  <div class="glass-panel h-full p-4 sm:p-6 relative overflow-hidden group">
    <!-- Cyber Glow Effects -->
    <div class="absolute top-0 left-0 w-48 h-48 bg-cyber-cyan/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 right-0 w-48 h-48 bg-cyber-yellow/5 rounded-full blur-3xl pointer-events-none"></div>
    
    <!-- Header -->
    <div class="flex items-center justify-between mb-6 relative z-10">
      <div>
        <h3 class="text-lg font-bold font-mono flex items-center gap-2">
          <Shield :size="18" class="text-cyber-cyan animate-pulse drop-shadow-[0_0_8px_rgba(3,216,243,0.6)]" />
          <span class="text-cyber-yellow text-glow-yellow">{{ t.tech.title }}</span>
        </h3>
        <p class="text-xs text-tactical-text-muted font-mono mt-1">{{ t.tech.subtitle }}</p>
      </div>
      <div class="text-xs font-mono font-bold text-cyber-cyan px-3 py-1 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded">
        {{ technologies.length }} {{ t.tech.loaded }}
      </div>
    </div>

    <!-- Tech Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 relative z-10">
      <div 
        v-for="(tech, index) in technologies" 
        :key="tech.name"
        class="group/card relative p-4 bg-cyber-black/40 border-2 border-cyber-cyan/30 rounded hover:border-cyber-yellow/60 transition-all duration-300 cursor-pointer cyber-card"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <!-- Icon -->
        <div class="flex flex-col items-center gap-2">
          <div class="w-12 h-12 rounded-lg bg-cyber-cyan/10 border-2 border-cyber-cyan/40 group-hover/card:border-cyber-yellow/60 flex items-center justify-center transition-all duration-300 group-hover/card:shadow-lg group-hover/card:shadow-cyber-yellow/30 group-hover/card:scale-110">
            <component 
              :is="tech.icon" 
              :size="24" 
              class="text-cyber-cyan group-hover/card:text-cyber-yellow transition-colors duration-300 drop-shadow-[0_0_6px_rgba(3,216,243,0.5)]"
            />
          </div>
          
          <!-- Name -->
          <div class="text-center">
            <p class="text-sm font-mono font-bold text-tactical-text-primary group-hover/card:text-cyber-yellow transition-colors">
              {{ tech.name }}
            </p>
            <p class="text-xs font-mono text-cyber-cyan/70 mt-1 group-hover/card:text-cyber-yellow/80">
              {{ tech.category }}
            </p>
          </div>
        </div>

        <!-- Animated corner borders -->
        <div class="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyber-cyan/0 group-hover/card:border-cyber-yellow/80 transition-all duration-300"></div>
        <div class="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyber-cyan/0 group-hover/card:border-cyber-yellow/80 transition-all duration-300"></div>
      </div>
    </div>

    <!-- Decorative line -->
    <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent group-hover:via-cyber-yellow/50 transition-colors duration-500"></div>
  </div>
</template>

