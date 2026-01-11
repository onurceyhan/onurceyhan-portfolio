/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tactical: {
          bg: '#0a0f1a',
          surface: '#131b2e',
          border: '#1e293b',
          accent: '#14b8a6',
          'accent-glow': '#2dd4bf',
          text: {
            primary: '#ffffff',
            secondary: '#94a3b8',
            muted: '#64748b',
          }
        },
        cyber: {
          yellow: '#FCEE0C',
          black: '#000000',
          cyan: '#03D8F3',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-in': 'slide-in 0.5s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 15px rgba(20, 184, 166, 0.5)' },
          '50%': { opacity: '0.7', boxShadow: '0 0 30px rgba(20, 184, 166, 0.8)' },
        },
        'slide-in': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(148, 163, 184, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '24px 24px',
      }
    },
  },
  plugins: [],
}

