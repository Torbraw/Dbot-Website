import type { AstroI18nextConfig } from "astro-i18next";
import locales from "./public/locales";

const config: AstroI18nextConfig = {
  defaultLocale: "en",
  locales: ['fr', 'en'],
  namespaces: ["index", "header", "footer", "404", "docs", "encyclopedia"],
  defaultNamespace: "index",
  i18nextServer: {
    resources: locales,
    debug: true
  },
  i18nextClientPlugins: {
    fsBackend: null
  }
};

export default config;