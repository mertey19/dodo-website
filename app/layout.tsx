import { SiteShell } from "@/components/layout/SiteShell";
import { SiteAnalytics } from "@/components/common/SiteAnalytics";
import { getLocalBusinessSchema, getSiteUrl, getWebsiteSchema, siteDescription, siteKeywords } from "@/lib/seo";
import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import type { ReactNode } from "react";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host?.includes("localhost") ? "http" : "https");
  const metadataBase = host ? new URL(`${protocol}://${host}`) : getSiteUrl();
  const socialImage = new URL("/og.jpg", metadataBase).toString();
  const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;

  return {
    metadataBase,
    title: { default: "Akdeniz Kasabı | Toroslar, Mersin", template: "%s | Akdeniz Kasabı" },
    description: siteDescription,
    keywords: siteKeywords,
    applicationName: "Akdeniz Kasabı",
    authors: [{ name: "Akdeniz Kasabı" }],
    alternates: { canonical: "/" },
    manifest: "/manifest.webmanifest",
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
      shortcut: ["/favicon.svg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    verification: googleVerification ? { google: googleVerification } : undefined,
    openGraph: {
      type: "website",
      locale: "tr_TR",
      siteName: "Akdeniz Kasabı",
      title: "Akdeniz Kasabı | Toroslar, Mersin",
      description: siteDescription,
      url: "/",
      images: [{ url: socialImage, width: 1536, height: 1024, alt: "Toroslar Mersin Akdeniz Kasabı" }],
    },
    twitter: { card: "summary_large_image", title: "Akdeniz Kasabı", description: siteDescription, images: [socialImage] },
    formatDetection: { telephone: true, address: true, email: false },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4d0e19",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const baseUrl = getSiteUrl();
  const businessSchema = getLocalBusinessSchema(baseUrl);
  const websiteSchema = getWebsiteSchema(baseUrl);
  return (
    <html lang="tr">
      <body>
        <SiteShell>{children}</SiteShell>
        <script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c") }}
        />
        <script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c") }}
        />
        <SiteAnalytics />
      </body>
    </html>
  );
}
