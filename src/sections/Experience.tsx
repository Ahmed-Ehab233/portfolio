import SectionHeading from '@/components/SectionHeading';
import ProgramCard from '@/components/ProgramCard';
import { programs } from '@/data/training';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Experience — professional bootcamps and initiatives (e.g. DEPI).
// What it controls: the Experience & Bootcamps section.
// When to edit: rarely — data comes from src/data/training.ts (kind: 'experience').

export default function Experience() {
  const ref = useScrollReveal<HTMLElement>();
  const experiences = programs.filter((item) => item.kind === 'experience');

  return (
    <section id="experience" ref={ref} className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="Building practical skills through training, projects, and applied learning in data."
        />

        <div className="grid grid-cols-1 gap-6">
          {experiences.map((program) => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}
