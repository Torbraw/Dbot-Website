import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "en",
  locales: ["en", "fr"],
  namespaces: ["global", "index", "header"],
  defaultNamespace: "global",
};

export default config;