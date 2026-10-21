import SectionHeading from '@/components/SectionHeading';
import { personal } from '@/data/personal';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// About — the "About Me" section with your bio text, framed by decorative
// animated quotation marks.
// What it controls: the about text paragraphs and the quote-mark framing.
// When to edit: rarely — content comes from src/data/personal.ts (about array).

export default function About() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-surface"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" />

        <div className="relative mt-8 sm:mt-10">
          {/* Decorative opening quote — top-left */}
          <span
            aria-hidden="true"
            className="quote-mark quote-mark-open pointer-events-none select-none absolute -top-12 -left-2 sm:-top-16 sm:-left-8 lg:-top-20 lg:-left-12 font-serif leading-none text-accent/45 dark:text-accent/55 transition-all duration-700 ease-out"
            data-reveal
          >
            “
          </span>

          {/* Bio card */}
          <div
            className="relative bg-surface-card rounded-2xl border border-border p-6 sm:p-8 lg:p-10 shadow-sm transition-colors duration-300"
            data-reveal
          >
            <div className="space-y-4">
              {personal.about.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-content-muted leading-relaxed text-base sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Decorative closing quote — bottom-right */}
          <span
            aria-hidden="true"
            className="quote-mark quote-mark-close pointer-events-none select-none absolute -bottom-20 -right-1 sm:-bottom-24 sm:-right-6 lg:-bottom-28 lg:-right-10 font-serif leading-none text-accent/45 dark:text-accent/55 transition-all duration-700 ease-out"
            data-reveal
          >
            ”
          </span>
        </div>
      </div>
    </section>
  );
}
