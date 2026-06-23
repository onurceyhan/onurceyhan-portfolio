// Paylaşılan proje verisi — hem ana sayfa "Web Siteleri" bölümü hem de
// Projeler sayfası bu kaynağı kullanır (tek doğruluk kaynağı).
//
// title/description: { tr, en } — aktif dile göre gösterilir
// category: 'web' | 'ai' | 'tools'  (Projeler sayfasındaki filtre için)
// featuredOnHome: ana sayfadaki web vitrininde gösterilecekler

export const websites = [
  {
    id: 1,
    title: { tr: 'Uysal Psikoloji Kliniği', en: 'Uysal Psychology Clinic' },
    description: {
      tr: 'Çocuklar için oyun terapisinde uzmanlaşmış bir psikoloji kliniği için modern, sıcak ve çocuk dostu web sitesi. Responsive tasarım ve akıcı animasyonlar.',
      en: 'Modern, warm, and child-friendly website for a psychology clinic specializing in play therapy for children. Features responsive design and smooth animations.'
    },
    techStack: ['Vue 3', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://psyhologyclinicsite.vercel.app/',
    repoUrl: 'https://github.com/onurceyhan/psychologyclinicsite',
    imageUrl: '/images/psyhologyclinicsite.png',
    category: 'web',
    featuredOnHome: true
  },
  {
    id: 2,
    title: { tr: 'Ceyhan Çiftliği Web Sitesi', en: 'Ceyhan Farm Website' },
    description: {
      tr: "Antalya'da sürdürülebilir bir hayvancılık çiftliği için responsive ve animasyonlu web sitesi. Damızlık hayvanlar, kurban hizmetleri ve doğal çiftçilik uygulamalarını tanıtır.",
      en: 'Responsive and animated website for a sustainable livestock farm in Antalya. Showcases breeding animals, sacrifice services, and natural farming practices.'
    },
    techStack: ['Vue.js', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://ceyhan-farm.vercel.app/',
    repoUrl: 'https://github.com/onurceyhan/ceyhan-farm',
    imageUrl: '/images/ceyhan-farm.png',
    category: 'web',
    featuredOnHome: true
  },
  {
    id: 3,
    title: { tr: 'Metal Grubu Web Sitesi', en: 'Metal Band Website' },
    description: {
      tr: 'Cyberpunk estetiği, glitch efektleri ve retro CRT katmanlarıyla etkileyici karanlık temalı web sitesi. Konser tarihleri, müzik entegrasyonu ve ürün vitrini içerir.',
      en: 'Stunning dark-themed website with cyberpunk aesthetics, glitch effects, and retro CRT overlays. Features tour dates, music integration, and merch showcase.'
    },
    techStack: ['Vue 3', 'Vite', 'Tailwind CSS', 'CSS Animations'],
    liveUrl: 'https://metalbandwebsite.vercel.app/',
    repoUrl: 'https://github.com/onurceyhan/metalbandwebsite',
    imageUrl: '/images/metalbandwebsite.png',
    category: 'web',
    featuredOnHome: true
  },
  {
    id: 4,
    title: { tr: 'Araç Kiralama Sitesi', en: 'Car Rental Website' },
    description: {
      tr: 'Temiz arayüz tasarımı, akıcı animasyonlar ve optimize kullanıcı deneyimiyle modern ve responsive araç kiralama platformu. Güncel web pratikleriyle geliştirildi.',
      en: 'Modern and responsive car rental platform with clean UI design, smooth animations, and optimized user experience. Built with modern web practices.'
    },
    techStack: ['Vue 3', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://rentacar-drab.vercel.app/',
    repoUrl: 'https://github.com/onurceyhan/rentacar',
    imageUrl: '',
    category: 'web',
    featuredOnHome: false
  },
  {
    id: 5,
    title: { tr: 'TagWise', en: 'TagWise' },
    description: {
      tr: 'Web sayfalarını otomatik analiz eden, anlamlı başlıklar üreten, kategoriler ve etiketler oluşturarak içerik düzenlemeyi kolaylaştıran yapay zekâ destekli akıllı yer imi aracı.',
      en: 'Smart AI-powered bookmarking tool that automatically analyzes webpages, generates meaningful titles, creates categories and tags for effortless content organization.'
    },
    techStack: ['Python', 'AI/ML', 'Web Scraping'],
    liveUrl: '',
    repoUrl: 'https://github.com/onurceyhan/tagwise',
    imageUrl: '/images/tagwise.png',
    category: 'ai',
    featuredOnHome: false
  }
]

// Ana sayfa web vitrini için öne çıkanlar
export const featuredWebsites = websites.filter((p) => p.featuredOnHome)
