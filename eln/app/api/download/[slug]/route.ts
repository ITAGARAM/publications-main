import { client } from "@/lib/sanity";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const publication = decodeURIComponent(params.slug);

    const data = await client.fetch(
      `*[_type == "publication" && jotformOptionText == $publication][0]{
        "pdfUrl": pdfFile.asset->url,
        "fileName": pdfFile.asset->originalFilename
      }`,
      { publication }
    );

    if (!data?.pdfUrl) {
      return NextResponse.json({ error: "PDF not found" }, { status: 404 });
    }

    const response = await fetch(data.pdfUrl);
    const blob = await response.blob();

    return new NextResponse(blob, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${data.fileName}"`,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Download failed" }, { status: 500 });
  }
}