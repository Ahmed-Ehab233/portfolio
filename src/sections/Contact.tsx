import SectionHeading from '@/components/SectionHeading';
import ContactCard from '@/components/ContactCard';
import { contactPlatforms } from '@/data/contact';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Contact — a compact link hub of direct connection cards (no form).
// What it controls: which platform cards appear.
// When to edit: rarely — platform data comes from src/data/contact.ts.
// To add/change a link, update the url field in that file.

export default function Contact() {
  const ref = useScrollReveal<HTMLElement>();
  const visible = contactPlatforms.filter((p) => p.url);

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-surface"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Contact"
          subtitle="Let's connect — I'm open to opportunities and collaboration."
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((platform) => (
            <ContactCard key={platform.label} platform={platform} />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-center text-sm text-content-subtle italic mt-8">
            Contact links will appear here once they are added in the contact
            data file.
          </p>
        )}
      </div>
    </section>
  );
}
