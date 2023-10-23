import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
    defaultLocale: "uk",
    locales: ["uk", "ru", "en"],
    i18nextServer: {
      debug: true,
    },
  };

export default config;