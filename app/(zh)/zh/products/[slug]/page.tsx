import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product-pages";
import { getProductFamily, productFamilies } from "@/lib/product-catalog";

export function generateStaticParams() { return productFamilies.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const product = getProductFamily(slug); if (!product) return {};
  if (slug === "vcsel-chips") {
    const title = "VCSEL 芯片供应与选型｜中能芯光";
    const description = "面向接近、液位与工业传感项目，查看 850 nm 与 940 nm VCSEL 芯片系列及已公开的光功率、驱动和光束数据。提交应用与目标工况，申请目录或工程评估。";
    return { title, description, alternates: { canonical: `/zh/products/${slug}`, languages: { en: `/products/${slug}`, "zh-CN": `/zh/products/${slug}`, "x-default": `/products/${slug}` } }, openGraph: { title, description, url: `/zh/products/${slug}`, type: "website" } };
  }
  return { title: `${product.name.zh}｜中能芯光`, description: product.summary.zh, alternates: { canonical: `/zh/products/${slug}`, languages: { en: `/products/${slug}`, "zh-CN": `/zh/products/${slug}`, "x-default": `/products/${slug}` } }, openGraph: { title: product.name.zh, description: product.summary.zh, url: `/zh/products/${slug}`, type: "website" } };
}

export default async function ZhProductPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const product = getProductFamily(slug); if (!product) notFound(); return <ProductDetail product={product} lang="zh" />; }
