
import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Projects() {
  const ref = useScrollReveal<HTMLElement>();
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const handleToggle = (title: string) => {
    setExpandedProject((current) => (current === title ? null : title));
  };
  
  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-surface-alt [overflow-anchor:none]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of projects in machine learning, business intelligence, and application development."
        />

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              isExpanded={expandedProject === project.title}
              onToggle={() => handleToggle(project.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
