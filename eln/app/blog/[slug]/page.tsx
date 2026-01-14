import { Metadata } from "next";
import { client } from "@/lib/sanity";
import BlogDetailClient from "./BlogDetailClient";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{
      title,
      summary,
      seoTitle,
      seoDescription
    }`,
    { slug: params.slug }
  );

  return {
    title: blog?.seoTitle || blog?.title,
    description: blog?.seoDescription || blog?.summary || "",
    openGraph: {
      title: blog?.seoTitle || blog?.title,
      description: blog?.seoDescription || blog?.summary || "",
      type: "article",
    },
  };
}

export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  return <BlogDetailClient params={params} />;
}
