import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product-pages";
import { getProductFamily, productFamilies } from "@/lib/product-catalog";

export function generateStaticParams() { return productFamilies.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const product = getProductFamily(slug); if (!product) return {};
  if (slug === "vcsel-chips") {
    const title = "VCSEL Chip Supplier for Sensing | CECL Photonics";
    const description = "Review 850 nm and 940 nm VCSEL chip families for proximity, liquid-level and industrial sensing. Compare published optical-output, drive and beam data, then request a catalog or engineering review for your application.";
    return { title, description, alternates: { canonical: `/products/${slug}`, languages: { en: `/products/${slug}`, "zh-CN": `/zh/products/${slug}`, "x-default": `/products/${slug}` } }, openGraph: { title, description, url: `/products/${slug}`, type: "website" } };
  }
  return { title: `${product.name.en} | CECL Photonics`, description: product.summary.en, alternates: { canonical: `/products/${slug}`, languages: { en: `/products/${slug}`, "zh-CN": `/zh/products/${slug}`, "x-default": `/products/${slug}` } }, openGraph: { title: product.name.en, description: product.summary.en, url: `/products/${slug}`, type: "website" } };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const product = getProductFamily(slug); if (!product) notFound(); return <ProductDetail product={product} lang="en" />; }
