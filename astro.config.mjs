import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
const { SITE_URL } = loadEnv(import.meta.env.MODE, process.cwd(), '');
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import astroI18next from 'astro-i18next';
import solidJs from '@astrojs/solid-js';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: 'server',
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    astroI18next(),
    solidJs(),
    mdx(),
    sitemap(),
  ],
  adapter: vercel(),
});
