import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL) => `
# robots.txt for PennJet Aircraft Management Services
# https://pennjet.net/

# Allow all major search engines, block sensitive and admin areas
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/
Disallow: /drafts/
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /search
Disallow: /*?*

# Block aggressive or non-human bots
User-agent: MJ12bot
Disallow: /
User-agent: AhrefsBot
Disallow: /
User-agent: SemrushBot
Disallow: /
User-agent: BLEXBot
Disallow: /
User-agent: DotBot
Disallow: /
User-agent: YandexBot
Disallow: /
User-agent: spbot
Disallow: /
User-agent: Sogou web spider
Disallow: /

# Crawl delay for all bots (in seconds)
Crawl-delay: 10

# Sitemap location (auto-generated)
Sitemap: ${sitemapURL.href}

# Host directive for search engines
Host: https://pennjet.net

# For support or questions, contact info@pennjet.com
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  return new Response(getRobotsTxt(sitemapURL));
};
