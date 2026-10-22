import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product-pages";
import { getProductFamily, productFamilies } from "@/lib/product-catalog";

export function generateStaticParams() { return productFamilies.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const product = getProductFamily(slug); if (!product) return {};
  const title = slug === "vcsel-chips"
    ? "VCSEL 芯片选型｜808 / 850 / 940 nm 传感应用｜中能芯光"
    : slug === "vcsel-modules"
      ? "定制 VCSEL 光学模块｜ToF、结构光与传感照明｜中能芯光"
    : slug === "led-arrays-cob-engines"
      ? "定制 LED 阵列与 COB 光引擎｜中能芯光"
    : slug === "uvc-led-chips-and-source-modules"
      ? "UV-C LED 芯片与杀菌光源模块｜中能芯光"
    : slug === "optical-sensor-modules"
      ? "光学传感器模块与感知前端 OEM｜中能芯光"
    : slug === "optical-communication-modules"
      ? "光通信模块与光链路子组件｜中能芯光"
      : `${product.name.zh}｜中能芯光`;
  const description = slug === "vcsel-chips"
    ? "查看用于接近感应、扫地机器人避障、液位及工业传感的目录 VCSEL 系列。提交波长、驱动条件、光束与封装需求，申请型号评审。"
    : slug === "vcsel-modules"
      ? "面向 3D ToF 泛光照明、结构光投射与车内感知，按项目评审 VCSEL 光源、光学、驱动和设备接口。具体光学与电气参数在项目评审后确认。"
    : slug === "led-arrays-cob-engines"
      ? "围绕光谱与光源布局、照射覆盖、电路板、散热及设备接口评审 LED 阵列与 COB 光引擎项目。提交应用简报，沟通样品和项目方案。"
    : slug === "uvc-led-chips-and-source-modules"
      ? "了解面向空气处理、封闭式表面照射及水处理设备的 UV-C LED 芯片与光源模块开发。波长、照射剂量、安全及整机效果需按项目评审和验证。"
    : slug === "optical-sensor-modules"
      ? "了解面向接近、反射式、ToF、液位及设备状态检测的光学传感模块与感知前端。接收器、标定与整机性能需经项目评审验证。"
    : slug === "optical-communication-modules"
      ? "面向嵌入式、短距光纤及可见光通信，评审光发射、接收与链路子组件。速率、协议、光纤、外形与互通性按具体设计确认。"
      : product.summary.zh;
  return { title, description, alternates: { canonical: `/zh/products/${slug}`, languages: { en: `/products/${slug}`, "zh-CN": `/zh/products/${slug}`, "x-default": `/products/${slug}` } }, openGraph: { title, description, url: `/zh/products/${slug}`, type: "website" } };
}

export default async function ZhProductPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const product = getProductFamily(slug); if (!product) notFound(); return <ProductDetail product={product} lang="zh" />; }
