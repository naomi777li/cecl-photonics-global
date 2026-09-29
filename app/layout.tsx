import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CECL Photonics | Semiconductors, Light Engines & OEM/ODM",
  description: "Photonic semiconductors, optical modules and medical beauty OEM/ODM solutions for global B2B partners.",
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
