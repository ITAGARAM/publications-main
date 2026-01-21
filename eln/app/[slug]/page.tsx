import { client } from "@/lib/sanity";
import BlogDetailClient from "./BlogDetailClient";
import { Metadata } from "next";

const query = `*[_type == "blog" && slug.current == $slug][0]{
  title,
  summary,
  seoTitle,
  seoDescription,
  slug,
  "mainImage": mainImage.asset->url
}`;

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {

  const blog = await client.fetch(query, { slug: params.slug });

  if (!blog) return {};

  const title = blog.seoTitle || blog.title;
  const description = blog.seoDescription || blog.summary;
  const url = `https://publications.agaramtech.com/${params.slug}`;

  return {
    title,
    description,

    // ✅ CANONICAL (MOST IMPORTANT)
    alternates: {
      canonical: url,
    },

    openGraph: {
      type: "article",
      title,
      description,
      url,
      images: [
        {
          url: blog.mainImage,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [blog.mainImage],
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  return <BlogDetailClient params={params} />;
}
