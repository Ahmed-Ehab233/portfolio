import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Services — the services section (replaces the old Freelancing section).
// What it controls: which service offerings are displayed.
// When to edit: rarely — service data comes from src/data/services.ts.

export default function Services() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 bg-surface-alt"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Services"
          subtitle="Applying data skills to practical problems while continuing to grow."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
