import type { Metadata } from "next";
import { ProductIndex } from "@/components/product-pages";

export const metadata: Metadata = {
  title: "LED、红外与 VCSEL 产品中心｜中能芯光",
  description: "浏览中能芯光 LED、红外、VCSEL 芯片、光学模块与医疗美容光学引擎。",
  alternates: { canonical: "/zh/products", languages: { en: "/products", "zh-CN": "/zh/products", "x-default": "/products" } }
};

export default function ZhProductsPage() { return <ProductIndex lang="zh" />; }
