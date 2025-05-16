import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://pennjet.net",
  integrations: [
    tailwind(),
    partytown({
      // Improved Partytown config for analytics
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    sitemap({
      changefreq: "weekly",
      lastmod: new Date(),
      filter: (page) => !page.includes("404"),
    }),
    react(),
  ],
});
