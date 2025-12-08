/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://logilabeln.com/', // Replace with your website URL
    generateRobotsTxt: true, // Generate robots.txt along with the sitemap
    sitemapSize: 5000, // Max entries per sitemap file
    changefreq: 'daily', // Optional: How frequently your pages change
    priority: 0.7, // Optional: Default priority for all pages
  };
  