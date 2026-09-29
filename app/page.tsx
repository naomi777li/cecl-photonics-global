import { SiteHome } from "@/components/site-home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CECL Photonics | Photonic Semiconductors & Medical Beauty OEM/ODM",
  description: "Source LED and VCSEL chips, optical modules and custom light engines, or develop medical beauty devices through a model-specific B2B OEM/ODM workflow.",
  alternates: { canonical: "/", languages: { en: "/", "zh-CN": "/zh" } }
};

export default function Home() {
  return <SiteHome lang="en" />;
}
