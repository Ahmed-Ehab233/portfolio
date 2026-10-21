// SectionHeading — reusable heading for major sections.

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-10" data-reveal>
      <h2 className="font-mono text-2xl font-semibold tracking-tight text-content sm:text-3xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-content-subtle text-sm sm:text-base">
          {subtitle}
        </p>
      )}

      <div className="mt-4 h-1 w-16 rounded-full bg-accent" />
    </div>
  );
}