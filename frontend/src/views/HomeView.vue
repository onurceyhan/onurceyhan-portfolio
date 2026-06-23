<script setup>
import { ArrowRight } from 'lucide-vue-next'
import HeroSection from '../components/HeroSection.vue'
import Capabilities from '../components/Capabilities.vue'
import TeraziShowcase from '../components/TeraziShowcase.vue'
import RagPipeline from '../components/RagPipeline.vue'
import AIChatTerminal from '../components/AIChatTerminal.vue'
import TechArsenal from '../components/TechArsenal.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { featuredWebsites } from '../data/projects'
import { useReveal } from '../composables/useReveal'
import { useLanguage } from '../composables/useLanguage'

const { t, currentLanguage } = useLanguage()
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

    <!-- İşletmeniz için web sitesi — küçük işler de bu portföyle -->
    <section class="scroll-mt-24 py-8 sm:py-12">
      <div class="max-w-3xl mb-8">
        <p class="section-kicker mb-4 reveal">03 — WEB &amp; ARAYÜZ</p>
        <h2 class="reveal reveal-delay-1 font-black text-tactical-text-primary leading-tight mb-3" style="font-size: clamp(1.6rem, 3vw + 0.5rem, 2.6rem);">
          {{ t.web.title }}
        </h2>
        <p class="reveal reveal-delay-2 text-tactical-text-secondary leading-relaxed" style="font-size: clamp(0.9rem, 1vw + 0.4rem, 1.05rem);">
          {{ t.web.subtitle }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div v-for="(site, i) in featuredWebsites" :key="site.id" :class="['reveal', `reveal-delay-${Math.min(i, 3)}`]">
          <ProjectCard
            :title="site.title[currentLanguage]"
            :description="site.description[currentLanguage]"
            :tech-stack="site.techStack"
            :live-url="site.liveUrl"
            :repo-url="site.repoUrl"
            :image-url="site.imageUrl"
          />
        </div>
      </div>

      <div class="reveal flex justify-center mt-8">
        <button
          @click="emit('navigate', 'projects')"
          class="group inline-flex items-center gap-2 px-6 py-3 border border-tactical-border hover:border-tactical-accent/50 rounded-lg text-tactical-text-secondary hover:text-tactical-text-primary font-medium text-sm transition-all"
        >
          {{ t.web.viewAll }}
          <ArrowRight :size="16" class="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>

  </div>
</template>
