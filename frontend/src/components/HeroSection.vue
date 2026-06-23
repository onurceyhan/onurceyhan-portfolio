<script setup>
import { Terminal, ArrowRight, Mail } from 'lucide-vue-next'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const tags = ['PYTHON', 'RAG', 'LLM', 'FASTAPI']
</script>

<template>
  <div class="glass-panel h-full p-6 sm:p-8 lg:p-10 relative overflow-hidden border border-cyber-yellow/20">
    <!-- ölçülü aksan çizgisi -->
    <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyber-cyan via-cyber-yellow/60 to-transparent"></div>
    <!-- tek, yumuşak spotlight -->
    <div class="absolute -top-20 right-0 w-72 h-72 bg-cyber-cyan/5 rounded-full blur-3xl pointer-events-none"></div>

    <!-- Status -->
    <div class="flex items-center gap-3 mb-8 sm:mb-10 relative z-10">
      <div class="status-indicator"></div>
      <span class="font-mono text-cyber-cyan font-bold uppercase tracking-[0.2em]" style="font-size: clamp(0.625rem, 1vw, 0.7rem);">{{ t.hero.status }}</span>
      <div class="flex-1 h-px bg-gradient-to-r from-cyber-cyan/40 to-transparent"></div>
    </div>

    <div class="space-y-5 relative z-10">
      <!-- İsim -->
      <div>
        <div class="flex items-center gap-2 mb-2">
          <Terminal :size="15" class="text-cyber-cyan flex-shrink-0" />
          <span class="font-mono text-cyber-yellow/90 font-semibold tracking-wider" style="font-size: clamp(0.625rem, 1vw, 0.72rem);">{{ t.hero.architectId }}</span>
        </div>
        <h1 class="font-black tracking-tight text-cyber-yellow break-words text-glow-yellow" style="font-size: clamp(1.875rem, 5vw + 0.5rem, 4.25rem); line-height: 1.05;">
          {{ t.hero.title }}
        </h1>
        <p class="font-mono text-cyber-cyan/80 mt-2 tracking-wide" style="font-size: clamp(0.75rem, 1vw + 0.2rem, 0.95rem);">
          {{ t.hero.subtitle }}
        </p>
      </div>

      <!-- Başlık + açıklama -->
      <div class="space-y-3">
        <h2 class="font-bold text-tactical-text-primary break-words" style="font-size: clamp(1.1rem, 2vw + 0.25rem, 1.75rem); line-height: 1.3;">
          {{ t.hero.description }}
        </h2>
        <p class="text-tactical-text-secondary max-w-xl" style="font-size: clamp(0.8rem, 1vw + 0.25rem, 0.95rem); line-height: 1.65;">
          {{ t.hero.longDescription }}
        </p>
      </div>

      <!-- Etiketler -->
      <div class="flex flex-wrap gap-2 pt-1">
        <span
          v-for="tag in tags"
          :key="tag"
          class="px-3 py-1 font-mono font-semibold bg-cyber-cyan/8 text-cyber-cyan border border-cyber-cyan/30 rounded whitespace-nowrap"
          style="font-size: clamp(0.625rem, 1vw, 0.72rem);"
        >
          {{ tag }}
        </span>
      </div>

      <!-- CTA -->
      <div class="flex flex-wrap items-center gap-3 pt-2">
        <a
          href="#terazi"
          class="group inline-flex items-center gap-2 px-5 py-2.5 bg-cyber-yellow text-cyber-black rounded font-bold text-sm hover:bg-cyber-yellow/90 transition-colors"
        >
          {{ t.hero.ctaTerazi }}
          <ArrowRight :size="15" class="group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="https://www.linkedin.com/in/onur-ceyhan"
          target="_blank"
          rel="noopener noreferrer"
          class="group inline-flex items-center gap-2 px-5 py-2.5 border border-cyber-cyan/40 text-cyber-cyan hover:text-cyber-yellow hover:border-cyber-yellow/50 rounded font-mono font-semibold text-sm transition-colors"
        >
          <Mail :size="15" />
          {{ t.hero.ctaContact }}
        </a>
      </div>

      <!-- Metrikler -->
      <div class="grid grid-cols-3 gap-4 pt-5 border-t border-cyber-cyan/20">
        <div>
          <p class="font-black font-mono text-cyber-yellow" style="font-size: clamp(1rem, 1.6vw + 0.25rem, 1.4rem);">{{ t.hero.metrics.flagshipValue }}</p>
          <p class="text-tactical-text-muted font-semibold mt-0.5" style="font-size: clamp(0.6rem, 1vw, 0.7rem);">{{ t.hero.metrics.flagshipLabel }}</p>
        </div>
        <div>
          <p class="font-black font-mono text-cyber-yellow" style="font-size: clamp(1rem, 1.6vw + 0.25rem, 1.4rem);">{{ t.hero.metrics.focusValue }}</p>
          <p class="text-tactical-text-muted font-semibold mt-0.5" style="font-size: clamp(0.6rem, 1vw, 0.7rem);">{{ t.hero.metrics.focusLabel }}</p>
        </div>
        <div>
          <p class="font-black font-mono text-cyber-yellow" style="font-size: clamp(1rem, 1.6vw + 0.25rem, 1.4rem);">{{ t.hero.metrics.expValue }}</p>
          <p class="text-tactical-text-muted font-semibold mt-0.5" style="font-size: clamp(0.6rem, 1vw, 0.7rem);">{{ t.hero.metrics.expLabel }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
