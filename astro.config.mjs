import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

const repoName = 'mocinhocalhas';

export default defineConfig({
  site: 'https://jholw.github.io',
  base: import.meta.env.PROD ? `/${repoName}/` : '/',
  integrations: [react()],
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
