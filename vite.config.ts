import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// ==========================================================================
// Vite configuration
// What this file controls: build settings, path aliases, and the base URL
// for deployed assets (important for GitHub Pages).
// When to edit: when deploying to GitHub Pages — you may need to change `base`.
//
// IMPORTANT — GitHub Pages `base` setting:
// - User/organization site (https://USERNAME.github.io): leave base as './'
//   or remove it entirely. Assets work from the domain root.
// - Project site (https://USERNAME.github.io/REPOSITORY-NAME/): set base to
//   '/REPOSITORY-NAME/' so asset paths resolve correctly under the sub-path.
//
// The default './' below works for BOTH scenarios because relative paths
// adapt automatically. This is the safest default for GitHub Pages.
// ==========================================================================

export default defineConfig({
  plugins: [react()],
  base: './', // Relative paths — works for both user and project GitHub Pages sites
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
