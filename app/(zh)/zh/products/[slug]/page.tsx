import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product-pages";
import { getProductFamily, productFamilies } from "@/lib/product-catalog";

export function generateStaticParams() { return productFamilies.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const product = getProductFamily(slug); if (!product) return {};
  const title = slug === "vcsel-chips" ? "VCSEL 芯片选型｜808 / 850 / 940 nm 传感应用｜中能芯光" : `${product.name.zh}｜中能芯光`;
  const description = slug === "vcsel-chips"
    ? "查看用于接近感应、扫地机器人避障、液位及工业传感的目录 VCSEL 系列。提交波长、驱动条件、光束与封装需求，申请型号评审。"
    : product.summary.zh;
  return { title, description, alternates: { canonical: `/zh/products/${slug}`, languages: { en: `/products/${slug}`, "zh-CN": `/zh/products/${slug}`, "x-default": `/products/${slug}` } }, openGraph: { title, description, url: `/zh/products/${slug}`, type: "website" } };
}

export default async function ZhProductPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const product = getProductFamily(slug); if (!product) notFound(); return <ProductDetail product={product} lang="zh" />; }
