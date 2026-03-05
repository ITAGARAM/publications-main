// import { NextResponse } from 'next/server';
// import fs from 'fs';
// import path from 'path';

// export async function GET() {
//    const filePath = path.join(process.cwd(), 'assets/pdf/eln-brochure.pdf');
//   const filePath = path.resolve('/assets/pdf/eln-brochure.pdf');

//   console.log('File paths:', filePath);

//   if (!fs.existsSync(filePath)) {
//     return NextResponse.json({ error: 'File not found' }, { status: 404 });
//   }

//   const file = fs.readFileSync(filePath);
//   return new NextResponse(file, {
//     headers: {
//       'Content-Type': 'application/pdf',
//       'Content-Disposition': 'attachment; filename="eln-brochure.pdf"',
//     },
//   });
// }



// pages/api/download.js



// import { NextResponse } from 'next/server';
// import fs from 'fs';
// import path from 'path';

// export async function GET() {
//   // Set the path to the PDF file
//   const filePath = path.resolve('/assets/pdf/eln-brochure.pdf');

//   // Check if the file exists
//   if (!fs.existsSync(filePath)) {
//     return NextResponse.json({ error: 'File not found' }, { status: 404 });
//   }

//   // Read the file
//   const fileBuffer = fs.readFileSync(filePath);

//   // Return the response with headers to download
//   return new NextResponse(fileBuffer, {
//     headers: {
//       'Content-Type': 'application/pdf',
//       'Content-Disposition': 'attachment; filename="eln-brochure.pdf"',
//     },
//   });
// }



// import { NextResponse } from 'next/server';
// import fs from 'fs';
// import path from 'path';

// export async function GET() {
//   const filePath = path.resolve('public/assets/pdf/eln-brochure.pdf');

//   // Check if the file exists
//   if (!fs.existsSync(filePath)) {
//     return NextResponse.json({ error: 'File not found' }, { status: 404 });
//   }

//   // Create a readable stream for the file
//   const fileStream = fs.createReadStream(filePath);

//   // Set response headers to force download
//   return new NextResponse(fileStream, {
//     headers: {
//       'Content-Type': 'application/pdf',
//       'Content-Disposition': 'attachment; filename="eln-brochure.pdf"',
//     },
//   });
// }



import fs from 'fs';
import path from 'path';

export async function GET() {
  // Set the path to the PDF file
  const filePath = path.resolve('public/assets/pdf/eln-brochure.pdf');
  console.log('Resolved file path:', filePath);
  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    return new Response(JSON.stringify({ error: 'File not found' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // Read the file as a Buffer
  const fileBuffer = fs.readFileSync(filePath);

  // Return the response with download headers
  return new Response(fileBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="eln-brochure.pdf"',
      'Cache-Control': 'no-store',
    },
  });
}
