import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL) => `
# robots.txt for PennJet Aircraft Management Services
# https://pennjet.net/

User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/
Disallow: /drafts/
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /search
Disallow: /*?*

# Block specific bots that might cause issues
User-agent: MJ12bot
Disallow: /

User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

# Crawl delay to prevent overloading the server
Crawl-delay: 10

# Sitemaps
Sitemap: ${sitemapURL.href}

# Host directive for search engines
Host: https://pennjet.net
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  return new Response(getRobotsTxt(sitemapURL));
};
