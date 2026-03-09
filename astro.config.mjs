// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 1. Replace with your actual GitHub username
  site: 'https://M-Qadir-hassan.github.io', 
  
  // 2. Replace with your exact repository name (keep the forward slash!)
  base: '/TheGoodkeeper', 

  // Your existing Tailwind v4 setup stays exactly the same
  vite: {
    plugins: [tailwindcss()]
  }
});