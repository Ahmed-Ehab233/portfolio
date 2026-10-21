
import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState(
    sectionIds[0] ?? ''
  );

  useEffect(() => {
    let frameId = 0;

    const updateActiveSection = () => {
      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;

        // Keep Home active at the very top.
        if (scrollY < 80) {
          setActiveSection(sectionIds[0] ?? '');
          return;
        }

        // The final section should be active near the bottom of the page.
        if (maxScroll - scrollY < 40) {
          setActiveSection(sectionIds[sectionIds.length - 1] ?? '');
          return;
        }

        // Reading line below the fixed navbar.
        const readingLine = 120;
        let currentSection = sectionIds[0] ?? '';

        for (const id of sectionIds) {
          const element = document.getElementById(id);
          if (!element) continue;

          const rect = element.getBoundingClientRect();

          if (rect.top <= readingLine && rect.bottom > readingLine) {
            currentSection = id;
          }
        }

        setActiveSection(currentSection);
      });
    };

    updateActiveSection();

    window.addEventListener('scroll', updateActiveSection, {
      passive: true,
    });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [sectionIds]);

  return activeSection;
}
