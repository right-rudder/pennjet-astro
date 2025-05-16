# Image Optimization Guide for PennJet Website

## Best Practices for SEO-Friendly Images

### 1. Image Formats

- **WebP**: Use WebP as the primary format for all images (best compression/quality ratio)
- **JPEG/JPG**: For photographs when WebP support is a concern
- **PNG**: Only for images requiring transparency
- **SVG**: For logos, icons, and simple illustrations

### 2. Image Dimensions

- **Hero Images**: 1920px × 1080px maximum
- **Content Images**: 1200px × 800px maximum
- **Thumbnails**: 400px × 300px
- **Product Shots**: 1200px × 1200px
- **Team Photos**: 800px × 800px

### 3. File Size Optimization

- All images should be compressed before uploading:
  - Large hero images: aim for under 200KB
  - Content images: aim for under 100KB
  - Thumbnails: under 30KB

### 4. Naming Convention

Use descriptive, keyword-rich filenames with hyphens between words:

- `pennjet-aircraft-management-services-pottstown.webp`
- `private-jet-charter-heritage-field.webp`
- `aircraft-ownership-benefits-pennsylvania.webp`

### 5. Alt Text Requirements

Every image must have descriptive alt text that:

- Accurately describes the image
- Includes relevant keywords naturally
- Is concise (125 characters max)
- Example: `alt="PennJet aircraft management team at Heritage Field Airport in Pottstown, PA"`

### 6. Image Optimization Tools

- [Squoosh](https://squoosh.app/) - Browser-based image compression
- [TinyPNG](https://tinypng.com/) - PNG and JPEG compression
- [WebP Converter](https://cloudconvert.com/webp-converter) - Convert images to WebP format

### 7. Responsive Images

Use the `srcset` attribute to provide different image sizes for different devices:

```html
<img
  srcset="
    /images/aircraft-small.webp   400w,
    /images/aircraft-medium.webp  800w,
    /images/aircraft-large.webp  1200w
  "
  sizes="(max-width: 600px) 400px,
         (max-width: 1200px) 800px,
         1200px"
  src="/images/aircraft-medium.webp"
  alt="PennJet Aircraft Management Services"
  loading="lazy"
/>
```

### 8. Lazy Loading

Include the `loading="lazy"` attribute on images below the fold to improve page load time.

### 9. Image Sitemap

All important images should be included in the XML sitemap with proper image metadata.

---

## Implementation in Astro

```astro
---
// Example image component with optimized properties
---

<img
  src="/path/to/image.webp"
  alt="Descriptive alt text with keywords"
  width="800"
  height="600"
  loading="lazy"
  decoding="async"
  class="your-classes-here"
/>
```

Following these guidelines will ensure your images contribute positively to SEO rankings while maintaining good site performance.
