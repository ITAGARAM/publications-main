// app/api/blogs/[slug]/view/route.js
import { client } from "@/lib/sanity";

export async function POST(req, { params }) {
  const { slug } = params;

  try {
    const data = await client.patch(slug).inc({ viewCount: 1 }).commit();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ message: "Failed to increment view count" }), { status: 500 });
  }
}
