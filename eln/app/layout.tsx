import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "./resposive.css";
import "./blog.css";
import BootstrapClient from "@/components/boostrapclient";
import ClientLoader from "@/components/ClientLoader";

const inter = Inter({ subsets: ["latin"] });

// Local Font
const myFont1 = localFont({
  src: "../app/fonts/AtiplaND-Bold-iF66d5d41983f52.woff2",
  variable: "--font-myFont1",
  display: "swap",
});

/* =========================
   GLOBAL METADATA (SEO)
========================= */
export const metadata: Metadata = {
  title: "Home - Blogs Agaram Technologies | LIMS | SDMS | ELN",
  description: "",
  metadataBase: new URL("https://publications.agaramtech.com"),

  openGraph: {
    title: "Home - Blogs Agaram Technologies | LIMS | SDMS | ELN",
    description:"",
    url: "https://publications.agaramtech.com",
    siteName: "Agaram Technologies Blogs",
    images: [
      {
        url: "https://publications.agaramtech.com/assets/images/agaram-logo.png",
        width: 1200,
        height: 630,
        alt: "Agaram Technologies",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Home - Blogs Agaram Technologies | LIMS | SDMS | ELN",
    description:"",
    images: ["https://publications.agaramtech.com/assets/images/agaram-logo.png"],
  },

  icons: {
    icon: "/assets/images/favicon.png",
    apple: "/assets/images/favicon.png",
  },
};

/* =========================
   ROOT LAYOUT
========================= */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="google-site-verification"
          content="liTI5CfaXyDZVz0QM1rJdOhnsWHz0nR4KS9fAjRBlpQ"
        />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className={`${inter.className} ${myFont1.variable}`}>

        <ClientLoader>
        {children}
        </ClientLoader>

        {/* Bootstrap JS */}
        <BootstrapClient />
      </body>
    </html>
  );
}
