import { redirect } from "next/navigation";

export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  redirect(
    `https://www.agaramtech.com/resources/publications/${params.slug}/`
  );
}
