import { defineConfig } from 'astro/config';
import { loadEnv } from "vite";
const { SITE_URL } = loadEnv(import.meta.env.MODE, process.cwd(), "");

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import image from '@astrojs/image';

import astroI18next from 'astro-i18next';

// https://astro.build/config
import solidJs from '@astrojs/solid-js';

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
  ],
});
