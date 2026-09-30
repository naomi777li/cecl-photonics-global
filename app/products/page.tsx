import type { Metadata } from "next";
import { ProductIndex } from "@/components/product-pages";

export const metadata: Metadata = {
  title: "LED, Infrared & VCSEL Products | CECL Photonics",
  description: "Browse CECL LED and VCSEL chips, infrared emitters, optical modules and custom medical-beauty light engines.",
  alternates: { canonical: "/products", languages: { en: "/products", "zh-CN": "/zh/products", "x-default": "/products" } }
};

export default function ProductsPage() { return <ProductIndex lang="en" />; }
