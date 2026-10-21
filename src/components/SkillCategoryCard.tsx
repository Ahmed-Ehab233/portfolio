import type { SkillCategory } from '@/data/skills';
import { Code2, BarChart3, Brain, Database, type LucideIcon } from 'lucide-react';

interface SkillCategoryCardProps {
  category: SkillCategory;
  isActive: boolean;
  isNeighbor: boolean;
  onHover: () => void;
  onLeave: () => void;
}

// SkillCategoryCard — renders a single skill category as a "Tech Stack" card
// with a category icon, title, and compact data-chip tech badges for each skill.
//
// NOTE: This component must NOT use data-reveal because its className is
// dynamically recomputed on hover state changes. React overwrites the full
// className string on re-render, which would strip the is-visible class
// added by the IntersectionObserver and cause the card to disappear.

const ICON_MAP: Record<string, LucideIcon> = {
  code: Code2,
  chart: BarChart3,
  brain: Brain,
  database: Database,
};

export default function SkillCategoryCard({
  category,
  isActive,
  isNeighbor,
  onHover,
  onLeave,
}: SkillCategoryCardProps) {
  const Icon = ICON_MAP[category.icon] ?? Code2;

  return (
    <article
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
      tabIndex={0}
      className={`skill-node group relative flex h-full flex-col rounded-xl border bg-surface-card/80 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
        isActive
          ? 'is-active border-accent'
          : isNeighbor
            ? 'is-neighbor border-accent-border'
            : 'border-border'
          }`}
    >
      {/* Decorative node dot — top-right corner accent */}
      <span className="skill-node-dot" />

      {/* Header: icon + category name, with optional status badge on a second line */}
      <div className="mb-4 flex flex-col gap-2">
        <div className="flex min-w-0 items-center gap-2.5">
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors duration-300 ${
              isActive
                ? 'border-accent bg-accent-soft text-accent'
                : 'border-border bg-surface-alt text-content-subtle group-hover:border-accent-border group-hover:text-accent'
            }`}
          >
            <Icon size={16} strokeWidth={2} />
          </span>
          <h3 className="font-mono text-sm font-semibold leading-tight tracking-tight text-content">
            {category.name}
          </h3>
        </div>

        {category.status && (
          <span className="skill-status-badge w-fit rounded-full border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 font-mono text-[9px] leading-tight text-amber-700 dark:text-amber-400">
            {category.status}
          </span>
        )}
      </div>

      {/* Skill data chips — compact tech badges with glowing node dots */}
      <div className="flex flex-wrap content-start gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill.name}
            className="skill-chip group/chip inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-alt px-2.5 py-1.5 font-mono text-[11px] leading-4 text-content-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-border hover:bg-accent-soft hover:text-accent hover:shadow-sm"
          >
            {/* Micro-node indicator dot */}
            <span className="skill-chip-dot h-1.5 w-1.5 shrink-0 rounded-full bg-accent/40 transition-all duration-200 group-hover/chip:bg-accent group-hover/chip:shadow-[0_0_6px_0_rgb(var(--color-accent)/0.6)]" />
            {skill.name}
          </span>
        ))}
      </div>
    </article>
  );
}
