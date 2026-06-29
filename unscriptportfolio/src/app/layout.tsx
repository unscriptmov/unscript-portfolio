"use client";

import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import SmoothScroll from "./SmoothScroll";
import Script from "next/script";
import "./globals.css";

function HeaderGradient() {
  return (
    <div 
      className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-black/70 to-transparent z-40 pointer-events-none" 
      aria-hidden="true"
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showNavbar = pathname !== "/reel";

  return (
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V1MCPT6XT0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V1MCPT6XT0');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-black text-white">
        <SmoothScroll />
        
        {showNavbar && (
          <>
            <HeaderGradient />
            <Navbar />
          </>
        )}
        
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}