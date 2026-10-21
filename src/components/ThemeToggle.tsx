import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

// ThemeToggle — the dark/light mode switch button shown in the navbar.
// What it controls: switches between light and dark themes.
// When to edit: only if you want to change the toggle's visual style.

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg text-content-muted hover:text-accent hover:bg-accent-soft transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
