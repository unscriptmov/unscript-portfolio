import type { Metadata } from "next";
import SmoothScroll from "./SmoothScroll";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unscriptedream ┃ 2D Animator",
  description: "2D Animator",
  icons: {
    icon: "/images/favicon.ico",
  },
  verification: {
    google: "TU_CODIGO_DE_SEARCH_CONSOLE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
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
        {children}
      </body>
    </html>
  );
}