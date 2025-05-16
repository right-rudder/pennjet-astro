/**
 * Sitemap priority configuration for the PennJet website
 * This file defines the priority and change frequency for different types of pages
 *
 * Priority values range from 0.0 to 1.0, with 1.0 being the highest priority
 * Change frequency options: always, hourly, daily, weekly, monthly, yearly, never
 */

export const SITEMAP_CONFIG = {
  // Main landing pages - highest priority
  home: {
    priority: 1.0,
    changefreq: "weekly",
  },

  // Primary service pages - high priority
  services: {
    priority: 0.9,
    changefreq: "monthly",
  },

  // Contact and about pages - important but not as critical as service pages
  contact: {
    priority: 0.8,
    changefreq: "monthly",
  },
  about: {
    priority: 0.8,
    changefreq: "monthly",
  },

  // Blog section and category pages
  blogSection: {
    priority: 0.7,
    changefreq: "weekly",
  },

  // Individual blog posts
  blogPost: {
    priority: 0.6,
    changefreq: "monthly",
  },

  // Standard pages
  standard: {
    priority: 0.5,
    changefreq: "monthly",
  },

  // Legal pages - lower priority
  legal: {
    priority: 0.3,
    changefreq: "yearly",
  },
};

// Helper function to get the configuration for a specific page type
export function getPageConfig(type) {
  return SITEMAP_CONFIG[type] || SITEMAP_CONFIG.standard;
}
