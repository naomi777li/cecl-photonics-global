import type { Metadata } from "next";
import { ProductIndex } from "@/components/product-pages";

export const metadata: Metadata = {
  title: "LED、VCSEL 芯片及光学传感器、光通信模块｜中能芯光",
  description: "浏览 LED、红外、VCSEL 与 UV-C 芯片，以及光学传感前端、光通信链路子组件；面向 OEM 项目，按应用评审具体型号与参数。",
  alternates: { canonical: "/zh/products", languages: { en: "/products", "zh-CN": "/zh/products", "x-default": "/products" } }
};

export default function ZhProductsPage() { return <ProductIndex lang="zh" />; }
