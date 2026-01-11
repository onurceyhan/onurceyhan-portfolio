<script setup>
import HeroSection from '../components/HeroSection.vue'
import AIChatTerminal from '../components/AIChatTerminal.vue'
import TechArsenal from '../components/TechArsenal.vue'
import DevOpsMonitor from '../components/DevOpsMonitor.vue'
import ProjectFiles from '../components/ProjectFiles.vue'
</script>

<template>
  <div class="container mx-auto px-3 sm:px-4 py-4 sm:py-8 min-h-screen">
    <!-- Bento Grid Layout -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 h-full">
      
      <!-- Hero Section - Mobile: full, Tablet: 2 cols, Desktop: 7 cols -->
      <div class="sm:col-span-2 lg:col-span-7 lg:row-span-2 min-h-[300px] sm:min-h-[400px]">
        <HeroSection />
      </div>

      <!-- AI Chat Terminal - Mobile: full, Tablet: 2 cols, Desktop: 5 cols -->
      <div class="sm:col-span-2 lg:col-span-5 lg:row-span-4 min-h-[400px] sm:min-h-[500px]">
        <AIChatTerminal />
      </div>

      <!-- Tech Arsenal - Mobile: full, Tablet: 2 cols, Desktop: 7 cols -->
      <div class="sm:col-span-2 lg:col-span-7 lg:row-span-1 min-h-[250px]">
        <TechArsenal />
      </div>

      <!-- DevOps Monitor - Mobile: full, Tablet: 1 col, Desktop: 4 cols -->
      <div class="sm:col-span-1 lg:col-span-4 lg:row-span-1 min-h-[200px]">
        <DevOpsMonitor />
      </div>

      <!-- Project Files - Mobile: full, Tablet: 1 col, Desktop: 3 cols -->
      <div class="sm:col-span-1 lg:col-span-3 lg:row-span-1 min-h-[200px]">
        <ProjectFiles />
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Ensure consistent grid item heights */
.grid > div {
  min-height: 200px;
}
</style>

