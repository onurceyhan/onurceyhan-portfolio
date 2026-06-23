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
      subtitle: 'AI & RAG Sistemleri · Full-Stack Python',
      description: 'RAG ve LLM sistemleri kuran Full-Stack geliştiriciyim.',
      longDescription: 'Yapay zekâyı işin içine gömüyorum: vektör veritabanlarına dayalı RAG mimarileri, LLM uygulamaları, alan-özel AI asistanları ve bunları taşıyan uçtan uca ürünler (FastAPI + Vue). En büyük projem Terazi, tüm bu yeteneklerin canlı bir örneği.',
      status: 'SİSTEM AKTİF',
      architectId: 'GELİŞTİRİCİ_ID',
      ctaTerazi: "Terazi'yi Gör",
      ctaContact: 'İletişim',
      metrics: {
        flagshipLabel: 'Amiral Gemi',
        flagshipValue: 'Terazi',
        focusLabel: 'Odak',
        focusValue: 'RAG & LLM',
        expLabel: 'Deneyim',
        expValue: '2+ Yıl'
      }
    },
    capabilities: {
      kicker: '01 — NE YAPIYORUM',
      title: 'Yapay zekâyı işin içine gömüyorum.',
      subtitle: 'Bir demo değil; ölçeklenen, gerçek kullanıcıların güvendiği yapay zekâ ürünleri kuruyorum. Uzmanlık alanlarım:',
      items: [
        {
          title: 'RAG Sistemleri',
          tag: 'Retrieval-Augmented Generation',
          body: 'Belgelerinizi, mevzuatınızı veya bilgi tabanınızı embedding’lerle vektör veritabanına (PostgreSQL + pgvector) taşıyorum; semantik arama, yeniden sıralama ve kaynak atıflı üretimle modelin uydurmadan, gerçek belgelere dayanarak cevap vermesini sağlıyorum. Bunu 200.000’i aşkın belge ölçeğinde, üretimde çalıştırdım.'
        },
        {
          title: 'LLM Uygulamaları',
          tag: 'Prompt · Tool-calling · Streaming',
          body: 'LLM’leri kararlı ürünlere dönüştürüyorum: prompt mühendisliği, fonksiyon/araç çağırma, çok turlu sohbet, akışlı yanıtlar, çıktı doğrulama ve maliyet/gecikme optimizasyonu. Groq, OpenAI ve açık kaynak modellerle çalışıyorum.'
        },
        {
          title: 'AI Asistan & Otomasyon',
          tag: 'Doküman zekâsı · Agent akışları',
          body: 'Alana özel asistanlar ve belge iş akışları kuruyorum: analiz, otomatik üretim, sınıflandırma ve özetleme. Veri gizliliği için hassas bilgiyi (KVKK) modele gitmeden maskeleme dahil — neyin gönderildiğine siz karar verirsiniz.'
        },
        {
          title: 'Full-Stack Ürün',
          tag: 'FastAPI · Vue 3 · Supabase',
          body: 'Fikri uçtan uca canlıya alıyorum: FastAPI backend, Vue 3 arayüz, kimlik doğrulama, PostgreSQL/Supabase, dosya yönetimi ve dağıtım. Tasarımdan deploy’a kadar kullanıcı dostu, bakımı kolay tek bir sistem.'
        }
      ]
    },
    terazi: {
      kicker: 'EN BÜYÜK PROJEM · CANLI ÖRNEK',
      badge: 'EN BÜYÜK PROJE',
      title: 'Terazi',
      tagline: 'Türk hukukuna özel yapay zekâ asistanı.',
      frame: 'Yukarıdaki yetenekleri tek bir üründe topladığım, gerçek kullanıcıların kullandığı en kapsamlı projem.',
      lead: 'Terazi; sözleşme ve dilekçeleri dakikalar içinde taslaklar, her maddeyi 906 kanun ve 200.000’i aşkın Yargıtay kararıyla denetler ve yapay zekâyla yeniden yazar — hepsi imzadan önce. RAG mimarisi, LLM ve titiz bir arayüz üzerine kurulu, gerçek kullanıcıların işini gören canlı bir ürün.',
      stats: {
        laws: 'Kanun & Yönetmelik',
        decisions: 'Yargıtay Kararı',
        docTypes: 'Belge Tipi',
        analysis: 'Ortalama Analiz'
      },
      liveBtn: 'Canlı Site',
      caseBtn: 'Nasıl Çalışıyor',
      docHeader: 'Konut Kira Sözleşmesi — Madde 4',
      riskTag: 'TBK m.344 · RİSK 9/10',
      riskNote: 'Yasal sınırı aşan artış kaydı geçersizdir.',
      stamp: 'KANUNA AYKIRI',
      correction: 'Artış oranı, TÜFE on iki aylık ortalamasını aşamaz (TBK m.344).',
      caption: 'Canlı analiz çıktısı — temsilî'
    },
    rag: {
      kicker: '02 — RAG MİMARİSİ NASIL ÇALIŞIR',
      title: 'Sallamayan, kaynağa dayanan yapay zekâ.',
      subtitle: 'Kurduğum RAG hatlarının iskeleti şöyle işler: ham veriyi aranabilir bilgiye, soruyu da kaynağa dayalı bir yanıta çeviren beş adım. (Terazi’de bunu 200.000’i aşkın Yargıtay kararı üzerinde çalıştırıyorum.)',
      steps: [
        { title: 'Soru / Madde', desc: 'Hukuki soru ya da sözleşme maddesi sisteme girer.' },
        { title: 'Embedding', desc: 'Metin, gömme modeliyle anlamsal bir vektöre dönüştürülür.' },
        { title: 'pgvector Arama', desc: '200.000+ karar içinde anlamsal benzerlik araması yapılır.' },
        { title: 'Yeniden Sıralama', desc: 'En alakalı emsaller önceliklendirilir, gürültü elenir.' },
        { title: 'Dayanaklı Yanıt', desc: 'LLM yalnızca getirilen kaynaklarla, atıf vererek cevap üretir.' }
      ],
      note: 'PostgreSQL + pgvector · Embedding pipeline · LLM orkestrasyon · KVKK uyumlu maskeleme'
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
      title: 'TEKNOLOJİ_CEPHANESİ',
      subtitle: 'Temel Teknolojiler & Framework\'ler',
      loaded: 'YÜKLENDİ',
      categories: {
        core: 'TEMEL',
        backend: 'BACKEND',
        frontend: 'FRONTEND',
        ai: 'AI/RAG',
        devops: 'DEVOPS',
        cloud: 'BULUT',
        database: 'VERİTABANI',
        cache: 'ÖNBELLEK'
      }
    },
    projects: {
      title: 'PROJE_ARŞİVİ',
      subtitle: 'En büyük projem Terazi ve müşteriler için ürettiğim web siteleri.',
      flagshipBadge: 'EN BÜYÜK PROJE',
      websitesTitle: 'Web Siteleri',
      websitesSubtitle: 'Hızlı teslim için ürettiğim modern, responsive şablon siteler.',
      liveSystem: 'Canlı Sistem',
      sourceCode: 'Kaynak Kodu',
      loadMore: 'Daha Fazla Proje Yükle',
      filters: {
        all: 'tümü',
        ai: 'ai/rag',
        web: 'web',
        tools: 'araçlar'
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
      subtitle: 'AI & RAG Systems · Full-Stack Python',
      description: 'A Full-Stack developer building RAG & LLM systems.',
      longDescription: 'I embed AI into products: RAG architectures backed by vector databases, LLM applications, domain-specific AI assistants, and the end-to-end products that ship them (FastAPI + Vue). My biggest project, Terazi, is a live example of all of it.',
      status: 'SYSTEM ONLINE',
      architectId: 'DEVELOPER_ID',
      ctaTerazi: 'See Terazi',
      ctaContact: 'Contact',
      metrics: {
        flagshipLabel: 'Flagship',
        flagshipValue: 'Terazi',
        focusLabel: 'Focus',
        focusValue: 'RAG & LLM',
        expLabel: 'Experience',
        expValue: '2+ Years'
      }
    },
    capabilities: {
      kicker: '01 — WHAT I DO',
      title: 'I embed AI into real products.',
      subtitle: 'Not a demo — AI products that scale and that real users rely on. My areas of expertise:',
      items: [
        {
          title: 'RAG Systems',
          tag: 'Retrieval-Augmented Generation',
          body: 'I move your documents, regulations or knowledge base into a vector database (PostgreSQL + pgvector) via embeddings; with semantic search, re-ranking and cited generation, the model answers from real sources instead of hallucinating. I have run this in production at a scale of 200,000+ documents.'
        },
        {
          title: 'LLM Applications',
          tag: 'Prompting · Tool-calling · Streaming',
          body: 'I turn LLMs into stable products: prompt engineering, function/tool calling, multi-turn chat, streaming responses, output validation and cost/latency optimization. I work with Groq, OpenAI and open-source models.'
        },
        {
          title: 'AI Assistants & Automation',
          tag: 'Document intelligence · Agent flows',
          body: 'I build domain-specific assistants and document workflows: analysis, automated generation, classification and summarization. Including masking sensitive data (privacy/KVKK) before it ever reaches the model — you decide what gets sent.'
        },
        {
          title: 'Full-Stack Product',
          tag: 'FastAPI · Vue 3 · Supabase',
          body: 'I take an idea end-to-end to production: FastAPI backend, Vue 3 frontend, authentication, PostgreSQL/Supabase, file management and deployment. One user-friendly, maintainable system from design to deploy.'
        }
      ]
    },
    terazi: {
      kicker: 'MY BIGGEST PROJECT · LIVE EXAMPLE',
      badge: 'BIGGEST PROJECT',
      title: 'Terazi',
      tagline: 'An AI legal assistant built for Turkish law.',
      frame: 'My most comprehensive project — where I brought all of the above together into one product real users rely on.',
      lead: 'Terazi drafts contracts and petitions in minutes, audits every clause against 906 laws and 200,000+ Court of Cassation rulings, and rewrites them with AI — all before signing. Built on a RAG architecture, LLMs and a meticulous interface, it is a live product serving real users.',
      stats: {
        laws: 'Laws & Regulations',
        decisions: 'Court Rulings',
        docTypes: 'Document Types',
        analysis: 'Avg. Analysis'
      },
      liveBtn: 'Live Site',
      caseBtn: 'How It Works',
      docHeader: 'Residential Lease — Article 4',
      riskTag: 'TBK Art.344 · RISK 9/10',
      riskNote: 'An increase clause exceeding the legal limit is void.',
      stamp: 'UNLAWFUL',
      correction: 'The increase rate cannot exceed the 12-month CPI average (TBK Art.344).',
      caption: 'Live analysis output — illustrative'
    },
    rag: {
      kicker: '02 — HOW THE RAG ARCHITECTURE WORKS',
      title: 'AI that cites sources, not guesses.',
      subtitle: 'The backbone of the RAG pipelines I build works like this: five steps that turn raw data into searchable knowledge and a question into a source-grounded answer. (In Terazi, I run this over 200,000+ Court of Cassation rulings.)',
      steps: [
        { title: 'Query / Clause', desc: 'A legal question or contract clause enters the system.' },
        { title: 'Embedding', desc: 'The text is turned into a semantic vector by the embedding model.' },
        { title: 'pgvector Search', desc: 'Semantic similarity search across 200,000+ rulings.' },
        { title: 'Re-ranking', desc: 'The most relevant precedents are prioritized, noise is dropped.' },
        { title: 'Grounded Answer', desc: 'The LLM answers using only retrieved sources, with citations.' }
      ],
      note: 'PostgreSQL + pgvector · Embedding pipeline · LLM orchestration · KVKK-compliant masking'
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
        ai: 'AI/RAG',
        devops: 'DEVOPS',
        cloud: 'CLOUD',
        database: 'DATABASE',
        cache: 'CACHE'
      }
    },
    projects: {
      title: 'PROJECT_ARCHIVE',
      subtitle: 'My biggest project Terazi, and the websites I build for clients.',
      flagshipBadge: 'BIGGEST PROJECT',
      websitesTitle: 'Websites',
      websitesSubtitle: 'Modern, responsive template sites I build for fast delivery.',
      liveSystem: 'Live System',
      sourceCode: 'Source Code',
      loadMore: 'Load More Projects',
      filters: {
        all: 'all',
        ai: 'ai/rag',
        web: 'web',
        tools: 'tools'
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
