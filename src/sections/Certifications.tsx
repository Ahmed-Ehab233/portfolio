import SectionHeading from '@/components/SectionHeading';
import CourseCard from '@/components/CourseCard';
import { programs } from '@/data/training';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Certifications — specialized courses and global programs (e.g. GCI World).
// What it controls: the Certifications & Courses section.
// When to edit: rarely — data comes from src/data/training.ts (kind: 'course').

export default function Certifications() {
  const ref = useScrollReveal<HTMLElement>();
  const courses = programs.filter((item) => item.kind === 'course');

  return (
    <section id="certifications" ref={ref} className="py-20 bg-surface-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications & Courses"
          subtitle="Specialized courses and global programs deepening my expertise in data science and AI."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((program) => (
            <CourseCard key={program.title} course={program} />
          ))}
        </div>
      </div>
    </section>
  );
}
