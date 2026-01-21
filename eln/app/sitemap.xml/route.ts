import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET() {
  const baseUrl = "https://publications.agaramtech.com";

 const posts = await client.fetch(`
  *[_type == "blog" && defined(slug.current)]{
    "slug": slug.current,
    publishedAt
  }
`);


  const urls = posts
    .map(
      (post: any) => `
        <url>
          <loc>${baseUrl}/${post.slug}</loc>
          <lastmod>${post.publishedAt}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
