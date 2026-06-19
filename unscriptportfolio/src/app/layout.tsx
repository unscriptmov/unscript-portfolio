"use client";

import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import SmoothScroll from "./SmoothScroll";
import Script from "next/script";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showNavbar = pathname !== "/reel";

  return (
    <html lang="en" className="h-full antialiased">
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
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        {showNavbar && <Navbar />}
        {children}
      </body>
    </html>
  );
}