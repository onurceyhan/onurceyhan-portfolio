/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Premium koyu sistem ──────────────────────────────────────────
        // Token adları geriye uyumluluk için korunur; değerler yeni "modern
        // SaaS" paletine eşlenir. Tek sıcak accent (gold) + nötr slate +
        // Terazi marka kırmızısı (flagship köprüsü).
        tactical: {
          bg: '#0a0d13',        // derin slate-siyah zemin
          surface: '#11151d',   // panel
          'surface-2': '#161b25',
          border: '#232a37',
          accent: '#e8b54a',
          'accent-glow': '#f1c96b',
          text: {
            primary: '#eef1f6',
            secondary: '#9aa6b8',
            muted: '#616d80',
          }
        },
        cyber: {
          yellow: '#e8b54a',    // → gold: birincil accent (aktif/vurgu)
          black: '#0a0d13',     // zemin/koyu metin
          cyan: '#9fb0c9',      // → nötr cool slate (kenarlık/ikon/ikincil)
        },
        // Terazi marka bağı (flagship bölümünde ölçülü kullanılır)
        terazi: {
          cream: '#f3efe6',
          paper: '#f7f4ec',
          accent: '#f87171', // red-400
          'accent-soft': '#fca5a5', // red-300
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2.6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-in': 'slide-in 0.5s ease-out',
        'float-soft': 'float-soft 7s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(232, 181, 74, 0.35)' },
          '50%': { opacity: '0.85', boxShadow: '0 0 0 4px rgba(232, 181, 74, 0)' },
        },
        'slide-in': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'float-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(159, 176, 201, 0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(159, 176, 201, 0.025) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '32px 32px',
      }
    },
  },
  plugins: [],
}
