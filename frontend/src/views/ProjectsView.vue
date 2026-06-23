<script setup>
import { ref, computed } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { Briefcase, Filter, Scale, ExternalLink, ArrowUpRight } from 'lucide-vue-next'
import { useLanguage } from '../composables/useLanguage'
import { useReveal } from '../composables/useReveal'

const { t } = useLanguage()
useReveal()

// Amiral gemi — Terazi (her zaman en üstte, ayrı sunum)
const teraziStats = [
  { value: '906', key: 'laws' },
  { value: '200K+', key: 'decisions' },
  { value: '50+', key: 'docTypes' },
  { value: '<30sn', key: 'analysis' },
]

const projects = ref([
  {
    id: 1,
    title: 'Uysal Psychology Clinic',
    description: 'Modern, warm, and child-friendly website for a psychology clinic specializing in play therapy for children. Features responsive design and smooth animations.',
    techStack: ['Vue 3', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://psyhologyclinicsite.vercel.app/',
    repoUrl: 'https://github.com/onurceyhan/psychologyclinicsite',
    imageUrl: '/images/psyhologyclinicsite.png',
    category: 'web'
  },
  {
    id: 2,
    title: 'Ceyhan Farm Website',
    description: 'Responsive and animated website for a sustainable livestock farm in Antalya. Showcases breeding animals, sacrifice services, and natural farming practices.',
    techStack: ['Vue.js', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://ceyhan-farm.vercel.app/',
    repoUrl: 'https://github.com/onurceyhan/ceyhan-farm',
    imageUrl: '/images/ceyhan-farm.png',
    category: 'web'
  },
  {
    id: 3,
    title: 'Metal Band Website',
    description: 'Stunning dark-themed website with cyberpunk aesthetics, glitch effects, and retro CRT overlays. Features tour dates, music integration, and merch showcase.',
    techStack: ['Vue 3', 'Vite', 'Tailwind CSS', 'CSS Animations'],
    liveUrl: 'https://metalbandwebsite.vercel.app/',
    repoUrl: 'https://github.com/onurceyhan/metalbandwebsite',
    imageUrl: '/images/metalbandwebsite.png',
    category: 'web'
  },
  {
    id: 4,
    title: 'Car Rental Website',
    description: 'Modern and responsive car rental platform with clean UI design, smooth animations, and optimized user experience. Built with modern web practices.',
    techStack: ['Vue 3', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://rentacar-drab.vercel.app/',
    repoUrl: 'https://github.com/onurceyhan/rentacar',
    imageUrl: '',
    category: 'web'
  },
  {
    id: 5,
    title: 'TagWise',
    description: 'Smart AI-powered bookmarking tool that automatically analyzes webpages, generates meaningful titles, creates categories and tags for effortless content organization.',
    techStack: ['Python', 'AI/ML', 'Web Scraping'],
    liveUrl: '',
    repoUrl: 'https://github.com/onurceyhan/tagwise',
    imageUrl: '/images/tagwise.png',
    category: 'ai'
  }
])

const selectedFilter = ref('all')
const filters = ['all', 'ai', 'web']

const filteredProjects = computed(() =>
  selectedFilter.value === 'all'
    ? projects.value
    : projects.value.filter((p) => p.category === selectedFilter.value)
)
</script>

<template>
  <div class="container mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-12">
    <!-- Başlık -->
    <div class="mb-10 reveal">
      <div class="flex items-center gap-3 mb-3">
        <Briefcase :size="22" class="text-cyber-cyan" />
        <h1 class="font-black text-cyber-yellow text-glow-yellow" style="font-size: clamp(1.5rem, 3vw + 0.5rem, 3rem);">
          {{ t.projects.title }}
        </h1>
      </div>
      <p class="text-tactical-text-secondary text-base sm:text-lg max-w-2xl">{{ t.projects.subtitle }}</p>
    </div>

    <!-- ★ Terazi flagship kart -->
    <div class="reveal relative overflow-hidden rounded-xl border border-terazi-accent/30 bg-tactical-surface/60 backdrop-blur-sm mb-14 spotlight-soft">
      <div class="absolute -top-24 -right-12 w-72 h-72 bg-cyber-cyan/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="relative grid lg:grid-cols-[1fr_auto] gap-8 p-6 sm:p-9 items-center">
        <div>
          <div class="flex flex-wrap items-center gap-3 mb-4">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-terazi-accent/50 bg-terazi-accent/10 text-terazi-accent-soft font-mono text-[10px] font-bold tracking-[0.2em] uppercase">
              <Scale :size="12" /> {{ t.projects.flagshipBadge }}
            </span>
            <span class="font-mono text-[11px] text-cyber-cyan/70 tracking-wider">www.terazi.app</span>
          </div>

          <h2 class="font-black text-terazi-cream mb-2" style="font-size: clamp(1.8rem, 4vw, 2.75rem);">Terazi</h2>
          <p class="font-mono text-cyber-cyan text-sm mb-4">{{ t.terazi.tagline }}</p>
          <p class="text-tactical-text-secondary leading-relaxed max-w-2xl mb-6 text-sm sm:text-base">{{ t.terazi.lead }}</p>

          <!-- istatistikler -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 max-w-xl">
            <div v-for="s in teraziStats" :key="s.key">
              <p class="font-mono font-black text-cyber-yellow text-lg sm:text-xl">{{ s.value }}</p>
              <p class="font-mono text-[9.5px] tracking-wider uppercase text-tactical-text-muted leading-tight mt-0.5">{{ t.terazi.stats[s.key] }}</p>
            </div>
          </div>

          <div class="flex flex-wrap gap-1.5 mb-6">
            <span v-for="tech in ['Vue 3', 'FastAPI', 'PostgreSQL', 'pgvector', 'LLM / RAG', 'Supabase']" :key="tech" class="px-2.5 py-1 font-mono text-[11px] font-semibold text-cyber-cyan/90 border border-cyber-cyan/30 rounded bg-cyber-cyan/5">
              {{ tech }}
            </span>
          </div>

          <a
            href="https://www.terazi.app"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center gap-2 px-6 py-3 bg-terazi-cream text-cyber-black rounded-lg font-bold text-sm hover:bg-white transition-colors"
          >
            {{ t.terazi.liveBtn }}
            <ExternalLink :size="15" class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <!-- yan amblem -->
        <div class="hidden lg:flex items-center justify-center w-40 h-40 rounded-2xl border border-terazi-accent/20 bg-cyber-black/30">
          <Scale :size="84" class="text-terazi-accent/70" />
        </div>
      </div>
    </div>

    <!-- Web siteleri başlığı + filtre -->
    <div class="mb-6 reveal">
      <div class="flex items-center gap-3 mb-2">
        <ArrowUpRight :size="18" class="text-cyber-cyan" />
        <h2 class="font-black text-tactical-text-primary text-xl sm:text-2xl">{{ t.projects.websitesTitle }}</h2>
      </div>
      <p class="text-tactical-text-muted text-sm max-w-xl mb-5">{{ t.projects.websitesSubtitle }}</p>

      <div class="flex items-center gap-2 sm:gap-3 overflow-x-auto scrollbar-hide">
        <Filter :size="14" class="text-cyber-cyan flex-shrink-0" />
        <div class="flex gap-1.5 sm:gap-2">
          <button
            v-for="filter in filters"
            :key="filter"
            @click="selectedFilter = filter"
            class="px-3 sm:px-4 py-1.5 sm:py-2 font-mono font-bold uppercase tracking-wider rounded transition-all border whitespace-nowrap"
            style="font-size: clamp(0.625rem, 0.8vw, 0.72rem);"
            :class="selectedFilter === filter
              ? 'bg-tactical-accent/15 text-tactical-accent border-tactical-accent/50'
              : 'bg-tactical-surface/40 text-tactical-text-secondary border-tactical-border/70 hover:border-tactical-accent/40 hover:text-tactical-text-primary'"
          >
            {{ t.projects.filters[filter] }}
          </button>
        </div>
      </div>
    </div>

    <!-- Izgara -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :tech-stack="project.techStack"
        :live-url="project.liveUrl"
        :repo-url="project.repoUrl"
        :image-url="project.imageUrl"
      />
    </div>
  </div>
</template>
