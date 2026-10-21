
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  BrainCircuit,
  ChartNoAxesCombined,
  Database,
  CheckCircle2,
  Linkedin,
  Github,
} from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
}

function getProjectIcon(category: string) {
  const value = category.toLowerCase();

  if (value.includes('machine learning')) return BrainCircuit;

  if (
    value.includes('analysis') ||
    value.includes('business intelligence')
  ) {
    return ChartNoAxesCombined;
  }

  return Database;
}

export default function ProjectCard({
  project,
  isExpanded,
  onToggle,
}: ProjectCardProps) {
  const ProjectIcon = getProjectIcon(project.category);

  const detailsId = `project-details-${project.title
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .toLowerCase()}`;

  return (
    <article
      data-reveal
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5"
    >
      <div className="h-1 w-full bg-gradient-to-r from-accent via-accent/50 to-teal-400/60" />

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/15 bg-accent/5 text-accent">
            <ProjectIcon size={20} strokeWidth={1.7} />
          </div>

          <span className="max-w-[70%] rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium leading-4 text-emerald-700 dark:text-emerald-400">
            {project.status}
          </span>
        </div>

        <p className="mb-2 font-mono text-[11px] font-medium uppercase tracking-wider text-accent">
          {project.category}
        </p>

        <h3 className="mb-3 text-lg font-bold leading-snug text-content transition-colors group-hover:text-accent">
          {project.title}
        </h3>

        <p className="mb-4 text-sm leading-5 text-content-muted">
          {project.description}
        </p>

        <div className="mt-auto border-t border-border/70 pt-3">
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isExpanded}
            aria-controls={detailsId}
            className="inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-accent transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {isExpanded ? 'Hide Details' : 'Show Details'}

            {isExpanded ? (
              <ArrowUp size={15} />
            ) : (
              <ArrowDown size={15} />
            )}
          </button>

          {(project.linkedin || project.github) && (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.linkedin && (
                <a
                  href={project.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on LinkedIn`}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-[13px] font-medium text-content transition-colors hover:border-[#0A66C2]/50 hover:text-[#0A66C2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <Linkedin size={14} />
                  LinkedIn
                  <ArrowUpRight size={13} />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-[13px] font-medium text-content transition-colors hover:border-accent/50 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <Github size={14} />
                  GitHub
                  <ArrowUpRight size={13} />
                </a>
              )}
            </div>
          )}
        </div>

        <div
          id={detailsId}
          aria-hidden={!isExpanded}
          className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
  isExpanded
    ? 'grid-rows-[1fr] opacity-100'
    : 'grid-rows-[0fr] opacity-0'
}`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="border-t border-border/70 pt-4">
              <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-wider text-content-subtle">
                Key Highlights
              </p>

              <ul className="space-y-2">
                {project.highlights?.slice(0, 3).map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-[13px] leading-5 text-content-muted"
                  >
                    <CheckCircle2
                      size={15}
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {project.collaborationNote && (
                <p className="mt-3 text-xs leading-5 text-content-subtle">
                  {project.collaborationNote}
                </p>
              )}

              <p className="mb-2 mt-4 font-mono text-[11px] font-medium uppercase tracking-wider text-content-subtle">
                Technologies
              </p>

              <div className="flex flex-wrap gap-1.5 pb-1">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-surface-alt px-2 py-1 font-mono text-[11px] leading-4 text-content-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
