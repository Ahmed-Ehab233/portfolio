# Ahmed Ehab — Personal Portfolio Website

A clean, professional portfolio website built with React, Vite, and Tailwind CSS. The content is separated from the design so you can update your information without touching the code. Includes dark and light theme support, a data-inspired visual identity, and smooth scroll animations.

---

## 1. Project Overview

This is a personal portfolio website for **Ahmed Ehab**, an aspiring Data Scientist and Data Engineer. The website includes sections for:

- Home / Hero (name, headline, and profile image)
- About Me
- Education
- Technical Skills
- Featured Projects
- Training & Professional Development
- Services
- Contact

The site is designed to be honest, professional, easy to navigate, and easy to maintain.

---

## 2. Technologies Used and Their Purposes

| Technology | Purpose |
|---|---|
| **React** | Creates the user interface using reusable components |
| **Vite** | Build tool that compiles the project and serves it during development |
| **TypeScript** | Adds type checking to catch errors before they reach the browser |
| **Tailwind CSS** | Utility-first CSS framework for styling — no separate CSS files needed |
| **Lucide React** | Provides the icons used in the navbar, contact buttons, and section accents |

No backend, database, or paid service is required. The site is fully static and can be hosted on GitHub Pages for free.

---

## 3. Project Folder Structure

```
ahmed-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          ← GitHub Actions deployment workflow
├── src/
│   ├── components/             ← Reusable UI pieces used across sections
│   │   ├── Navbar.tsx          ← Top navigation bar (theme-aware, active section)
│   │   ├── Footer.tsx          ← Bottom footer (theme-aware)
│   │   ├── SectionHeading.tsx  ← Reusable section title
│   │   ├── ProjectCard.tsx     ← Single project card
│   │   ├── TrainingCard.tsx    ← Single training program card
│   │   ├── SkillCategoryCard.tsx ← Single skill category card
│   │   ├── ServiceCard.tsx     ← Single service offering card
│   │   ├── ThemeToggle.tsx     ← Dark/light mode switch button
│   │   ├── ProfileImage.tsx    ← Profile image placeholder (replace your photo here)
│   │   └── CircularProgress.tsx ← Animated circular visual for Education section
│   ├── sections/               ← Major portfolio sections (one per section)
│   │   ├── Hero.tsx            ← Home / hero section with profile image
│   │   ├── About.tsx           ← About Me section
│   │   ├── Education.tsx       ← Education section with circular progress visual
│   │   ├── Skills.tsx          ← Technical Skills section
│   │   ├── Projects.tsx        ← Featured Projects section
│   │   ├── Training.tsx        ← Training & Professional Development section
│   │   ├── Services.tsx        ← Services section (detailed service offerings)
│   │   └── Contact.tsx         ← Contact section
│   ├── context/
│   │   └── ThemeContext.tsx    ← Dark/light theme provider (manages theme state)
│   ├── hooks/
│   │   ├── useScrollReveal.ts  ← Scroll-triggered entrance animations
│   │   └── useActiveSection.ts ← Tracks which section is in view for navbar
│   ├── data/                   ← All editable content lives here
│   │   ├── personal.ts         ← Name, headline, about text, career goals, study status
│   │   ├── skills.ts           ← Skills organized by category
│   │   ├── training.ts         ← Training programs and their details
│   │   ├── projects.ts         ← Project entries
│   │   ├── services.ts         ← Service offerings (titles, descriptions, tools, tasks)
│   │   ├── education.ts        ← Education information
│   │   ├── contact.ts          ← Email, LinkedIn, GitHub, freelance links
│   │   └── navigation.ts       ← Navigation bar items
│   ├── App.tsx                 ← Main app — brings all sections together
│   ├── main.tsx                ← Entry point (wraps app in ThemeProvider)
│   └── index.css               ← Global styles (theme variables, fonts, animations)
├── index.html                  ← HTML template (page title, meta tags)
├── vite.config.ts              ← Vite build + GitHub Pages configuration
├── tailwind.config.js          ← Tailwind theme settings (colors, fonts)
├── tsconfig.app.json           ← TypeScript settings
├── package.json                ← Dependencies and scripts
└── README.md                   ← This file
```

---

## 4. Explanation of Main Files and Their Responsibilities

### `src/data/` — Your Content (edit these files)

This is where all your website content lives. **You should only need to edit files in this folder to update your content.**

| File | What it controls | When to edit |
|---|---|---|
| `personal.ts` | Your name, headline, tagline, About Me text, career goals, study status | When your bio or headline changes |
| `skills.ts` | All skill categories and individual skills | When you learn a new skill or want to rename a category |
| `training.ts` | Training programs (DEPI, GCI World) and their topics | When a program status changes or you add a new program |
| `projects.ts` | All project entries (title, description, technologies, links) | When you add, edit, or remove a project |
| `services.ts` | Service offerings (title, description, tools, tasks) | When you add or update a service |
| `education.ts` | Education information (institution, faculty, year) | When your education status changes |
| `contact.ts` | Email, LinkedIn, GitHub, and freelance profile links | When you get a new email or create/update a profile |
| `navigation.ts` | The items in the top navigation bar | When you add or rename a major section |

### `src/components/` — Reusable UI Pieces (edit rarely)

| File | What it does | When to edit |
|---|---|---|
| `Navbar.tsx` | The top navigation bar with smooth-scroll links, active section highlighting, and theme toggle | Only if you want to change the nav bar's behavior or appearance |
| `Footer.tsx` | The footer at the bottom of every page | Only if you want to change the footer's layout |
| `SectionHeading.tsx` | The title + colored line shown at the top of each section | Only if you want to change how section titles look |
| `ProjectCard.tsx` | How a single project card looks | When you want to change the visual layout of project cards |
| `TrainingCard.tsx` | How a single training program card looks | When you want to change the visual layout of training cards |
| `SkillCategoryCard.tsx` | How a single skill category looks | When you want to change the visual layout of skill groups |
| `ServiceCard.tsx` | How a single service offering card looks | When you want to change the visual layout of service cards |
| `ThemeToggle.tsx` | The dark/light mode switch button | Only if you want to change the toggle's visual style |
| `ProfileImage.tsx` | The profile image placeholder in the hero section | When you want to add your photo (see instructions in the file) |
| `CircularProgress.tsx` | The animated circular visual in the Education section | Only if you want to change the animation |

### `src/sections/` — Major Sections (edit rarely)

Each file in this folder corresponds to one section of the website. They pull content from the data files and pass it to the reusable components. You only need to edit these if you want to change how a section is structured or styled.

| File | What it does | When to edit |
|---|---|---|
| `Hero.tsx` | The first section visitors see (name, headline, profile image, CTAs) | Only to change the hero layout |
| `About.tsx` | The About Me section | Only to change the about layout |
| `Education.tsx` | The Education section with circular progress visual | Only to change the education layout |
| `Skills.tsx` | The Technical Skills section | Only to change the skills layout |
| `Projects.tsx` | The Featured Projects section | Only to change the projects layout |
| `Training.tsx` | The Training section | Only to change the training layout |
| `Services.tsx` | The Services section (detailed service offerings) | Only to change the services layout |
| `Contact.tsx` | The Contact section | Only to change the contact layout |

### `src/App.tsx` — Main Application

This file brings all the sections together and controls their order on the page. To add a new section, import it here and place it where you want it to appear.

### `src/index.css` — Global Styles & Theme Variables

Controls the default font family, smooth scrolling, **all theme colors** (via CSS variables), scroll-reveal animations, and reduced-motion accessibility. Colors are defined as CSS variables in `:root` (light theme) and `.dark` (dark theme). Change these values to update the entire site's color palette.

### `src/context/ThemeContext.tsx` — Theme Provider

Manages the dark/light theme state. Reads the user's saved preference from `localStorage` and applies the `dark` class to the `<html>` element. The `useTheme` hook lets any component access and toggle the theme.

### `src/hooks/` — Custom Hooks

- `useScrollReveal.ts`: Adds entrance animations to elements with `data-reveal` when they scroll into view.
- `useActiveSection.ts`: Tracks which section is currently visible so the navbar can highlight the active link.

### `vite.config.ts` — Build Configuration

Controls how the project is built and where assets are served from. The `base: './'` setting makes asset paths relative, which works for both user sites and project sites on GitHub Pages.

### `tailwind.config.js` — Theme Settings

Controls the design system: maps CSS variables to Tailwind color names (e.g., `bg-surface`, `text-content`, `text-accent`), defines fonts, and custom animations. See the "How to change colors, fonts, and design settings" section below.

### `index.html` — HTML Template

Controls the page title (shown in browser tabs) and meta tags. You can change the `<title>` text here.

---

## 5. How to Update Your Personal Information

Open `src/data/personal.ts` and edit the values:

- **`name`**: Your full name (shown in the hero and footer)
- **`headline`**: Your professional title (shown in the hero)
- **`tagline`**: A short phrase (shown in the hero)
- **`about`**: An array of paragraphs (each string is one paragraph in the About section)
- **`careerDirection`**: An array of goal strings (kept for reference — the Career Direction section was removed; these can be used in future sections if needed)
- **`studyStatus`**: Your current study status (shown in the hero)

**Example — changing your headline:**
```typescript
headline: 'Aspiring Data Scientist & Data Engineer',
```
Change to:
```typescript
headline: 'Data Science Student & Aspiring Data Engineer',
```

---

## 6. How to Add, Edit, and Remove Projects

Open `src/data/projects.ts`.

### Adding a new project

Copy an existing project object in the `projects` array, paste it at the end, and change the values:

```typescript
{
  title: 'My New Project',
  category: 'Data Analysis',
  status: 'Completed project',
  description: 'A description of what the project does.',
  technologies: ['Python', 'Pandas'],
  link: '', // Add a GitHub URL here when available
},
```

### Editing a project

Find the project by its title and change any of its fields.

### Removing a project

Delete the entire object (from `{` to the comma after `}`) for that project.

### Adding a project link

When you have a GitHub repository or case study URL, set the `link` field:

```typescript
link: 'https://github.com/yourusername/your-project',
```

The "View Project" button will appear automatically. If `link` is `''` (empty string), no button is shown.

---

## 7. How to Update Skills and Training Programs

### Skills

Open `src/data/skills.ts`. Each category has a `name`, an optional `status` (like "Currently Developing"), and a `skills` array.

To add a skill, add it to the `skills` array of the relevant category:
```typescript
skills: ['Python', 'Pandas', 'NumPy', 'New Skill Name'],
```

To add a new category, copy an existing category object and change its values.

### Training Programs

Open `src/data/training.ts`. Each program has a title, organization, role, status, description, and optional topics.

To change a program's status from "Ongoing" to "Completed":
```typescript
status: 'Completed',
```

To add a new training program, copy an existing object in the `trainingPrograms` array and change the values.

---

## 8. How to Update Contact and Social Links

Open `src/data/contact.ts`.

Each link has a `label`, `url`, and `icon`. To add your email:
```typescript
{
  label: 'Email',
  url: 'mailto:your.email@example.com',
  icon: 'Mail',
},
```

To add your LinkedIn:
```typescript
{
  label: 'LinkedIn',
  url: 'https://www.linkedin.com/in/yourprofile',
  icon: 'Linkedin',
},
```

To add your GitHub:
```typescript
{
  label: 'GitHub',
  url: 'https://github.com/yourusername',
  icon: 'Github',
},
```

**Important:** Leave `url` as `''` (empty string) if you don't have a link yet. The button will be hidden and no broken link will be shown.

---

## 9. How to Change Colors, Fonts, and Design Settings

### Colors

Colors are defined as **CSS variables** in `src/index.css` and mapped to Tailwind utility names in `tailwind.config.js`. There are two theme blocks:

- `:root` — light theme values
- `.dark` — dark theme values

The semantic color names are:

| Variable | Tailwind class | What it controls |
|---|---|---|
| `--color-surface` | `bg-surface` | Page background |
| `--color-surface-alt` | `bg-surface-alt` | Alternate section background |
| `--color-surface-card` | `bg-surface-card` | Card backgrounds |
| `--color-border` | `border-border` | Default borders |
| `--color-border-hover` | `border-border-hover` | Hover borders |
| `--color-content` | `text-content` | Primary text |
| `--color-content-muted` | `text-content-muted` | Secondary text |
| `--color-content-subtle` | `text-content-subtle` | Tertiary text |
| `--color-accent` | `text-accent`, `bg-accent` | Accent color (blue) |
| `--color-accent-hover` | `bg-accent-hover` | Accent hover state |
| `--color-accent-soft` | `bg-accent-soft` | Soft accent background |
| `--color-accent-border` | `border-accent-border` | Accent border |

To change the accent color, update the `--color-accent*` variables in both the `:root` and `.dark` blocks in `src/index.css`. Values are space-separated RGB (e.g., `37 99 235` for blue-600).

### Dark / Light Theme

The theme toggle is in the navbar (sun/moon icon). It remembers your choice in `localStorage` and respects the system preference on first visit. To change the default theme, edit `src/context/ThemeContext.tsx`.

### Fonts

The default font is set in `src/index.css`:
```css
body {
  font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
}
```

To change the font, replace `'Inter'` with your preferred font name. To use a Google Font, add a `<link>` tag in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
```

Then update the `font-family` in `src/index.css`.

### Fonts

The default font is set in `src/index.css`:
```css
body {
  font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
}
```

To change the font, replace `'Inter'` with your preferred font name. If you want to use a Google Font, add a `<link>` tag in `index.html` inside the `<head>` section:

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
```

Then update the `font-family` in `src/index.css`.

### Spacing and Layout

Spacing is controlled by Tailwind classes like `py-20` (padding top and bottom), `px-4` (padding left and right), `gap-6` (gap between grid items), `max-w-6xl` (maximum width), and `mx-auto` (centering). These are used directly in the section and component files.

### Section Backgrounds

Each section alternates between `bg-surface` and `bg-surface-alt` to create visual rhythm. To change a section's background, edit the `<section>` tag's className in the corresponding file in `src/sections/`.

### Shadows and Borders

Cards use `border border-border` (themed border) and `hover:shadow-md`. Hover effects also change the border to `hover:border-accent-border`. These can be adjusted in the component files in `src/components/`.

### Animations

- **Scroll reveal**: Elements with `data-reveal` fade in when scrolled into view. Controlled by `useScrollReveal` hook and CSS in `src/index.css`.
- **Circular progress**: Animated in the Education section. Controlled by `src/components/CircularProgress.tsx`.
- **Skill hover**: Skill tags lift slightly on hover (`hover:-translate-y-0.5`).
- **Reduced motion**: All animations are disabled when `prefers-reduced-motion: reduce` is set. Handled in `src/index.css`.

### Responsive Behavior

The site is responsive by default. Key responsive patterns used:
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` — grids that adapt from 1 to 3 columns
- `md:flex` / `hidden md:flex` — show/hide elements on different screen sizes
- `text-xl sm:text-2xl` — font sizes that increase on larger screens
- `px-4 sm:px-6 lg:px-8` — padding that increases on larger screens

These breakpoints are defined by Tailwind: `sm` = 640px, `md` = 768px, `lg` = 1024px.

---

## 10. How to Install Dependencies

You need **Node.js** (version 18 or higher) installed on your computer. You can download it from [https://nodejs.org](https://nodejs.org).

Then open a terminal in the project folder and run:

```bash
npm install
```

This installs all the packages listed in `package.json`.

---

## 11. How to Run the Website Locally

After installing dependencies, run:

```bash
npm run dev
```

This starts a local development server. Open the URL shown in the terminal (usually `http://localhost:5173`) in your browser. The page updates automatically when you save changes to any file.

---

## 12. How to Build the Production Version

To create the optimized production files in the `dist/` folder:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

The `dist/` folder contains the files you would upload to any static hosting service.

---

## 13. How to Connect and Synchronize the Project with GitHub

These steps assume you have a GitHub account and Git installed.

### Step 1: Create a new repository on GitHub

1. Go to [https://github.com/new](https://github.com/new)
2. Enter a repository name (e.g., `my-portfolio` or `ahmedehab.github.io`)
3. Do **not** initialize with a README (you already have one)
4. Click **Create repository**

### Step 2: Connect your local project to GitHub

Open a terminal in the project folder and run:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/REPOSITORY-NAME.git
git push -u origin main
```

Replace `YOURUSERNAME` with your GitHub username and `REPOSITORY-NAME` with your repository name.

### Step 3: Future updates

After making changes locally, run:

```bash
git add .
git commit -m "Describe what you changed"
git push
```

---

## 14. How to Deploy the Website Using GitHub Pages

This project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys your site.

### Step 1: Enable GitHub Pages with GitHub Actions

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save

### Step 2: Push your code

The workflow runs automatically every time you push to the `main` branch. After pushing, go to the **Actions** tab in your repository to see the build progress.

### Step 3: Access your live site

Once the workflow completes, your site will be live at:

- **User/organization site:** `https://YOURUSERNAME.github.io`
- **Project site:** `https://YOURUSERNAME.github.io/REPOSITORY-NAME`

### About the Vite `base` configuration

The `base` setting in `vite.config.ts` controls how asset paths (CSS, JavaScript, images) are resolved after deployment.

- The current setting `base: './'` uses **relative paths**, which works for both user sites and project sites without any changes.
- If you ever need absolute paths, set `base: '/REPOSITORY-NAME/'` for a project site, or `base: '/'` for a user site. Relative paths (`'./'`) are recommended for flexibility.

### User site vs. project site

| Type | Repository name | URL | `base` setting |
|---|---|---|---|
| User site | `USERNAME.github.io` | `https://USERNAME.github.io` | `'./'` (default) |
| Project site | Any other name | `https://USERNAME.github.io/REPO-NAME` | `'./'` (default) |

With `base: './'`, you do not need to change anything regardless of which type you use.

### What the workflow file does

The `.github/workflows/deploy.yml` file:

1. **Triggers** on every push to `main` (or manual trigger from the Actions tab)
2. **Installs** Node.js 20 and project dependencies
3. **Builds** the website using `npm run build`
4. **Uploads** the built files as a GitHub Pages artifact
5. **Deploys** the artifact to GitHub Pages

You do not need to change this file unless you switch to a different Node.js version or change the build command.

---

## 15. How to Troubleshoot Common Build or Deployment Issues

### "Command not found: npm"

Node.js is not installed or not in your PATH. Download it from [https://nodejs.org](https://nodejs.org) and restart your terminal.

### Build fails with errors

1. Run `npm install` to make sure all dependencies are installed
2. Run `npm run build` and read the error message
3. Common causes:
   - Missing import: Make sure every component you use is imported at the top of the file
   - Typo in a file name or path
   - Missing comma or bracket in a data file (check `src/data/` files)

### GitHub Pages shows a blank page

1. Check that `base: './'` is set in `vite.config.ts`
2. Check the Actions tab for any workflow errors
3. Make sure the Pages source is set to "GitHub Actions" in Settings → Pages

### Icons not showing

Make sure `lucide-react` is in `package.json` dependencies and installed. Run `npm install` if needed.

### Navigation links don't scroll to the right section

Make sure the `id` in `src/data/navigation.ts` matches the `id` attribute on the `<section>` element in the corresponding section file (e.g., `id="about"` in both `navigation.ts` and `About.tsx`).

### Changes not appearing

- In development: the dev server should auto-reload. If it doesn't, refresh your browser.
- On GitHub Pages: you need to `git push` your changes. The workflow rebuilds the site automatically.

---

## 16. Information You Still Need to Provide

The following links and details are currently empty placeholders. To make them functional, add the real URLs in the corresponding data files:

| What | Where to add it | File |
|---|---|---|
| Your email address | `url: 'mailto:your@email.com'` | `src/data/contact.ts` |
| LinkedIn profile URL | `url: 'https://linkedin.com/in/...'` | `src/data/contact.ts` |
| GitHub profile URL | `url: 'https://github.com/...'` | `src/data/contact.ts` |
| Upwork profile URL | `url: 'https://upwork.com/...'` | `src/data/contact.ts` |
| Fiverr profile URL | `url: 'https://fiverr.com/...'` | `src/data/contact.ts` |
| FIFA Players project repo | `link: 'https://github.com/...'` | `src/data/projects.ts` |
| Churn Analysis project repo | `link: 'https://github.com/...'` | `src/data/projects.ts` |
| Hotel Database project repo | `link: 'https://github.com/...'` | `src/data/projects.ts` |

Until these are added, the corresponding buttons and links will be hidden — no broken links will appear.

---

## 17. Remaining Steps to Run or Deploy

1. **To run locally:** `npm install` → `npm run dev`
2. **To deploy:** Push to GitHub → enable Pages with GitHub Actions → the workflow handles the rest
3. **Add your profile photo** — see `src/components/ProfileImage.tsx` (put your image in `public/` and set the `profileImageUrl` variable)
4. **Add your real contact links** in `src/data/contact.ts`
5. **Add project repository links** in `src/data/projects.ts` when available
