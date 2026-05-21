import { redirect } from "next/navigation";

export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  redirect(
    `https://www.agaramtech.com/blog/${params.slug}/`
  );
}