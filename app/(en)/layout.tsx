import type { Metadata } from "next";
import { Analytics } from "@/components/analytics";
import { siteOrigin } from "@/lib/site-url";
import "../globals.css";

const publicBase = "";

export const metadata: Metadata = {
  metadataBase: new URL(`${siteOrigin}${publicBase}`),
  title: { default: "CECL Photonics | Semiconductors, Light Engines & OEM/ODM", template: "%s" },
  description: "Photonic semiconductors, optical modules and medical beauty OEM/ODM solutions for global B2B partners.",
  keywords: ["photonic semiconductors", "LED chip manufacturer", "VCSEL chip", "medical beauty OEM", "LED light therapy device ODM", "optical light engine"],
  authors: [{ name: "CECL Photonics" }],
  creator: "CECL Photonics",
  publisher: "CECL Photonics",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "website", siteName: "CECL Photonics", title: "CECL Photonics | From Chip to Application-Ready Light", description: "Photonic semiconductors, optical modules and medical beauty OEM/ODM solutions for global B2B partners.", images: [{ url: `${publicBase}/hero-photonics.webp`, width: 1800, height: 750, alt: "CECL photonics platform" }] },
  twitter: { card: "summary_large_image", title: "CECL Photonics | From Chip to Application-Ready Light", description: "Photonic semiconductors, optical modules and medical beauty OEM/ODM solutions for global B2B partners.", images: [`${publicBase}/hero-photonics.webp`] },
  icons: {
    icon: `${publicBase}/brand/cecl-favicon.png`,
    shortcut: `${publicBase}/brand/cecl-favicon.png`,
    apple: `${publicBase}/brand/cecl-icon.png`,
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased"><Analytics />{children}</body>
    </html>
  );
}
