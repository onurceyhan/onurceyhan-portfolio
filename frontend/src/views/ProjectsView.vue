<script setup>
import { ref } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { Briefcase, Filter } from 'lucide-vue-next'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const projects = ref([
  {
    id: 1,
    title: 'Uysal Psychology Clinic',
    description: 'Modern, warm, and child-friendly website for a psychology clinic specializing in play therapy for children. Features responsive design and smooth animations.',
    techStack: ['Vue 3', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://psyhologyclinicsite.vercel.app/',
    repoUrl: 'https://github.com/onurceyhan/psychologyclinicsite',
    imageUrl: '/images/psyhologyclinicsite.png'
  },
  {
    id: 2,
    title: 'Ceyhan Farm Website',
    description: 'Responsive and animated website for a sustainable livestock farm in Antalya. Showcases breeding animals, sacrifice services, and natural farming practices.',
    techStack: ['Vue.js', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://ceyhan-farm.vercel.app/',
    repoUrl: 'https://github.com/onurceyhan/ceyhan-farm',
    imageUrl: '/images/ceyhan-farm.png'
  },
  {
    id: 3,
    title: 'Metal Band Website',
    description: 'Stunning dark-themed website with cyberpunk aesthetics, glitch effects, and retro CRT overlays. Features tour dates, music integration, and merch showcase.',
    techStack: ['Vue 3', 'Vite', 'Tailwind CSS', 'CSS Animations'],
    liveUrl: 'https://metalbandwebsite.vercel.app/',
    repoUrl: 'https://github.com/onurceyhan/metalbandwebsite',
    imageUrl: '/images/metalbandwebsite.png'
  },
  {
    id: 4,
    title: 'Car Rental Website',
    description: 'Modern and responsive car rental platform with clean UI design, smooth animations, and optimized user experience. Built with modern web practices.',
    techStack: ['Vue 3', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://rentacar-drab.vercel.app/',
    repoUrl: 'https://github.com/onurceyhan/rentacar',
    imageUrl: '/images/rentacar.png'
  },
  {
    id: 5,
    title: 'TagWise',
    description: 'Smart AI-powered bookmarking tool that automatically analyzes webpages, generates meaningful titles, creates categories and tags for effortless content organization.',
    techStack: ['Python', 'AI/ML', 'Web Scraping'],
    liveUrl: '',
    repoUrl: 'https://github.com/onurceyhan/tagwise',
    imageUrl: '/images/tagwise.png'
  }
])

const selectedFilter = ref('all')
const filters = ref(['all', 'backend', 'frontend', 'devops', 'ai/ml'])
</script>

<template>
  <div class="container mx-auto px-3 sm:px-4 py-6 sm:py-12">
    <!-- Header Section -->
    <div class="mb-12">
      <div class="flex items-center gap-3 mb-4">
        <Briefcase :size="24" class="text-cyber-cyan animate-pulse drop-shadow-[0_0_10px_rgba(3,216,243,0.6)]" />
        <h1 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-cyber-yellow drop-shadow-[0_0_20px_rgba(252,238,12,0.5)]">
          {{ t.projects.title }}
        </h1>
        <div class="h-12 w-1 bg-gradient-to-b from-cyber-cyan via-cyber-yellow to-transparent"></div>
      </div>
      <p class="text-tactical-text-secondary text-lg max-w-2xl" v-html="t.projects.subtitle">
      </p>
      
      <!-- Filter Bar -->
      <div class="flex items-center gap-2 sm:gap-3 mt-6 sm:mt-8 overflow-x-auto">
        <Filter :size="14" class="sm:w-4 sm:h-4 text-cyber-cyan animate-pulse flex-shrink-0" />
        <div class="flex gap-1 sm:gap-2">
          <button
            v-for="filter in filters"
            :key="filter"
            @click="selectedFilter = filter"
            class="px-2 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider rounded transition-all border-2 whitespace-nowrap"
            :class="selectedFilter === filter 
              ? 'bg-cyber-cyan/20 text-cyber-cyan border-cyber-cyan/60 shadow-lg shadow-cyber-cyan/30' 
              : 'bg-cyber-black/40 text-cyber-cyan/70 border-cyber-cyan/30 hover:border-cyber-yellow/50 hover:text-cyber-yellow hover:bg-cyber-yellow/10'"
          >
            {{ t.projects.filters[filter] }}
          </button>
        </div>
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :tech-stack="project.techStack"
        :live-url="project.liveUrl"
        :repo-url="project.repoUrl"
        :image-url="project.imageUrl"
      />
    </div>

    <!-- Load More Section -->
    <div class="flex justify-center mt-12">
      <button class="group px-8 py-3 bg-cyber-cyan/15 hover:bg-cyber-yellow/20 border-2 border-cyber-cyan/60 hover:border-cyber-yellow rounded text-cyber-cyan hover:text-cyber-yellow text-sm font-mono font-black uppercase tracking-wider transition-all hover:shadow-lg hover:shadow-cyber-yellow/40 hover:-translate-y-1">
        <span class="flex items-center gap-2">
          {{ t.projects.loadMore }}
          <span class="group-hover:translate-x-1 transition-transform">→</span>
        </span>
      </button>
    </div>
  </div>
</template>

