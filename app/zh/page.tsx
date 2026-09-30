import { SiteHome } from "@/components/site-home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "中能芯光｜光电芯片、光学引擎与医疗美容 OEM/ODM",
  description: "面向全球 B2B 客户提供 LED、VCSEL 芯片、光学模块与定制光学引擎，并以型号资料为基础推进医疗美容设备 OEM/ODM 项目。",
  alternates: { canonical: "/zh", languages: { en: "/", "zh-CN": "/zh", "x-default": "/" } },
  openGraph: { locale: "zh_CN" }
};

export default function ChineseHome() {
  return <SiteHome lang="zh" />;
}
