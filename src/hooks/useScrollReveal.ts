import { useEffect, useRef, type RefObject } from 'react';

// useScrollReveal — adds the 'is-visible' class to elements with [data-reveal]
// when they scroll into view, triggering the CSS fade-in-up animation.
// What it controls: entrance animations for sections and cards.
// Returns a ref to attach to a container — all [data-reveal] children inside
// will be observed.

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const elements = container.querySelectorAll('[data-reveal]');

    // If IntersectionObserver isn't supported, show everything
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Animate once only
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}
