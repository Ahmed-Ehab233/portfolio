import { ArrowRight, BarChart3, Table2, LayoutDashboard, Code2, Database, BrainCircuit } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Service } from '@/data/services';

// ServiceCard — compact service offering card.
// Shows only: icon accent, title, short description, inline tool chips, and a
// "Discuss Project →" link that scrolls to the Contact section.
// The long "What's included" task lists are intentionally omitted for compactness.

const iconMap: Record<string, LucideIcon> = {
  BarChart3,
  Table2,
  LayoutDashboard,
  Code2,
  Database,
  BrainCircuit,
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const handleContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const Icon = iconMap[service.icon] ?? BarChart3;

  return (
    <div className="group bg-surface-card rounded-xl border border-border p-5 flex flex-col transition-all duration-300 hover:border-accent-border hover:shadow-[0_0_0_1px_var(--color-accent-border),0_12px_28px_-16px_var(--color-accent)] hover:-translate-y-1">
      {/* Icon accent */}
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-alt text-accent transition-all duration-300 group-hover:border-accent-border group-hover:bg-accent/5 group-hover:shadow-[0_0_16px_-4px_var(--color-accent)]">
        <Icon size={18} />
      </div>

      {/* Title */}
      <h3 className="text-[15px] font-bold text-content mb-2 tracking-tight leading-snug group-hover:text-accent transition-colors">
        {service.title}
      </h3>

      {/* Short description */}
      <p className="text-sm text-content-muted leading-relaxed mb-4">
        {service.description}
      </p>

      {/* Inline tools list */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {service.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-md border border-border bg-surface-alt px-2 py-0.5 font-mono text-[10px] text-content-muted transition-colors hover:border-accent-border hover:text-accent"
          >
            {tool}
          </span>
        ))}
      </div>

      {/* CTA link pinned to bottom */}
      <button
        onClick={handleContact}
        className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md self-start"
      >
        Discuss Project
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
