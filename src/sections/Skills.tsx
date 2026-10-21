import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import SkillCategoryCard from '@/components/SkillCategoryCard';
import { skillCategories } from '@/data/skills';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Skills — the technical skills section with "Tech Stack Categorization" cards.
// What this controls: which skill categories appear, the mesh-grid background,
// and the interactive node-connection behavior.
// When to edit: rarely — skill data comes from src/data/skills.ts.
//
// Design concept: each category is a card with a minimalist tech icon header
// and compact data-chip tech badges for each skill. Hovering a card highlights
// it and subtly activates its neighbor nodes.

export default function Skills() {
  const ref = useScrollReveal<HTMLElement>();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const getNeighbors = (index: number): number[] => {
    const neighbors: number[] = [];
    if (index > 0) neighbors.push(index - 1);
    if (index < skillCategories.length - 1) neighbors.push(index + 1);
    return neighbors;
  };

  const neighbors = activeIndex !== null ? getNeighbors(activeIndex) : [];

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 bg-surface skills-mesh-bg overflow-hidden"
    >
      {/* Subtle radial glow in the background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, rgb(var(--color-accent) / 0.06) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Technical Skills"
          subtitle="My technical toolkit organized by domain — technologies I work with every day."
        />

        {/* Tech stack card grid — wrapped in data-reveal so the entire
            grid fades in as one unit. Individual cards must NOT have data-reveal. */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          data-reveal
        >
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={category.name}
              category={category}
              isActive={activeIndex === index}
              isNeighbor={neighbors.includes(index)}
              onHover={() => setActiveIndex(index)}
              onLeave={() => setActiveIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
