import { ExternalLink } from 'lucide-react';
import type { Program } from '@/data/training';

interface ProgramCardProps {
  program: Program;
}

// ProgramCard — renders a single experience or course milestone card with a
// status badge, role, description, and optional "Areas Covered" topic chips.
export default function ProgramCard({ program }: ProgramCardProps) {
  const isOngoing = program.status === 'Ongoing';

  return (
    <div
      className="bg-surface-card rounded-xl border border-border p-6 transition-all duration-300 hover:border-accent-border hover:shadow-lg h-full flex flex-col justify-between"
      data-reveal
    >
      <div>
        {/* Header: Status badge & Role */}
        <div className="mb-3 flex items-center justify-between gap-2">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-xs font-medium ${
              isOngoing
                ? 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20'
                : 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20'
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isOngoing ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'
              }`}
            />
            {program.status}
          </span>
          <span className="font-mono text-xs font-medium text-accent">
            {program.role}
          </span>
        </div>

        {/* Title and organization */}
        <h3 className="text-lg font-bold text-content mb-1 tracking-tight">
          {program.title}
        </h3>
        <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-content-subtle">
          <span>{program.organization}</span>
          {program.period && (
            <span className="inline-flex items-center gap-1 text-content-muted">
              <span className="h-1 w-1 rounded-full bg-border" />
              {program.period}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-content-muted leading-relaxed mb-6">
          {program.description}
        </p>
      </div>

      {/* Optional topics list */}
      {program.topics && program.topics.length > 0 && (
        <div className="pt-4 border-t border-border/60">
          <p className="mb-2.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-content-subtle">
            Areas Covered
          </p>
          <div className="flex flex-wrap gap-1.5">
            {program.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-md border border-border bg-surface-alt px-2.5 py-1 font-mono text-[11px] text-content-muted transition-colors hover:border-accent-border hover:text-accent"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Optional credential link */}
      {program.certificateUrl && (
        <div className="pt-4 mt-4 border-t border-border/60">
          <a
            href={program.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-accent-border bg-accent/5 px-3 py-1.5 font-mono text-xs font-medium text-accent transition-all duration-200 hover:bg-accent/10 hover:shadow-[0_0_0_1px_var(--color-accent-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <ExternalLink size={13} />
            View Credential
          </a>
        </div>
      )}
    </div>
  );
}
