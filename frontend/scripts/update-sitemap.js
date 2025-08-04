const fs = require('fs');
const path = require('path');

// Path to BlogData.js and sitemap.xml
const blogDataPath = path.join(__dirname, '../src/styles/BlogData.js');
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
const DOMAIN = 'https://apporigotechnologies.co.in';

// Helper to extract blogData array from BlogData.js
function getBlogData() {
  const file = fs.readFileSync(blogDataPath, 'utf-8');
  // Naive extraction: eval is safe here because we control the file
  const exports = {};
  eval(file.replace('export const', 'exports.'));
  return exports.blogData || [];
}

// Helper to generate blog URLs XML
function generateBlogUrls(blogData) {
  return blogData.map(blog => `  <url>\n    <loc>${DOMAIN}/blog/${blog.id}</loc>\n    <priority>0.6</priority>\n  </url>`).join('\n');
}

// Main update function
function updateSitemap() {
  let sitemap;
  try {
    sitemap = fs.readFileSync(sitemapPath, 'utf-8');
  } catch (err) {
    console.error('Error reading sitemap.xml:', err);
    process.exit(1);
  }

  // Remove all existing blog URLs
  const blogUrlRegex = /  <url>\s*<loc>https:\/\/apporigotechnologies\.co\.in\/blog\/[\w-]+<\/loc>[\s\S]*?<\/url>\n?/g;
  sitemap = sitemap.replace(blogUrlRegex, '');

  // Insert new blog URLs before </urlset>
  const blogData = getBlogData();
  const blogUrlsXml = generateBlogUrls(blogData);
  sitemap = sitemap.replace(/<\/urlset>/, `${blogUrlsXml}\n</urlset>`);

  try {
    fs.writeFileSync(sitemapPath, sitemap, 'utf-8');
    console.log('sitemap.xml updated with blog URLs.');
  } catch (err) {
    console.error('Error writing sitemap.xml:', err);
    process.exit(1);
  }
}

updateSitemap(); 