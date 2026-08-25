# SEO Implementation Documentation

## Overview
This project implements a comprehensive Static and Dynamic SEO architecture for the React + Vite web application (sikar.com.et).

## Static SEO Setup

### index.html
- Updated with production baseline static fallback meta tags
- Includes canonical link pointing to https://sikar.com.et/
- Preconnect hints for fonts.googleapis.com, fonts.gstatic.com, and sikar.com.et
- Open Graph / Twitter fallback tags for "Sikar Yosef | Software Engineer"
- Complete meta tags for SEO optimization

### Sitemap Generation
- Custom script `generate-sitemap.js` generates sitemap.xml upon build
- Automatically includes all routes including dynamic project detail pages
- Configured to run after build in package.json scripts

### Robots.txt
- Located in `public/robots.txt`
- References https://sikar.com.et/sitemap.xml
- Allows all crawlers with proper configuration
- Automatically copied to dist directory during build

## Dynamic SEO Architecture

### react-helmet-async
- Installed and configured for dynamic meta tag management
- Wrapped root app with `<HelmetProvider>` in `src/main.tsx`

### SEO Component
- Reusable component located at `src/components/SEO.tsx`
- TypeScript strongly typed with comprehensive props:
  - `title`: Page-specific title (appends " | Sikar Yosef")
  - `description`: Page-specific description
  - `canonical`: Custom canonical URL path
  - `ogImage`: Social preview image URL
  - `ogType`: Website, article, or profile
  - `schema`: Dynamic JSON-LD structured data object
  - `noIndex`: Boolean for noindex/nofollow
- Default fallback values for all props targeting domain https://sikar.com.et

### Structured Data (JSON-LD)
- SEO component injects dynamic `<script type="application/ld+json">` tags
- Default Schema includes:
  - `Person` schema for Sikar Yosef
  - `WebSite` schema for the portfolio
  - Includes education (Jimma University), skills, and technical expertise
- Custom schema support for specific pages (e.g., CreativeWork for projects)

## Page & Route Implementation

### Route Structure
- `/` - Home page with SEO component
- `/projects` - Projects listing page with SEO component
- `/about` - About page with enhanced Person schema
- `/projects/:id` - Dynamic project detail pages with CreativeWork schema

### SEO Integration
- Key page components include custom `<SEO />` tags
- Dynamic routes parse project metadata and inject:
  - Specific titles and descriptions
  - Dynamic OpenGraph images
  - `CreativeWork` schemas for projects
  - Proper canonical URLs

## Build Configuration

### Build Optimization
- Configured in `vite.config.ts` for better SEO performance
- Code splitting with manual chunks for vendor and router
- Chunk size warning limit set to 1000KB
- Optimized for better loading performance

### Build Process
- Run `npm run build` to create production build
- Automatically runs sitemap generation after build
- Generates sitemap.xml with all routes including dynamic project pages
- Copies robots.txt to dist directory
- Builds optimized assets with proper SEO meta tags

## Maintenance

### Adding New Projects
1. Add project to `src/data/portfolio.ts`
2. Update project count in `generate-sitemap.js` if needed
3. Sitemap will automatically include new project routes

### Adding New Routes
1. Create route file in `src/routes/`
2. Add SEO component with appropriate meta tags
3. Update route tree: regenerate or manually update `src/routeTree.gen.ts`
4. Add route to sitemap generation in `generate-sitemap.js`

### Schema Updates
- Modify default schemas in `src/components/SEO.tsx`
- Add custom schemas in page components via SEO component props
- Validate schemas using Google's Structured Data Testing Tool

## Verification

### Build Verification
```bash
npm run build
```

### Check Generated Files
- `dist/sitemap.xml` - Verify all routes are included
- `dist/robots.txt` - Verify sitemap reference
- `dist/index.html` - Verify static meta tags

### SEO Testing
- Use Google Rich Results Test for structured data
- Use Facebook Sharing Debugger for Open Graph tags
- Use Twitter Card Validator for Twitter cards
- Use Google Search Console for overall SEO health

## Dependencies
- `react-helmet-async` - Dynamic meta tag management
- Custom sitemap generation script (no external plugin needed)
- `@tanstack/react-router` - Routing with head management support

## Notes
- TanStack Router's built-in head management is available but react-helmet-async provides more flexibility
- Custom sitemap generation script is used instead of vite-plugin-sitemap for better control
- For better crawler support, consider implementing server-side rendering or static site generation in the future
- The current implementation focuses on client-side SEO optimization with proper meta tags and structured data