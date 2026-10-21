import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { useActiveSection } from '@/hooks/useActiveSection';
import ThemeToggle from '@/components/ThemeToggle';

// Navbar — the top navigation bar with smooth-scroll links, active section
// highlighting, theme toggle, and a mobile menu.
// What it controls: navigation at the top of every page, mobile hamburger menu.
// When to edit: rarely — nav items come from src/data/navigation.ts.

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/85 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-surface/40 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          

{/* Minimal Monospace Logo */}
<button
  onClick={() => scrollToSection('home')}
  aria-label="Go to home"
  className="rounded-md font-mono text-3xl font-medium tracking-tight text-content transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
>
  Æ
</button>




          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-0.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                
className={`relative rounded-md px-3 py-2 font-mono text-[13px] font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
  after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:rounded-full after:bg-accent after:transition-transform after:duration-200 after:origin-center
  ${
    activeSection === link.id
      ? 'text-accent after:scale-x-100'
      : 'text-content-muted after:scale-x-0 hover:text-accent hover:after:scale-x-100'
  }`}
              >
                {link.label}
              </button>
            ))}
            {/* Theme toggle divider */}
            <div className="w-px h-5 bg-border mx-2" />
            <ThemeToggle />
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-1">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
             
className="rounded-md p-2 font-mono text-content-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"

              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden bg-surface border-t border-border shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
className={`block w-full rounded-md px-3 py-2 text-left font-mono text-[13px] font-medium transition-colors ${
  activeSection === link.id
    ? 'text-accent bg-accent-soft'
    : 'text-content-muted hover:text-accent hover:bg-accent-soft'
}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
