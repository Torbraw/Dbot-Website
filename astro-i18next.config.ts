import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "en",
  showDefaultLocale: true,
  locales: ["en", "fr"],
  namespaces: ["index", "header", "footer"],
  defaultNamespace: "index",
};

export default config;