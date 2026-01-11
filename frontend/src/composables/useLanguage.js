import { ref, computed } from 'vue'

// Detect browser language
const detectBrowserLanguage = () => {
  const browserLang = navigator.language || navigator.userLanguage
  // Check if browser language starts with 'tr' (Turkish)
  if (browserLang.toLowerCase().startsWith('tr')) {
    return 'tr'
  }
  // Default to English for all other languages
  return 'en'
}

// Reactive language state - auto-detect if not previously set
const currentLanguage = ref(localStorage.getItem('portfolio-language') || detectBrowserLanguage())

// Translations
const translations = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      projects: 'Projeler'
    },
    hero: {
      title: 'ONUR CEYHAN',
      subtitle: 'Full-Stack Python & AI Developer',
      description: 'Akıllı Backend Mimarileri.',
      longDescription: 'Yüksek performanslı sistemler, dağıtık mimariler ve makine öğrenmesi pipeline\'ları konusunda uzmanlaşmış Full-Stack Python & AI Developer.',
      status: 'SİSTEM AKTİF',
      contact: 'İLETİŞİM',
      architectId: 'MİMAR_ID',
      yearsExp: 'Yıl Deneyim',
      projects: 'Proje',
      uptime: 'Aktif'
    },
    chat: {
      title: 'AI_ASİSTAN_v1.0',
      connecting: '🤖 AI Asistan başlatılıyor... FastAPI backend\'e bağlanılıyor...',
      connected: 'Bağlantı kuruldu',
      ready: 'Yardıma hazır!',
      askMe: '💡 Beceriler, projeler veya deneyim hakkında soru sorabilirsin. Demo\'da 5 ücretsiz sorun var!',
      offline: '🔴 BAĞLANTI KESİLDİ - Backend sunucusu çevrimdışı. Lütfen FastAPI sunucusunu başlatın.',
      thinking: 'Düşünüyor...',
      online: 'ÇEVRİMİÇİ',
      offline_short: 'ÇEVRİMDIŞI',
      questions: 'soru',
      limitReached: 'LİMİT ULAŞILDI',
      placeholder: 'Beceriler, projeler, deneyim hakkında sor...',
      placeholderLimit: 'Demo limiti ulaşıldı...',
      poweredBy: 'Powered by',
      demoLimit: 'Demo limiti ulaşıldı - Tam danışmanlık için iletişime geç',
      backendOffline: 'Backend çevrimdışı'
    },
    tech: {
      title: 'TEKNOLOJİ_CERHANESİ',
      subtitle: 'Temel Teknolojiler & Framework\'ler',
      loaded: 'YÜKLENDİ',
      categories: {
        core: 'TEMEL',
        backend: 'BACKEND',
        frontend: 'FRONTEND',
        devops: 'DEVOPS',
        cloud: 'BULUT',
        database: 'VERİTABANI',
        cache: 'ÖNBELLEK'
      }
    },
    devops: {
      title: 'DEVOPS_İZLEYİCİ',
      serverLoad: 'SUNUCU_YÜK',
      uptime: 'ÇALIŞMA_SÜRESİ',
      deployments: 'DAĞITIMLAR',
      resourceUsage: 'KAYNAK_KULLANIMI',
      operational: 'OPERASYONEL',
      infrastructure: [
        'Docker Container\'ları',
        'Nginx Load Balancer',
        'CI/CD Pipeline',
        'AWS Altyapısı'
      ]
    },
    projectFiles: {
      title: 'PROJE_DOSYALARI',
      subtitle: 'Görev Kayıtları',
      viewAll: 'TÜM_PROJELERİ_GÖR',
      statuses: {
        deployed: 'DAĞITILDI',
        active: 'AKTİF',
        testing: 'TEST',
        classified: 'GİZLİ'
      }
    },
    projects: {
      title: 'PROJE_ARŞİVİ',
      subtitle: 'Üretim seviyesi sistemler, AI platformları ve altyapı projeleri.',
      liveSystem: 'Canlı Sistem',
      sourceCode: 'Kaynak Kodu',
      loadMore: 'Daha Fazla Proje Yükle',
      filters: {
        all: 'tümü',
        backend: 'backend',
        frontend: 'frontend',
        devops: 'devops',
        aiml: 'ai/ml'
      }
    },
    languageModal: {
      title: 'DİL SEÇİMİ',
      subtitle: 'Tercih ettiğiniz dili seçin',
      continue: 'Devam Et'
    }
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects'
    },
    hero: {
      title: 'ONUR CEYHAN',
      subtitle: 'Full-Stack Python & AI Developer',
      description: 'Architecting Intelligent Backends.',
      longDescription: 'Full-Stack Python & AI Developer specializing in high-performance systems, distributed architectures, and machine learning pipelines.',
      status: 'SYSTEM ONLINE',
      contact: 'CONTACT',
      architectId: 'ARCHITECT_ID',
      yearsExp: 'Years Exp',
      projects: 'Projects',
      uptime: 'Uptime'
    },
    chat: {
      title: 'AI_ASSISTANT_v1.0',
      connecting: '🤖 AI Assistant initializing... Connecting to FastAPI backend...',
      connected: 'Connected to',
      ready: 'Ready to assist!',
      askMe: '💡 Ask me about skills, projects, or experience. You have 5 free questions in this demo!',
      offline: '🔴 CONNECTION LOST - Backend server offline. Please start FastAPI server.',
      thinking: 'Thinking...',
      online: 'ONLINE',
      offline_short: 'OFFLINE',
      questions: 'questions',
      limitReached: 'LIMIT REACHED',
      placeholder: 'Ask about skills, projects, experience...',
      placeholderLimit: 'Demo limit reached...',
      poweredBy: 'Powered by',
      demoLimit: 'Demo limit reached - Contact for full consultation',
      backendOffline: 'Backend offline'
    },
    tech: {
      title: 'TECH_ARSENAL',
      subtitle: 'Core Technologies & Frameworks',
      loaded: 'LOADED',
      categories: {
        core: 'CORE',
        backend: 'BACKEND',
        frontend: 'FRONTEND',
        devops: 'DEVOPS',
        cloud: 'CLOUD',
        database: 'DATABASE',
        cache: 'CACHE'
      }
    },
    devops: {
      title: 'DEVOPS_MONITOR',
      serverLoad: 'SERVER_LOAD',
      uptime: 'UPTIME',
      deployments: 'DEPLOYMENTS',
      resourceUsage: 'RESOURCE_USAGE',
      operational: 'OPERATIONAL',
      infrastructure: [
        'Docker Containers',
        'Nginx Load Balancer',
        'CI/CD Pipeline',
        'AWS Infrastructure'
      ]
    },
    projectFiles: {
      title: 'PROJECT_FILES',
      subtitle: 'Mission Logs',
      viewAll: 'VIEW_ALL_PROJECTS',
      statuses: {
        deployed: 'DEPLOYED',
        active: 'ACTIVE',
        testing: 'TESTING',
        classified: 'CLASSIFIED'
      }
    },
    projects: {
      title: 'PROJECT_ARCHIVE',
      subtitle: 'A curated selection of production-grade systems, AI platforms, and infrastructure projects.',
      liveSystem: 'Live System',
      sourceCode: 'Source Code',
      loadMore: 'Load More Projects',
      filters: {
        all: 'all',
        backend: 'backend',
        frontend: 'frontend',
        devops: 'devops',
        aiml: 'ai/ml'
      }
    },
    languageModal: {
      title: 'LANGUAGE SELECTION',
      subtitle: 'Choose your preferred language',
      continue: 'Continue'
    }
  }
}

export function useLanguage() {
  const setLanguage = (lang) => {
    currentLanguage.value = lang
    localStorage.setItem('portfolio-language', lang)
  }

  const t = computed(() => {
    return translations[currentLanguage.value] || translations.en
  })

  return {
    currentLanguage,
    setLanguage,
    t
  }
}

