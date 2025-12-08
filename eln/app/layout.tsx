import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import 'animate.css';
import BootstrapClient from "@/components/boostrapclient";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import "./resposive.css";
import "./blog.css";
import Script from "next/script";
import Navbar from "@/components/header";

const inter = Inter({ subsets: ["latin"] });  

// Local Font 1
const myFont1 = localFont({
  src: '../app/fonts/AtiplaND-Bold-iF66d5d41983f52.woff2',
  variable: '--font-myFont1',
  display: 'swap',
});



export const metadata: Metadata = {
  title: "Digital Solutions for Lab| Electronic Lab Notebook | Logilab ELN",
  description: "Accelerate your research with Logilab ELN. Record data, create SOPs, configure workflows, track inventory usage, meet GxP compliance requirements and more.",
  openGraph: {
    title: 'Digital Solutions for Lab| Electronic Lab Notebook | Logilab ELN',
    description: 'Accelerate your research with Logilab ELN. Record data, create SOPs, configure workflows, track inventory usage, meet GxP compliance requirements and more.',
    url: 'https://www.logilabeln.com', 
    images: [
      {
        url: 'https://www.logilabeln.com/assets/images/eln_logo.png',
        width: 1200,
        height: 630,
        alt: 'About Us Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Solutions for Lab| Electronic Lab Notebook | Logilab ELN',
    description: 'Accelerate your research with Logilab ELN. Record data, create SOPs, configure workflows, track inventory usage, meet GxP compliance requirements and more.',
    images: ['https://www.logilabeln.com/assets/images/eln_logo.png'], 
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/assets/images/fav.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="google-site-verification"
          content="liTI5CfaXyDZVz0QM1rJdOhnsWHz0nR4KS9fAjRBlpQ"
        />
        <meta
          name="description"
          content="Accelerate your research with Logilab ELN. Record data, create SOPs, configure workflows, track inventory usage, meet GxP compliance requirements and more."
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
  {/* Google analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-1KWSPZCD8F`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1KWSPZCD8F'); // Your GA4 Measurement ID
            `,
          }}
          />

      {/* Google Tag Manager */}
      <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5J9NZC87');`,
          }}
        />
        {/* End Google Tag Manager */}

      </head>
    
      <body className={`${inter.className} ${myFont1.variable}`}>
            {/* Google Tag Manager (noscript) */}
            <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5J9NZC87"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Hotjar Script */}
        <Script id="hotjar-init" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:5243722,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
        {/* Microsoft Clarity Tracking Script */}
        <Script
        id="clarity-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){
              c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
              t = l.createElement(r);
              t.async = 1;
              t.src = "https://www.clarity.ms/tag/" + i;
              y = l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t, y);
          })(window, document, "clarity", "script", "q80yde2ac8");`,
        }}
      />
        {/* Navbar */}
        {/* <Navbar /> */}
        {/* Main Content */}
        {children}
        {/* Bootstrap Client */}
        <BootstrapClient />       
      </body>
    </html>
  );
}
