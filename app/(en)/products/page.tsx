import type { Metadata } from "next";
import { ProductIndex } from "@/components/product-pages";

export const metadata: Metadata = {
  title: "LED & VCSEL Chips, Optical Sensor and Communication Modules | CECL",
  description: "Browse LED, infrared, VCSEL and UV-C chips, optical sensing front ends and communication link subassemblies for OEM programs. Match product families to your application brief.",
  alternates: { canonical: "/products", languages: { en: "/products", "zh-CN": "/zh/products", "x-default": "/products" } }
};

export default function ProductsPage() { return <ProductIndex lang="en" />; }
