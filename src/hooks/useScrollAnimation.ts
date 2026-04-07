import { useEffect } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    // Defines threshold based on device screen width
    const isMobile = window.innerWidth < 768;
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: isMobile ? 0.1 : 0.2
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Use requestAnimationFrame for smoothness
          requestAnimationFrame(() => {
            entry.target.classList.add('is-visible');
          });
          
          // Optional: Stop observing after it becomes visible if it's a one-time animation
          // The user mentions "Uma chave é usar Intersection Observer com threshold ajustado".
          // Usually we want animations to happen once for performance, or toggle. 
          // We will unobserve to avoid re-triggering and causing jitters, matching framer-motion's once: true default behavior used in the site.
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const animatedElements = document.querySelectorAll('[data-anim]');
    animatedElements.forEach(el => observer.observe(el));

    // Cleanup
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);
}
