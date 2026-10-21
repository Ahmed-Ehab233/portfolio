// Contact platforms — direct connection links for the Contact section and footer.
// What it controls: the Contact section link hub and footer social icons.
// When to edit: when you add/update a profile URL or email.
// IMPORTANT: Leave url as "" to hide a card (no broken links will be shown).

export type ContactIconName =
  | 'gmail'
  | 'linkedin'
  | 'github'
  | 'whatsapp'
  | 'upwork'
  | 'khamsat'
  | 'nafezly'
  | 'briefcase';

export interface ContactPlatform {
  /** Card title, e.g. "Email Me Directly" or "LinkedIn". */
  label: string;
  /** Short descriptive subtitle shown under the title. */
  name: string;
  /** Destination URL. Use "mailto:..." for email. Leave "" to hide the card. */
  url: string;
  /** Key into the BrandIcon component's icon set. */
  icon: ContactIconName;
  /** Platform signature color (hex) — used as a subtle brand accent on the card. */
  brandColor: string;
  /** When true, the card is rendered as the full-width featured email card. */
  featured?: boolean;
}

export const contactPlatforms: ContactPlatform[] = [
  {
    label: 'Email Me Directly',
    name: 'Gmail',
    url: 'mailto: ahmedehab2336@gmail.com', // ← replace with your real email
    icon: 'gmail',
    brandColor: '#EA4335',
    featured: true,
  },
  {
    label: 'LinkedIn',
    name: 'Professional Profile',
    url: 'https://www.linkedin.com/in/ahmedehab233', // Add your LinkedIn profile URL
    icon: 'linkedin',
    brandColor: '#0A66C2',
  },
  {
    label: 'GitHub',
    name: 'Code & Projects',
    url: 'https://github.com/Ahmed-Ehab233', // Add your GitHub profile URL
    icon: 'github',
    brandColor: '#6E6E6E',
  },
  {
    label: 'WhatsApp',
    name: 'Direct Message',
    url: 'https://wa.me/201202419556', // Add "https://wa.me/<countrycode><number>"
    icon: 'whatsapp',
    brandColor: '#25D366',
  },
  {
    label: 'Upwork',
    name: 'Freelance Profile',
    url: 'https://www.upwork.com/freelancers/~01cdede58364f7b8cb?mp_source=share', // Add your Upwork profile URL
    icon: 'upwork',
    brandColor: '#14A800',
  },
  {
    label: 'Khamsat',
    name: 'Micro-services',
    url: 'https://khamsat.com/user/ahmed_ehab233',
    icon: 'briefcase', // أيقونة حقيبة العمل للخدمات المصغرة
    brandColor: '#FEA800', // 👈 تم تصحيح اللون للون البرتقالي الرسمي لشعار خمسات
  },
  {
    label: 'Nafezly',
    name: 'Freelance Profile',
    url: 'https://nafezly.com/u/ahmed_ehab23',
    icon: 'briefcase',
    brandColor: '#0B1B3D', // البرتقالي المائل للأحمر الرسمي لنافذلي
  },
  {
    label: 'Mostaql',
    name: 'Freelance Profile',
    url: 'https://mostaql.com/u/Ahmed_Ehab233',
    icon: 'briefcase',
    brandColor: '#2386C8', // الأزرق الرسمي لمستقل
  },
  {
    label: 'Kafiil',
    name: 'Freelance Profile',
    url: 'https://kafiil.com/u/ahmed_ehab49',
    icon: 'briefcase',
    brandColor: '#10B981', // الأخضر الزاهي الرسمي لكفيل
  },
];

// Platforms shown as small icons in the footer (subset of the above).
// Only entries with a non-empty url will actually render.
export const footerPlatforms: ContactIconName[] = ['gmail', 'linkedin', 'github', 'whatsapp'];
