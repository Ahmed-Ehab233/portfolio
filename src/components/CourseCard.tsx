import { ExternalLink, BadgeCheck } from 'lucide-react';
import type { Program } from '@/data/training';

interface CourseCardProps {
  course: Program;
}

// CourseCard — compact badge-style card for the Certifications & Courses section.
// Shows only the essentials: status badge, title, organization • period, topic chips,
// and an optional "View Credential" link. No role or long description.
export default function CourseCard({ course }: CourseCardProps) {
  const isOngoing = course.status === 'Ongoing';

  return (
    <div
      className="group relative bg-surface-card rounded-xl border border-border p-4 sm:p-5 transition-all duration-300 hover:border-accent-border hover:shadow-[0_0_0_1px_var(--color-accent-border),0_8px_24px_-12px_var(--color-accent)] h-full flex flex-col justify-between"
      data-reveal
    >
      {/* Top row: status badge only (role removed for compactness) */}
      <div className="mb-3 flex items-center justify-between gap-2">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 font-mono text-[11px] font-medium ${
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
          {course.status}
        </span>
        <BadgeCheck
          size={15}
          className="text-content-subtle/60 transition-colors group-hover:text-accent"
        />
      </div>

      {/* Title */}
      <h3 className="text-[15px] font-bold text-content mb-1.5 tracking-tight leading-snug">
        {course.title}
      </h3>

      {/* Organization • Period on a single line */}
      <p className="mb-3 font-mono text-[11px] text-content-subtle flex flex-wrap items-center gap-x-2 gap-y-0.5">
        <span className="truncate">{course.organization}</span>
        {course.period && (
          <>
            <span className="text-content-muted/60">•</span>
            <span className="text-content-muted">{course.period}</span>
          </>
        )}
      </p>

      {/* Compact topic chips */}
      {course.topics && course.topics.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {course.topics.map((topic, index) => (
            <span
              key={`${topic}-${index}`}
              className="rounded-md border border-border bg-surface-alt px-2 py-0.5 font-mono text-[10px] text-content-muted transition-colors hover:border-accent-border hover:text-accent"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      {/* Credential link pinned to the bottom */}
      <div className="mt-auto pt-3 border-t border-border/60 flex justify-end">
        {course.certificateUrl ? (
          <a
            href={course.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-[11px] font-medium text-accent transition-all duration-200 hover:gap-2 hover:text-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <ExternalLink size={12} />
            View Credential
          </a>
        ) : (
          <span className="font-mono text-[11px] text-content-muted/50">
            {isOngoing ? 'In progress' : '—'}
          </span>
        )}
      </div>
    </div>
  );
}
