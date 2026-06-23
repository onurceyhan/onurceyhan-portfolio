import { onMounted, onBeforeUnmount } from 'vue'

/**
 * Scroll-reveal: elementlere `.reveal` sınıfı ver, görünür olunca `.reveal-visible`
 * eklenir (CSS geçişlerini style.css yönetir). Tek bir IntersectionObserver tüm
 * `.reveal` öğelerini izler. `prefers-reduced-motion` açıkken hepsi anında görünür.
 *
 * Kullanım: bileşenin <script setup>'ında `useReveal()` çağır; markup'ta
 * istediğin öğelere `class="reveal"` (ve stagger için `reveal-delay-1..4`) ekle.
 */
export function useReveal(options = {}) {
  const { root = null, rootMargin = '0px 0px -10% 0px', threshold = 0.12 } = options
  let observer = null

  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  onMounted(() => {
    const els = Array.from(document.querySelectorAll('.reveal:not(.reveal-visible)'))

    // Hareket azaltma tercihi ya da IO desteği yoksa: hepsini anında göster.
    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      els.forEach((el) => el.classList.add('reveal-visible'))
      return
    }

    observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { root, rootMargin, threshold }
    )

    els.forEach((el) => observer.observe(el))
  })

  onBeforeUnmount(() => {
    if (observer) observer.disconnect()
  })
}
