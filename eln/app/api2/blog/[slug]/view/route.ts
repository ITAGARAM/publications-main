import { client } from "@/lib/sanity";

export async function POST(request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;

  try {
    // Step 1: Find the document ID using slug
    const query = `*[_type == "blog" && slug.current == $slug][0]{ _id, viewCount }`;
    const blog = await client.fetch(query, { slug });

    if (!blog?._id) {
      return new Response(
        JSON.stringify({ message: `No blog found for slug: ${slug}` }),
        { status: 404 }
      );
    }

    // Step 2: Increment view count
    const updated = await client
      .patch(blog._id)
      .setIfMissing({ viewCount: 0 })
      .inc({ viewCount: 1 })
      .commit({ returnDocuments: true });

    // Step 3: Return updated count
    return new Response(
      JSON.stringify({ viewCount: updated.viewCount ?? blog.viewCount + 1 }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error updating view count:", error);
    return new Response(
      JSON.stringify({ message: "Failed to update view count" }),
      { status: 500 }
    );
  }
}
