import type { Metadata } from "next";
import { ProductIndex } from "@/components/product-pages";

export const metadata: Metadata = {
  title: "LED, VCSEL & UV-C Chips, Optical Modules | CECL",
  description: "Source LED, infrared, VCSEL and UV-C chips, or explore optical modules for robotics, automotive, UAV and marine OEM programs. Match a product family to your brief.",
  alternates: { canonical: "/products", languages: { en: "/products", "zh-CN": "/zh/products", "x-default": "/products" } }
};

export default function ProductsPage() { return <ProductIndex lang="en" />; }
