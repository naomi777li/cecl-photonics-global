import { SiteHome } from "@/components/site-home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Emitters, VCSEL Chips & Optical Modules | CECL Photonics",
  description: "Source LED and VCSEL emitters, chips and optical modules, or develop custom light engines through a model-specific B2B engineering workflow.",
  alternates: { canonical: "/", languages: { en: "/", "zh-CN": "/zh", "x-default": "/" } }
};

export default function Home() {
  return <SiteHome lang="en" />;
}
