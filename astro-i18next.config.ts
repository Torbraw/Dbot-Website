import { LANGUAGES } from './src/config';
import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "en",
  locales: Object.keys(LANGUAGES),
  namespaces: ["index", "header", "footer", "404", "documentation"],
  defaultNamespace: "index",
};

export default config;