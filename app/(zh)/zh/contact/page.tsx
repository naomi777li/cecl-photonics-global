import type { Metadata } from "next";
import { ContactPage } from "@/components/contact-page";

export const metadata: Metadata = {
  title: "联系中能芯光｜光电芯片、VCSEL 模块与 OEM/ODM 询盘",
  description: "联系中能芯光，咨询 LED、VCSEL 芯片采购、光学模块开发或医疗美容 OEM/ODM 项目评审。",
  alternates: { canonical: "/zh/contact", languages: { en: "/contact", "zh-CN": "/zh/contact", "x-default": "/contact" } },
};

export default function ChineseContactRoute() {
  return <ContactPage lang="zh" />;
}
