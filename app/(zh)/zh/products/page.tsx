import type { Metadata } from "next";
import { ProductIndex } from "@/components/product-pages";

export const metadata: Metadata = {
  title: "LED、VCSEL 芯片、光学传感器与光通信模块｜中能芯光",
  description: "浏览 LED、红外、VCSEL 芯片、光学传感器模组、UV-C 发光器件与光通信模块。面向 OEM 项目，提交应用、链路类型、波长、接口与目标市场，供工程评审。",
  alternates: { canonical: "/zh/products", languages: { en: "/products", "zh-CN": "/zh/products", "x-default": "/products" } }
};

export default function ZhProductsPage() { return <ProductIndex lang="zh" />; }
