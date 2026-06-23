<script setup>
import { ExternalLink, ArrowRight, Scale } from 'lucide-vue-next'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const stats = [
  { value: '906', key: 'laws' },
  { value: '200.000+', key: 'decisions' },
  { value: '50+', key: 'docTypes' },
  { value: '<30 sn', key: 'analysis' },
]

const techStack = ['Vue 3', 'FastAPI', 'PostgreSQL', 'pgvector', 'LLM / RAG', 'Supabase']
</script>

<template>
  <section class="relative py-12 sm:py-20">
    <!-- yumuşak amiral-gemi spotlight zemini -->
    <div class="absolute inset-0 spotlight-soft pointer-events-none"></div>

    <div class="relative grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
      <!-- ── Sol: anlatı ─────────────────────────────────────────── -->
      <div>
        <div class="flex items-center gap-3 mb-5 reveal">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-terazi-accent/50 bg-terazi-accent/10 text-terazi-accent-soft font-mono text-[10px] font-bold tracking-[0.2em] uppercase">
            <Scale :size="12" /> {{ t.terazi.badge }}
          </span>
          <span class="section-kicker text-terazi-accent-soft/70">{{ t.terazi.kicker }}</span>
        </div>

        <h2 class="reveal reveal-delay-1 font-black tracking-tight text-terazi-cream leading-none mb-3" style="font-size: clamp(2.75rem, 7vw, 5rem);">
          {{ t.terazi.title }}
        </h2>
        <p class="reveal reveal-delay-1 font-mono text-cyber-cyan text-sm sm:text-base mb-5">
          {{ t.terazi.tagline }}
        </p>

        <p class="reveal reveal-delay-2 text-tactical-text-primary/90 font-medium leading-relaxed max-w-xl mb-4 pl-3 border-l-2 border-terazi-accent/50" style="font-size: clamp(0.9rem, 1vw + 0.4rem, 1.05rem);">
          {{ t.terazi.frame }}
        </p>

        <p class="reveal reveal-delay-2 text-tactical-text-secondary leading-relaxed max-w-xl mb-8" style="font-size: clamp(0.875rem, 1vw + 0.4rem, 1rem);">
          {{ t.terazi.lead }}
        </p>

        <!-- istatistikler -->
        <div class="reveal reveal-delay-2 grid grid-cols-2 sm:grid-cols-4 gap-px bg-tactical-border/40 border border-tactical-border/40 rounded-lg overflow-hidden mb-8">
          <div v-for="s in stats" :key="s.key" class="bg-tactical-surface/60 px-3 py-4 text-center sm:text-left">
            <p class="font-mono font-black text-cyber-yellow" style="font-size: clamp(1.1rem, 1.5vw + 0.5rem, 1.6rem);">{{ s.value }}</p>
            <p class="font-mono text-[10px] tracking-wider uppercase text-tactical-text-muted mt-1 leading-tight">{{ t.terazi.stats[s.key] }}</p>
          </div>
        </div>

        <!-- teknolojiler -->
        <div class="reveal reveal-delay-3 flex flex-wrap gap-2 mb-8">
          <span v-for="tech in techStack" :key="tech" class="px-2.5 py-1 font-mono text-[11px] font-semibold text-cyber-cyan/90 border border-cyber-cyan/30 rounded bg-cyber-cyan/5">
            {{ tech }}
          </span>
        </div>

        <!-- butonlar -->
        <div class="reveal reveal-delay-3 flex flex-wrap items-center gap-3">
          <a
            href="https://www.terazi.app"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center gap-2 px-6 py-3 bg-terazi-cream text-cyber-black rounded-lg font-bold text-sm hover:bg-white transition-colors"
          >
            {{ t.terazi.liveBtn }}
            <ExternalLink :size="15" class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#rag"
            class="group inline-flex items-center gap-2 px-5 py-3 text-cyber-cyan hover:text-cyber-yellow font-mono text-sm font-semibold transition-colors"
          >
            {{ t.terazi.caseBtn }}
            <ArrowRight :size="15" class="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      <!-- ── Sağ: canlı redline belge (ürünün yaptığı işin kendisi) ── -->
      <div class="reveal reveal-delay-2 relative">
        <div class="doc-loop relative" aria-hidden="true">
          <div class="doc-paper relative bg-terazi-paper rounded-sm shadow-2xl shadow-black/60 px-7 sm:px-9 py-8 max-w-[440px] mx-auto">
            <p class="font-mono text-[9.5px] tracking-[0.18em] text-stone-400 uppercase">{{ t.terazi.docHeader }}</p>
            <div class="mt-3 border-t border-stone-300"></div>

            <p class="font-semibold text-stone-800 mt-4 text-[14px]">MADDE 4 — KİRA BEDELİ VE ARTIŞ</p>

            <p class="text-stone-700 mt-3 text-[13.5px] leading-[1.85]">
              4.1. Aylık kira bedeli 45.000 TL olup her ayın beşinci günü ödenir.
            </p>
            <p class="text-stone-700 mt-2 text-[13.5px] leading-[1.85]">
              4.2. <span class="redline-target">Kira bedeli her yenileme döneminde %65 oranında artırılır ve kiracı bu artışa itiraz edemez.</span>
            </p>

            <!-- düzeltme önerisi (redline insert) -->
            <p class="correction text-emerald-800 mt-3 pl-3 border-l-2 border-emerald-600/70 text-[12.5px] leading-relaxed">
              {{ t.terazi.correction }}
            </p>

            <p class="text-stone-700 mt-4 text-[13.5px] leading-[1.85]">
              4.3. Depozito iki aylık kira bedeli tutarındadır.
            </p>

            <!-- kenar notu -->
            <div class="margin-note absolute -right-3 sm:-right-8 top-[40%] max-w-[170px]">
              <div class="bg-slate-950 border border-terazi-accent/40 rounded-md px-3 py-2.5 shadow-xl">
                <p class="font-mono text-[9.5px] text-terazi-accent-soft tracking-wider">{{ t.terazi.riskTag }}</p>
                <p class="text-[10.5px] text-slate-400 mt-1 leading-snug">{{ t.terazi.riskNote }}</p>
              </div>
            </div>

            <!-- mühür -->
            <div class="stamp absolute right-5 bottom-6 select-none">
              <span class="block font-mono text-[12px] font-bold tracking-[0.16em] text-red-600/90 border-[2.5px] border-red-600/80 rounded px-3 py-1.5 uppercase">
                {{ t.terazi.stamp }}
              </span>
            </div>
          </div>

          <p class="font-mono text-center text-[10px] text-tactical-text-muted tracking-[0.2em] uppercase mt-5">
            {{ t.terazi.caption }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Canlı redline döngüsü (10 sn) — Terazi hero'sundan uyarlandı ──────────
   Sahne: maddeyi oku → riskli cümleyi boya → kenar notu → mühür → düzeltme. */

.redline-target {
  background-image: linear-gradient(rgba(220, 60, 50, 0.22), rgba(220, 60, 50, 0.22));
  background-repeat: no-repeat;
  background-size: 0% 100%;
  border-radius: 2px;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  animation: redlineSweep 10s ease-in-out infinite;
}
@keyframes redlineSweep {
  0%, 10%  { background-size: 0% 100%; }
  22%, 88% { background-size: 100% 100%; }
  96%, 100% { background-size: 0% 100%; }
}

.margin-note {
  opacity: 0;
  animation: noteIn 10s cubic-bezier(0.16, 1, 0.3, 1) infinite;
}
@keyframes noteIn {
  0%, 24%   { opacity: 0; transform: translateX(14px); }
  31%, 88%  { opacity: 1; transform: translateX(0); }
  94%, 100% { opacity: 0; transform: translateX(14px); }
}

.stamp {
  opacity: 0;
  transform: rotate(-7deg) scale(1.6);
  animation: stampIn 10s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
}
@keyframes stampIn {
  0%, 36%   { opacity: 0; transform: rotate(-7deg) scale(1.6); }
  41%, 88%  { opacity: 1; transform: rotate(-7deg) scale(1); }
  94%, 100% { opacity: 0; transform: rotate(-7deg) scale(1.6); }
}

.correction {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  animation: correctionIn 10s ease infinite;
}
@keyframes correctionIn {
  0%, 50%   { opacity: 0; max-height: 0; margin-top: 0; }
  60%, 88%  { opacity: 1; max-height: 90px; margin-top: 0.75rem; }
  96%, 100% { opacity: 0; max-height: 0; margin-top: 0; }
}

/* hafif salınım — belge canlı dursun */
.doc-paper {
  animation: docFloat 7s ease-in-out infinite;
}
@keyframes docFloat {
  0%, 100% { transform: translateY(0) rotate(-0.4deg); }
  50%      { transform: translateY(-8px) rotate(0.4deg); }
}

/* Hareket azaltma tercihi: döngü yok, son kare sabit */
@media (prefers-reduced-motion: reduce) {
  .redline-target { animation: none; background-size: 100% 100%; }
  .margin-note { animation: none; opacity: 1; transform: none; }
  .stamp { animation: none; opacity: 1; transform: rotate(-7deg) scale(1); }
  .correction { animation: none; opacity: 1; max-height: 90px; margin-top: 0.75rem; }
  .doc-paper { animation: none; transform: none; }
}
</style>
