import type { Metadata } from "next";
import { ProductIndex } from "@/components/product-pages";

export const metadata: Metadata = {
  title: "LED & VCSEL Chips, Optical Sensors, Communication Modules | CECL Photonics",
  description: "Explore LED, infrared and VCSEL chips, optical sensor modules, UV-C emitters and optical communication modules for OEM programs. Define the application, link type, wavelength, interfaces and target market for engineering review.",
  alternates: { canonical: "/products", languages: { en: "/products", "zh-CN": "/zh/products", "x-default": "/products" } }
};

export default function ProductsPage() { return <ProductIndex lang="en" />; }
