// Navigation links — controls the navbar and smooth-scroll behavior.
// What it controls: the top navigation bar and mobile menu.
// When to edit: when you add or rename a major section, or want to reorder nav items.
// The "id" must match the id attribute on the corresponding <section> element.

export interface NavLink {
  label: string;
  id: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Education', id: 'education' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' },
];
