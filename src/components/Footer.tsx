import BrandIcon from '@/components/BrandIcon';
import Logo from '@/components/Logo';
import { personal } from '@/data/personal';
import { contactPlatforms, footerPlatforms } from '@/data/contact';

// Footer — appears at the bottom of every page.
// What it controls: the footer area with the personal logo, tagline,
// copyright, and social platform icons.
// When to edit: rarely — name/tagline come from personal data,
// links from contact data.

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerIcons = contactPlatforms.filter(
    (p) => p.url && footerPlatforms.includes(p.icon)
  );

  return (
    <footer className="bg-surface-alt border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Brand lockup — logo + tagline + copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Logo showText={false} showTagline={false} />
            <p className="mt-1 text-xs text-content-subtle">
              &copy; {currentYear} {personal.name}. 
            </p>
          </div>

          {/* Social / contact icons */}
          {footerIcons.length > 0 && (
            <div className="flex items-center gap-4">
              {footerIcons.map((link) => {
                const isMail = link.url.startsWith('mailto:');
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target={isMail ? undefined : '_blank'}
                    rel={isMail ? undefined : 'noopener noreferrer'}
                    aria-label={link.label}
                    className="text-content-subtle hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
                  >
                    <BrandIcon name={link.icon} className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
