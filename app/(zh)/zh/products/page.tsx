import type { Metadata } from "next";
import { ProductIndex } from "@/components/product-pages";

export const metadata: Metadata = {
  title: "LED、VCSEL、UV-C 芯片与光学模块｜中能芯光",
  description: "选购可见光、红外、VCSEL 与 UV-C 芯片，或了解面向机器人、汽车、无人机和海事设备的光学模块产品方向；具体型号与参数按项目核对。",
  alternates: { canonical: "/zh/products", languages: { en: "/products", "zh-CN": "/zh/products", "x-default": "/products" } }
};

export default function ZhProductsPage() { return <ProductIndex lang="zh" />; }
