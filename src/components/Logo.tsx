// Logo — the personal brand mark, matching the navbar's monospace "Æ" glyph.
// Renders cleanly in both light and dark modes via theme-driven text colors.
// What it controls: the footer (and any other) brand logo + tagline lockup.

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function Logo({ className = '', showTagline = false }: LogoProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <span
        aria-hidden="true"
        className="font-mono text-3xl font-medium tracking-tight text-content leading-none select-none"
      >
        Æ
      </span>
      {showTagline && (
        <span className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-content-subtle">
          Ahmed Ehab
        </span>
      )}
    </div>
  );
}
