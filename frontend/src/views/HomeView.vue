<script setup>
import { ArrowRight } from 'lucide-vue-next'
import HeroSection from '../components/HeroSection.vue'
import Capabilities from '../components/Capabilities.vue'
import TeraziShowcase from '../components/TeraziShowcase.vue'
import RagPipeline from '../components/RagPipeline.vue'
import AIChatTerminal from '../components/AIChatTerminal.vue'
import TechArsenal from '../components/TechArsenal.vue'
import { useReveal } from '../composables/useReveal'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
const emit = defineEmits(['navigate'])

useReveal()
</script>

<template>
  <div class="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-8 space-y-4 sm:space-y-8">

    <!-- Hero -->
    <section class="min-h-[360px] sm:min-h-[440px]">
      <HeroSection />
    </section>

    <!-- Ne yapıyorum — yetenekler (detaylı) -->
    <section class="scroll-mt-24">
      <Capabilities />
    </section>

    <!-- RAG mimarisi nasıl çalışır -->
    <section class="scroll-mt-24">
      <RagPipeline />
    </section>

    <!-- En büyük projem — Terazi (canlı örnek) -->
    <section id="terazi" class="scroll-mt-24">
      <TeraziShowcase />
    </section>

    <!-- Tech + interaktif AI demo -->
    <section class="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
      <div class="lg:col-span-7 reveal">
        <TechArsenal />
      </div>
      <div class="lg:col-span-5 min-h-[440px] reveal reveal-delay-1">
        <AIChatTerminal />
      </div>
    </section>

    <!-- Tüm projeler CTA -->
    <section class="reveal flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 glass-panel p-6 sm:p-8 border border-cyber-cyan/20">
      <div>
        <h3 class="font-black text-cyber-yellow text-xl sm:text-2xl mb-1">{{ t.projects.title.replace('_', ' ') }}</h3>
        <p class="text-tactical-text-secondary text-sm max-w-md">{{ t.projects.subtitle }}</p>
      </div>
      <button
        @click="emit('navigate', 'projects')"
        class="group inline-flex items-center gap-2 px-6 py-3 bg-cyber-cyan/10 border border-cyber-cyan/50 hover:border-cyber-yellow hover:bg-cyber-yellow/10 rounded text-cyber-cyan hover:text-cyber-yellow font-mono font-bold text-sm uppercase tracking-wider transition-all whitespace-nowrap"
      >
        {{ t.nav.projects }}
        <ArrowRight :size="16" class="group-hover:translate-x-1 transition-transform" />
      </button>
    </section>

  </div>
</template>
