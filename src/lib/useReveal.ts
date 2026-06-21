import { useEffect } from 'react';

// Lägger 'js-ready' på <html> och avslöjar .reveal-element vid scroll.
// Allt innehåll är synligt utan JS (SEO + crawl-säkert).
export function useReveal() {
  useEffect(() => {
    document.documentElement.classList.add('js-ready');

    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
