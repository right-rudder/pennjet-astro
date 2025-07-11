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
      filter: (page) =>
        !page.includes("404") &&
        !page.includes("admin") &&
        !page.includes("private") &&
        !page.includes("drafts"),
      serialize: (page) => {
        // Add image and alternate language support for SEO
        const images = [];
        if (page.data && page.data.heroImage) {
          images.push({
            url: page.data.heroImage,
            title: page.data.title || "PennJet Aircraft Management Services",
            caption:
              page.data.description ||
              "PennJet aircraft management and charter services.",
          });
        }
        return {
          url: page.url,
          lastmod: page.lastmod,
          changefreq: page.changefreq,
          images,
          alternates: page.alternates || [],
        };
      },
    }),
    react(),
  ],
});
