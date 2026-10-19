import type { Metadata } from "next";
import { ContactPage } from "@/components/contact-page";

export const metadata: Metadata = {
  title: "Contact CECL Photonics | Chip, VCSEL Module & OEM/ODM Inquiry",
  description: "Contact CECL Photonics for LED and VCSEL chip sourcing, optical module development, or medical beauty OEM/ODM project review.",
  alternates: { canonical: "/contact", languages: { en: "/contact", "zh-CN": "/zh/contact", "x-default": "/contact" } },
};

export default function ContactRoute() {
  return <ContactPage lang="en" />;
}
