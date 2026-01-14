


import { client } from "@/lib/sanity";
import BlogDetailClient from "./BlogDetailClient";

const query = `*[_type == "blog" && slug.current == $slug][0]{
  title,
  summary,
  seoTitle,
  seoDescription,
  slug,
  "mainImage": mainImage.asset->url
}`;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blog = await client.fetch(query, { slug: params.slug });

  if (!blog) return {};

  return {
    title: blog.seoTitle || blog.title,
    description: blog.seoDescription || blog.summary,

    openGraph: {
      type: "article",
      title: blog.seoTitle || blog.title,
      description: blog.seoDescription || blog.summary,
      url: `https://publications.agaramtech.com/blog/${params.slug}`,
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
      title: blog.seoTitle || blog.title,
      description: blog.seoDescription || blog.summary,
      images: [blog.mainImage],
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  return <BlogDetailClient params={params} />;
}


































