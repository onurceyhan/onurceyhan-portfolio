# 🚀 Onur Ceyhan - Portfolio

Modern, AI-powered portfolio website featuring a cyberpunk-themed design, intelligent chatbot, and advanced security measures.

[![Portfolio](https://img.shields.io/badge/portfolio-live-success.svg)](https://onurceyhan-portfolio.vercel.app/)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Vue](https://img.shields.io/badge/Vue-3.x-42b883.svg)
![FastAPI](https://img.shields.io/badge/FastAPI-0.115-009688.svg)
![Python](https://img.shields.io/badge/Python-3.10+-3776ab.svg)

**🌐 [View Portfolio](https://onurceyhan-portfolio.vercel.app/)**

---

## ✨ Features

### 🎨 **Frontend**
- **Cyberpunk Design System** - Custom "Tactical Modernism" theme with cyber-yellow (#FCEE0C), cyber-cyan (#03D8F3), and cyber-black (#000000)
- **Bento Grid Layout** - Responsive card-based design with smooth animations
- **Multi-Language Support** - Turkish & English with persistent language selection
- **Project Showcase** - Interactive portfolio cards with live demos and GitHub links
- **Tech Arsenal Display** - Animated skill visualization with hover effects
- **Fully Responsive** - Optimized for mobile, tablet, and desktop

### 🤖 **AI Chatbot**
- **Groq Integration** - Ultra-fast LLM responses using Llama 3.3 70B Versatile
- **Portfolio-Focused** - Trained exclusively on portfolio information (no off-topic conversations)
- **Smart Protection** - Prevents prompt injection, jailbreak attempts, and off-topic queries
- **Usage Limits** - 5 questions per IP with automatic cooldown
- **Word Limit** - Maximum 20 words per question for focused queries
- **Real-Time Status** - Connection monitoring and question counter

### 🔒 **Security**
- **IP-Based Rate Limiting** - Prevents abuse with 5 requests/minute API-wide limit
- **Session Tracking** - In-memory usage tracking per client IP
- **Input Validation** - Blocks suspicious patterns and SQL injection attempts
- **Cooldown System** - Temporary IP blocking after limit reached
- **CORS Protection** - Configured for specific origins only

---

## 🛠️ Tech Stack

### **Frontend**
```
Vue 3            → Composition API with <script setup>
Vite             → Lightning-fast build tool
Tailwind CSS     → Utility-first styling with custom cyber theme
Axios            → HTTP client for API communication
Lucide Icons     → Modern icon library
```

### **Backend**
```
FastAPI          → High-performance async Python framework
Groq             → Ultra-fast LLM (Llama 3.3 70B Versatile)
Uvicorn          → ASGI server
Pydantic         → Data validation
SlowAPI          → Rate limiting middleware
```

### **DevOps**
```
Docker           → Containerization ready
Vercel           → Frontend deployment
Render/Railway   → Backend deployment options
```

---

## 📦 Installation

### **Prerequisites**
- Node.js 18+ and npm
- Python 3.10+
- Groq API key ([Get one free](https://console.groq.com/keys))

### **1. Clone Repository**

```bash
git clone https://github.com/onurceyhan/onurceyhan-portfolio.git
cd onurceyhan-portfolio
```

### **2. Frontend Setup**

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

### **3. Backend Setup**

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Configure environment variables
echo GROQ_API_KEY=your_groq_api_key_here > .env
echo ENVIRONMENT=development >> .env

# Run server
uvicorn app.main:app --reload --port 8000
```

The API will be available at `http://127.0.0.1:8000`

---

## 📁 Project Structure

```
onurceyhan-portfolio/
│
├── frontend/                    # Vue 3 + Vite Frontend
│   ├── public/
│   │   └── images/             # Project screenshots
│   ├── src/
│   │   ├── components/         # Vue components
│   │   │   ├── AIChatTerminal.vue
│   │   │   ├── HeroSection.vue
│   │   │   ├── ProjectCard.vue
│   │   │   ├── TechArsenal.vue
│   │   │   ├── DevOpsMonitor.vue
│   │   │   └── ProjectFiles.vue
│   │   ├── views/              # Page views
│   │   │   ├── HomeView.vue
│   │   │   └── ProjectsView.vue
│   │   ├── composables/        # Vue composables
│   │   │   └── useLanguage.js
│   │   ├── services/           # API client
│   │   │   └── api.js
│   │   ├── App.vue
│   │   └── main.js
│   ├── .env.development
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
└── backend/                     # FastAPI Backend
    ├── app/
    │   ├── api/
    │   │   └── endpoints/
    │   │       └── chat.py     # AI chat endpoint
    │   ├── core/
    │   │   ├── config.py       # Settings
    │   │   └── security.py     # Rate limiter & validation
    │   ├── services/
    │   │   └── chat_service.py # Groq integration
    │   └── main.py             # FastAPI app
    ├── .env
    └── requirements.txt
```

---

## 🎯 Key Features Explained

### **AI Chatbot Protection**

The chatbot implements multiple layers of security:

1. **Portfolio-Only Responses**: System prompt restricts AI to only discuss portfolio-related topics
2. **Off-Topic Detection**: Blocks questions about weather, recipes, sports, etc.
3. **Prompt Injection Prevention**: Validates input for suspicious patterns like "ignore previous", "act as", etc.
4. **Word Limit**: Maximum 20 words per question to ensure focused queries
5. **Rate Limiting**: 5 questions per IP with cooldown period

### **Multi-Language Support**

- Language selector modal on first visit
- Persistent language preference (localStorage)
- Toggleable flag-based language switcher in navbar
- Complete translations for all UI elements

### **Responsive Design**

- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px)
- Grid layout adapts: 1 column (mobile) → 2 columns (tablet) → 12 columns (desktop)
- Horizontal scrollable elements on mobile (filter bar, tech stack)

---

## 🚀 Deployment

### **Frontend (Vercel)**

```bash
# Deploy to Vercel
cd frontend
npm run build
vercel --prod
```

**Environment Variables:**
```env
VITE_API_URL=https://your-backend-url.com
```

### **Backend (Render/Railway)**

**Environment Variables:**
```env
GROQ_API_KEY=your_groq_api_key
ENVIRONMENT=production
HOST=0.0.0.0
PORT=8000
RATE_LIMIT_PER_MINUTE=10
```

**Dockerfile (Optional):**
```dockerfile
FROM python:3.10-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

---

## 🧪 Development

### **Frontend Commands**

```bash
npm run dev        # Start dev server with hot reload
npm run build      # Production build
npm run preview    # Preview production build locally
npm run lint       # Lint code with ESLint
```

### **Backend Commands**

```bash
# Development
uvicorn app.main:app --reload --port 8000

# Production
uvicorn app.main:app --host 0.0.0.0 --port 8000 --workers 4

# Check API docs
# Navigate to http://127.0.0.1:8000/docs
```

---

## 📊 Performance

- **Frontend Bundle**: ~150KB gzipped
- **Backend Cold Start**: <1s
- **LLM Response Time**: ~300-500ms average (Groq)
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)

---

## 🔐 Security Best Practices

1. **Environment Variables**: Never commit `.env` files
2. **API Keys**: Use server-side only (not in frontend)
3. **Rate Limiting**: Adjust `RATE_LIMIT_PER_MINUTE` based on traffic
4. **CORS**: Configure allowed origins in production
5. **Input Validation**: Backend validates all user inputs

---

## 🌐 API Documentation

### **Health Check**
```
GET /
Response: { "status": "System Online", "module": "backend" }
```

### **Chat Endpoint**
```
POST /api/chat
Body: { "message": "Your question" }
Response: {
  "reply": "AI response",
  "source": "Groq",
  "processing_time": 0.234,
  "model": "llama-3.3-70b-versatile",
  "limit_reached": false,
  "questions_remaining": 4
}
```

### **Chat Status**
```
GET /api/chat/status
Response: {
  "status": "operational",
  "model": "Groq Chatbot",
  "api_key_configured": true,
  "rate_limit": "5 requests/minute",
  "usage_limit_per_ip": "5 questions per 60 minutes",
  "client_ip_usage": { ... },
  "security_features": { ... }
}
```

---

## 🤝 Contributing

While this is a personal portfolio, feel free to fork and use it as inspiration for your own projects!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

## 📬 Contact

**Onur Ceyhan**
- Portfolio: [https://onurceyhan-portfolio.vercel.app](https://onurceyhan-portfolio.vercel.app)
- GitHub: [@onurceyhan](https://github.com/onurceyhan)
- LinkedIn: [@onur-ceyhan](https://www.linkedin.com/in/onur-ceyhan)

---

## 🙏 Acknowledgments

- **Groq** - For providing ultra-fast LLM inference
- **Vue Team** - For the amazing framework
- **FastAPI** - For the high-performance backend framework
- **Tailwind CSS** - For the utility-first CSS framework

---

<div align="center">
  <strong>Built with ❤️ using Vue 3, FastAPI, and Groq AI</strong>
  <br>
  <sub>© 2025 Onur Ceyhan. All rights reserved.</sub>
</div>
