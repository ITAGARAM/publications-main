import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET() {

  const baseUrl = "https://publications.agaramtech.com";

  // Static pages
  const staticUrls = `
    <url>
      <loc>${baseUrl}</loc>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>${baseUrl}/publications</loc>
      <priority>0.9</priority>
    </url>
  `;

  // BLOG POSTS
  const blogs = await client.fetch(`
  *[_type == "blog" && defined(slug.current)]{
    "slug": slug.current,
    publishedAt
  }
  `);

const blogUrls = blogs.map((post:any) => `
  <url>
    <loc>${baseUrl}/${post.slug}</loc>
    ${post.publishedAt ? `<lastmod>${new Date(post.publishedAt).toISOString()}</lastmod>` : ""}
    <priority>0.8</priority>
  </url>
`).join("");

  // PUBLICATIONS
  const publications = await client.fetch(`
  *[_type == "publication" && defined(slug.current)]{
    "slug": slug.current,
    publishedAt
  }
  `);

const publicationUrls = publications.map((post:any) => `
  <url>
    <loc>${baseUrl}/publications/${post.slug}</loc>
    ${post.publishedAt ? `<lastmod>${new Date(post.publishedAt).toISOString()}</lastmod>` : ""}
    <priority>0.8</priority>
  </url>
`).join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  ${staticUrls}
  ${blogUrls}
  ${publicationUrls}

  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}