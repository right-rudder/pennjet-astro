// Helper functions for SEO optimization

import { SITE_TITLE, SITE_DESCRIPTION, KEYWORDS } from "../consts";
import { getPageConfig } from "../data/sitemapConfig";

/**
 * Generates SEO metadata for a page based on its type and custom values
 * @param {string} pageType - Type of page matching keys in sitemapConfig
 * @param {Object} customValues - Optional custom values to override defaults
 * @returns {Object} Complete SEO metadata object
 */
interface CustomSEOValues {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string | null;
  noindex?: boolean;
  priority?: number;
  changefreq?: string;
}

export function generateSEOMetadata(
  pageType = "standard",
  customValues: CustomSEOValues = {},
) {
  const pageConfig = getPageConfig(pageType);

  // Default values based on page type
  const defaults = {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    keywords: KEYWORDS,
    canonicalUrl: null, // Will be set by BaseHead component
    noindex: false,
    priority: pageConfig.priority,
    changefreq: pageConfig.changefreq,
  };

  // Merge defaults with custom values
  return {
    ...defaults,
    ...customValues,
    // Ensure title has brand name if it's not already included
    title: customValues.title
      ? customValues.title.includes("PennJet")
        ? customValues.title
        : `${customValues.title} | PennJet Aircraft Management`
      : defaults.title,
  };
}

/**
 * Generates structured breadcrumb data for a page
 * @param {Array} segments - Array of URL segments
 * @param {Object} labels - Optional custom labels for segments
 * @returns {Array} Array of breadcrumb objects with name and path
 */
export function generateBreadcrumbs(segments = [], labels = {}) {
  const breadcrumbs = [];
  let currentPath = "";

  segments.forEach((segment) => {
    currentPath += `/${segment}`;

    // Use custom label if provided, otherwise capitalize the segment
    const name =
      labels[segment] ||
      segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");

    breadcrumbs.push({
      name,
      path: currentPath,
    });
  });

  return breadcrumbs;
}

/**
 * Generates canonical URL for the current page
 * @param {URL} url - Current URL object
 * @param {string} site - Base site URL
 * @returns {string} Canonical URL string
 */
export function getCanonicalUrl(url, site) {
  const baseUrl = site?.toString().replace(/\/$/, "") || "https://pennjet.net";
  const path = url.pathname;

  // Remove trailing slash unless it's the homepage
  const canonicalPath = path === "/" ? path : path.replace(/\/$/, "");

  return `${baseUrl}${canonicalPath}`;
}
