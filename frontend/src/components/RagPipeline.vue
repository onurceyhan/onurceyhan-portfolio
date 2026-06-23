<script setup>
import { computed } from 'vue'
import { MessageSquareText, Binary, Database, ListFilter, FileCheck2 } from 'lucide-vue-next'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const icons = [MessageSquareText, Binary, Database, ListFilter, FileCheck2]

const steps = computed(() =>
  t.value.rag.steps.map((s, i) => ({ ...s, icon: icons[i], index: i + 1 }))
)
</script>

<template>
  <section id="rag" class="relative py-12 sm:py-20">
    <!-- başlık -->
    <div class="max-w-3xl mb-12">
      <p class="section-kicker mb-4 reveal">{{ t.rag.kicker }}</p>
      <h2 class="reveal reveal-delay-1 font-black text-cyber-yellow leading-tight mb-4" style="font-size: clamp(1.6rem, 3vw + 0.5rem, 2.75rem);">
        {{ t.rag.title }}
      </h2>
      <p class="reveal reveal-delay-2 text-tactical-text-secondary leading-relaxed" style="font-size: clamp(0.875rem, 1vw + 0.4rem, 1.05rem);">
        {{ t.rag.subtitle }}
      </p>
    </div>

    <!-- hat: mobilde dikey, lg'de yatay -->
    <div class="relative">
      <!-- akan veri çizgisi (lg) -->
      <div class="hidden lg:block absolute top-[34px] left-0 right-0 h-px bg-tactical-border/60 overflow-hidden">
        <div class="data-flow absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-tactical-accent to-transparent"></div>
      </div>

      <ol class="grid gap-6 lg:grid-cols-5">
        <li
          v-for="(step, i) in steps"
          :key="step.index"
          :class="['reveal relative', `reveal-delay-${Math.min(i, 4)}`]"
        >
          <!-- düğüm -->
          <div class="relative z-10 flex items-center gap-3 lg:block">
            <div class="node-pulse w-[68px] h-[68px] rounded-xl bg-tactical-surface border-2 border-cyber-cyan/40 flex items-center justify-center flex-shrink-0 lg:mb-4" :style="{ '--d': `${i * 0.4}s` }">
              <component :is="step.icon" :size="26" class="text-cyber-cyan" />
            </div>
            <div class="lg:hidden">
              <p class="font-mono text-[11px] text-cyber-yellow font-bold">0{{ step.index }}</p>
              <h3 class="font-bold text-tactical-text-primary text-base">{{ step.title }}</h3>
            </div>
          </div>

          <!-- içerik (lg) -->
          <div class="mt-3 lg:mt-0 pl-[80px] lg:pl-0">
            <p class="hidden lg:block font-mono text-[11px] text-cyber-yellow font-bold mb-1">0{{ step.index }}</p>
            <h3 class="hidden lg:block font-bold text-tactical-text-primary text-base mb-1.5">{{ step.title }}</h3>
            <p class="text-tactical-text-secondary text-sm leading-relaxed">{{ step.desc }}</p>
          </div>
        </li>
      </ol>
    </div>

    <!-- teknik not -->
    <p class="reveal mt-12 font-mono text-[11px] sm:text-xs tracking-wider text-tactical-text-muted border-t border-tactical-border/50 pt-5">
      {{ t.rag.note }}
    </p>
  </section>
</template>

<style scoped>
/* akan veri paketi */
.data-flow {
  animation: dataFlow 3.2s linear infinite;
}
@keyframes dataFlow {
  0%   { transform: translateX(-120%); }
  100% { transform: translateX(420%); }
}

/* düğümlerin sırayla nabız atması */
.node-pulse {
  animation: nodePulse 3.2s ease-in-out infinite;
  animation-delay: var(--d, 0s);
}
@keyframes nodePulse {
  0%, 100% { border-color: rgba(159, 176, 201, 0.3); box-shadow: none; }
  50%      { border-color: rgba(232, 181, 74, 0.7); box-shadow: 0 0 0 4px rgba(232, 181, 74, 0.08); }
}

@media (prefers-reduced-motion: reduce) {
  .data-flow { animation: none; opacity: 0.4; }
  .node-pulse { animation: none; }
}
</style>
