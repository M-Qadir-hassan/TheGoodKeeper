// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Your existing Tailwind v4 setup stays exactly the same
  vite: {
    plugins: [tailwindcss()]
  }
});