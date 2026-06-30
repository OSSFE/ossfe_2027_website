import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ossfe.github.io',
  base: '/ossfe_2027_website/',
  vite: { plugins: [tailwindcss()] },
});