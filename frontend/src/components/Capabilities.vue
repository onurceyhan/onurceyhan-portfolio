<script setup>
import { computed } from 'vue'
import { Database, Cpu, Bot, Layers } from 'lucide-vue-next'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const icons = [Database, Cpu, Bot, Layers]

const items = computed(() =>
  t.value.capabilities.items.map((item, i) => ({ ...item, icon: icons[i], index: i + 1 }))
)
</script>

<template>
  <section class="relative py-12 sm:py-20">
    <!-- başlık -->
    <div class="max-w-3xl mb-12">
      <p class="section-kicker mb-4 reveal">{{ t.capabilities.kicker }}</p>
      <h2 class="reveal reveal-delay-1 font-black text-tactical-text-primary leading-tight mb-4" style="font-size: clamp(1.7rem, 3vw + 0.5rem, 2.9rem);">
        {{ t.capabilities.title }}
      </h2>
      <p class="reveal reveal-delay-2 text-tactical-text-secondary leading-relaxed" style="font-size: clamp(0.9rem, 1vw + 0.4rem, 1.1rem);">
        {{ t.capabilities.subtitle }}
      </p>
    </div>

    <!-- yetenek kartları -->
    <div class="grid sm:grid-cols-2 gap-4 sm:gap-5">
      <article
        v-for="(item, i) in items"
        :key="item.index"
        :class="['reveal cyber-card group p-6 sm:p-7', `reveal-delay-${Math.min(i, 4)}`]"
      >
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-tactical-accent/10 border border-tactical-accent/30 flex items-center justify-center group-hover:border-tactical-accent/60 transition-colors">
            <component :is="item.icon" :size="22" class="text-tactical-accent" />
          </div>
          <div class="min-w-0">
            <div class="flex items-baseline gap-2 mb-1">
              <span class="font-mono text-[11px] text-tactical-text-muted">0{{ item.index }}</span>
              <h3 class="font-bold text-tactical-text-primary group-hover:text-tactical-accent transition-colors" style="font-size: clamp(1.05rem, 1.3vw + 0.3rem, 1.25rem);">
                {{ item.title }}
              </h3>
            </div>
            <p class="font-mono text-[11px] tracking-wider uppercase text-tactical-accent/70 mb-3">{{ item.tag }}</p>
            <p class="text-tactical-text-secondary leading-relaxed" style="font-size: clamp(0.85rem, 1vw + 0.2rem, 0.95rem);">
              {{ item.body }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
