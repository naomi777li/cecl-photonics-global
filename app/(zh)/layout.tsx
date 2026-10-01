import type { Metadata } from "next";
import { Analytics } from "@/components/analytics";
import { siteOrigin } from "@/lib/site-url";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: { default: "中能芯光｜光电半导体、光学引擎与 OEM/ODM", template: "%s" },
  description: "面向全球 B2B 客户的 LED、VCSEL 光电半导体、光学模块及医疗美容设备 OEM/ODM 解决方案。",
  authors: [{ name: "CECL Photonics" }],
  creator: "CECL Photonics",
  publisher: "CECL Photonics",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: "/brand/cecl-favicon.png", shortcut: "/brand/cecl-favicon.png", apple: "/brand/cecl-icon.png" },
};

export default function ChineseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body className="antialiased"><Analytics />{children}</body></html>;
}
