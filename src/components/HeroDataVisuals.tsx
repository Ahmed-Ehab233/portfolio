// HeroDataVisuals — a decorative background layer for the Hero section.
// What it controls: subtle animated data-inspired graphics (line charts, bar
// charts, connected nodes) rendered behind the hero content.
// When to edit: only if you want to change the decorative graphics' appearance,
// position, or animation timing.
//
// IMPORTANT:
// - This layer uses pointer-events: none so it never blocks buttons or links.
// - It is positioned absolutely behind the hero content (z-0).
// - All animations are disabled under prefers-reduced-motion (handled in index.css).
// - Elements are progressively hidden on smaller screens to reduce visual clutter.

export default function HeroDataVisuals() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {/* ================================================================
          Top-left: Mini line chart with tracing animation
          Hidden on mobile to keep the layout clean.
         ================================================================ */}
      <svg
        className="absolute top-16 left-0 w-48 h-24 opacity-30 hidden md:block"
        viewBox="0 0 200 80"
        fill="none"
      >
        <path
          d="M5,60 Q30,20 55,45 T105,30 T155,50 T195,25"
          stroke="rgb(var(--color-accent))"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="hero-line-trace"
          style={{ strokeDasharray: 280, strokeDashoffset: 280 }}
        />
        <path
          d="M5,70 Q30,50 55,60 T105,55 T155,65 T195,55"
          stroke="rgb(var(--color-accent))"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.5"
          className="hero-line-trace hero-line-delay-2"
          style={{ strokeDasharray: 240, strokeDashoffset: 240 }}
        />
      </svg>

      {/* ================================================================
          Top-right: Connected data nodes
          Hidden on mobile, shown on tablet+.
         ================================================================ */}
      <svg
        className="absolute top-20 right-0 w-44 h-28 opacity-30 hidden sm:block"
        viewBox="0 0 180 100"
        fill="none"
      >
        {/* Connecting lines */}
        <line x1="20" y1="25" x2="70" y2="55" stroke="rgb(var(--color-accent))" strokeWidth="0.8" opacity="0.4" />
        <line x1="70" y1="55" x2="130" y2="30" stroke="rgb(var(--color-accent))" strokeWidth="0.8" opacity="0.4" />
        <line x1="70" y1="55" x2="110" y2="85" stroke="rgb(var(--color-accent))" strokeWidth="0.8" opacity="0.3" />
        <line x1="130" y1="30" x2="160" y2="70" stroke="rgb(var(--color-accent))" strokeWidth="0.8" opacity="0.3" />
        {/* Nodes */}
        <circle cx="20" cy="25" r="3" fill="rgb(var(--color-accent))" className="hero-node-pulse" style={{ animationDelay: '0s' }} />
        <circle cx="70" cy="55" r="4" fill="rgb(var(--color-accent))" className="hero-node-pulse" style={{ animationDelay: '1s' }} />
        <circle cx="130" cy="30" r="3" fill="rgb(var(--color-accent))" className="hero-node-pulse" style={{ animationDelay: '2s' }} />
        <circle cx="110" cy="85" r="2.5" fill="rgb(var(--color-accent))" className="hero-node-pulse" style={{ animationDelay: '0.5s' }} />
        <circle cx="160" cy="70" r="2" fill="rgb(var(--color-accent))" className="hero-node-pulse" style={{ animationDelay: '1.5s' }} />
      </svg>

      {/* ================================================================
          Bottom-left: Mini bar chart with staggered height animation
          Hidden on mobile.
         ================================================================ */}
      <div className="absolute bottom-8 left-4 flex items-end gap-1.5 opacity-25 hidden md:flex">
        <div
          className="w-3 rounded-t-sm bg-accent hero-bar-grow"
          style={{ height: '0px', animationDelay: '0.3s', '--hero-bar-h': '24px' } as React.CSSProperties}
        />
        <div
          className="w-3 rounded-t-sm bg-accent hero-bar-grow"
          style={{ height: '0px', animationDelay: '0.5s', '--hero-bar-h': '40px' } as React.CSSProperties}
        />
        <div
          className="w-3 rounded-t-sm bg-accent hero-bar-grow"
          style={{ height: '0px', animationDelay: '0.7s', '--hero-bar-h': '32px' } as React.CSSProperties}
        />
        <div
          className="w-3 rounded-t-sm bg-accent hero-bar-grow"
          style={{ height: '0px', animationDelay: '0.9s', '--hero-bar-h': '52px' } as React.CSSProperties}
        />
        <div
          className="w-3 rounded-t-sm bg-accent hero-bar-grow"
          style={{ height: '0px', animationDelay: '1.1s', '--hero-bar-h': '38px' } as React.CSSProperties}
        />
      </div>

      {/* ================================================================
          Bottom-right: Second mini line chart
          Hidden on tablet and mobile.
         ================================================================ */}
      <svg
        className="absolute bottom-12 right-0 w-40 h-20 opacity-25 hidden lg:block"
        viewBox="0 0 160 60"
        fill="none"
      >
        <path
          d="M5,45 Q25,15 45,30 T85,20 T125,35 T155,15"
          stroke="rgb(var(--color-accent))"
          strokeWidth="1.2"
          strokeLinecap="round"
          className="hero-line-trace hero-line-delay-3"
          style={{ strokeDasharray: 220, strokeDashoffset: 220 }}
        />
        {/* Small dots along the curve */}
        <circle cx="45" cy="30" r="2" fill="rgb(var(--color-accent))" className="hero-node-pulse" style={{ animationDelay: '2.5s' }} />
        <circle cx="85" cy="20" r="2" fill="rgb(var(--color-accent))" className="hero-node-pulse" style={{ animationDelay: '3s' }} />
        <circle cx="125" cy="35" r="2" fill="rgb(var(--color-accent))" className="hero-node-pulse" style={{ animationDelay: '3.5s' }} />
      </svg>

      {/* ================================================================
          Mid-right: Small scattered data points (dots only)
          Visible on all screen sizes, very subtle.
         ================================================================ */}
      <div className="absolute top-1/2 right-6 opacity-20 hidden sm:block">
        <div className="grid grid-cols-3 gap-2">
          <div className="h-1 w-1 rounded-full bg-accent hero-node-pulse" style={{ animationDelay: '0.8s' }} />
          <div className="h-1 w-1 rounded-full bg-accent hero-node-pulse" style={{ animationDelay: '1.2s' }} />
          <div className="h-1 w-1 rounded-full bg-accent hero-node-pulse" style={{ animationDelay: '0.4s' }} />
          <div className="h-1 w-1 rounded-full bg-accent hero-node-pulse" style={{ animationDelay: '2s' }} />
          <div className="h-1 w-1 rounded-full bg-accent hero-node-pulse" style={{ animationDelay: '1.6s' }} />
          <div className="h-1 w-1 rounded-full bg-accent hero-node-pulse" style={{ animationDelay: '0.2s' }} />
        </div>
      </div>
    </div>
  );
}
