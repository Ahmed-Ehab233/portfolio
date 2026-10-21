import { useEffect, useState } from 'react';

// CircularProgress — a circular progress visual for the Education section.
// What it controls: an animated circular ring with a label in the center.
// When to edit: only if you want to change the animation speed or visual style.
//
// IMPORTANT: This visual does NOT represent an exact percentage of degree
// completion. It is a decorative element. The `progress` value controls how
// much of the ring is filled (0–100). The animation plays once when the
// element scrolls into view, and respects prefers-reduced-motion.

interface CircularProgressProps {
  progress: number; // 0–100, controls how much of the ring is filled
  label: string; // Text shown in the center
  sublabel?: string; // Smaller text below the label
  size?: number; // Diameter in pixels (default 140)
}

export default function CircularProgress({
  progress,
  label,
  sublabel,
  size = 140,
}: CircularProgressProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedProgress / 100) * circumference;

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      setAnimatedProgress(progress);
      return;
    }

    // Animate the progress when the component mounts
    const timer = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 300);

    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
        aria-hidden="true"
      >
        {/* Background track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          className="stroke-border"
        />
        {/* Progress arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          stroke="rgb(var(--color-accent))"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition: 'stroke-dashoffset 1.2s ease-out',
          }}
        />
      </svg>

      {/* Center label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-content">{label}</span>
        {sublabel && (
          <span className="text-xs text-content-subtle mt-0.5">{sublabel}</span>
        )}
      </div>
    </div>
  );
}
