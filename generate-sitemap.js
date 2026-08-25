// Generate sitemap.xml and copy robots.txt
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set project count manually based on the actual portfolio data
// There are 6 projects in the portfolio.ts file
const projectCount = 6;
console.log(`Using fixed project count: ${projectCount}`);

// Generate routes
const routes = [
  '/',
  '/projects',
  '/about',
];

// Add project detail routes
for (let i = 0; i < projectCount; i++) {
  routes.push(`/projects/${i}`);
}

console.log('Generated routes for sitemap:', routes);

// Generate sitemap.xml
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>https://sikar.com.et${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`).join('\n')}
</urlset>`;

// Ensure dist directory exists
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Write sitemap.xml
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapContent);
console.log('Generated sitemap.xml');

// Copy robots.txt from public to dist
const robotsSource = path.join(__dirname, 'public/robots.txt');
const robotsDest = path.join(distDir, 'robots.txt');
if (fs.existsSync(robotsSource)) {
  fs.copyFileSync(robotsSource, robotsDest);
  console.log('Copied robots.txt to dist');
} else {
  console.warn('robots.txt not found in public directory');
}