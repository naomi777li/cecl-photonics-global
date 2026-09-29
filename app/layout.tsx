import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cecl-photonics-global.georgia52201.chatgpt.site"),
  title: { default: "CECL Photonics | Semiconductors, Light Engines & OEM/ODM", template: "%s" },
  description: "Photonic semiconductors, optical modules and medical beauty OEM/ODM solutions for global B2B partners.",
  keywords: ["photonic semiconductors", "LED chip manufacturer", "VCSEL chip", "medical beauty OEM", "LED light therapy device ODM", "optical light engine"],
  authors: [{ name: "CECL Photonics" }],
  creator: "CECL Photonics",
  publisher: "CECL Photonics",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "website", siteName: "CECL Photonics", title: "CECL Photonics | From Chip to Application-Ready Light", description: "Photonic semiconductors, optical modules and medical beauty OEM/ODM solutions for global B2B partners.", images: [{ url: "/hero-photonics.png", width: 1536, height: 1024, alt: "CECL photonics platform" }] },
  twitter: { card: "summary_large_image", title: "CECL Photonics | From Chip to Application-Ready Light", description: "Photonic semiconductors, optical modules and medical beauty OEM/ODM solutions for global B2B partners.", images: ["/hero-photonics.png"] },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
