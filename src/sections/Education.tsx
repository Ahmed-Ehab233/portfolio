import { GraduationCap } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import CircularProgress from '@/components/CircularProgress';
import { education } from '@/data/education';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Education — the education section with a circular progress visual.
// What it controls: the education information display.
// When to edit: rarely — content comes from src/data/education.ts.
// The circular progress is a decorative visual element — it does NOT represent
// an exact percentage of degree completion.

export default function Education() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      id="education"
      ref={ref}
      className="py-20 bg-surface-alt"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Education"
          subtitle="My academic foundation in Data Science."
        />

        <div
          className="flex flex-col sm:flex-row items-center gap-8 bg-surface-card rounded-xl border border-border p-6 sm:p-8"
          data-reveal
        >
          {/* Circular progress visual — decorative, not a percentage indicator */}
          <div className="flex-shrink-0">
            <CircularProgress
              progress={67}
              label="3rd"
              sublabel="Year"
              size={140}
            />
          </div>

          {/* Education details */}
          <div className="flex-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
              <GraduationCap size={22} className="text-accent" />
              <h3 className="text-lg font-bold text-content">
                {education.faculty}
              </h3>
            </div>
            <p className="text-content-muted font-medium mb-1">
              {education.institution}
            </p>
            <p className="text-sm text-accent mb-3">{education.year}</p>
            <p className="text-sm text-content-muted leading-relaxed">
              {education.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
