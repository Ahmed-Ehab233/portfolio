import { ArrowDown, Mail, FileText } from 'lucide-react';
import { personal } from '@/data/personal';
import ProfileImage from '@/components/ProfileImage';
import HeroDataVisuals from '@/components/HeroDataVisuals';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Hero — the top section visitors see first.
// What it controls: name, headline, tagline, bio, profile image, CTA buttons,
// and decorative data-inspired background visuals.
// When to edit: rarely — content comes from src/data/personal.ts.
// To replace the profile image, see src/components/ProfileImage.tsx.
// To change the background visuals, see src/components/HeroDataVisuals.tsx.

export default function Hero() {
  const ref = useScrollReveal<HTMLElement>();

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-surface-alt bg-dot-grid pt-16 pb-12 overflow-hidden"
    >
      {/* Decorative data-visual background layer — behind content, no pointer events */}
      <HeroDataVisuals />

      {/* Main content — positioned above the visual layer */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
          {/* Profile image */}
          <div className="flex-shrink-0" data-reveal>
            <ProfileImage />
          </div>

          {/* Text content */}
          <div className="text-center lg:text-left flex-1" data-reveal>
            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-content mb-3">
              {personal.name}
            </h1>

            {/* Headline */}
            <p className="text-xl sm:text-2xl text-accent font-medium mb-3">
              {personal.headline}
            </p>

            {/* Tagline */}
            <p className="text-base text-content-subtle mb-5 tracking-wide font-mono">
              {personal.tagline}
            </p>

            {/* Bio */}
            <p className="text-sm text-content-muted max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
              {personal.studyStatus}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <button
                onClick={scrollToContact}
                className="btn-primary inline-flex items-center gap-2"
              >
                <Mail size={16} />
                Get in touch
              </button>
              {personal.resumeUrl ? (
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <FileText size={16} />
                  Resume
                </a>
              ) : (
                <button onClick={scrollToContact} className="btn-secondary inline-flex items-center gap-2">
                  <FileText size={16} />
                  Resume
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-12">
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 text-sm font-medium text-content-subtle hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={16} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
