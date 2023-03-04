import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "en",
  locales: ['fr', 'en'],
  namespaces: ["index", "header", "footer", "404", "docs", "encyclopedia"],
  defaultNamespace: "index",
  i18nextServer: {
    backend: {
      loadPath: './public/locales/{{lng}}/{{ns}}.json',
    },
    debug: true
  },
};

export default config;