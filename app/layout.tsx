import type { Metadata, Viewport } from "next";
import { Geist, Outfit } from "next/font/google";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.shortName,
  title: {
    default: "Bell & Cross | Enterprise Technology in Kenya",
    template: "%s | Bell & Cross",
  },
  description: site.description,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: site.shortName,
    title: "Bell & Cross | Connected enterprise technology",
    description: site.description,
    url: "/",
    locale: "en_KE",
    images: [{ url: "/opengraph-image", alt: "Fiber-optic glass and city lights" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bell & Cross | Connected enterprise technology",
    description: site.description,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f6fa" },
    { media: "(prefers-color-scheme: dark)", color: "#11141a" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      className={`${geist.variable} ${outfit.variable}`}
      lang="en-KE"
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
