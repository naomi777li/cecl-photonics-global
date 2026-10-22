import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product-pages";
import { getProductFamily, productFamilies } from "@/lib/product-catalog";

export function generateStaticParams() { return productFamilies.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const product = getProductFamily(slug); if (!product) return {};
  const title = slug === "vcsel-chips"
    ? "VCSEL Chips for 808, 850 & 940 nm Sensing | CECL"
    : slug === "vcsel-modules"
      ? "Custom VCSEL Modules for 3D Sensing | CECL Photonics"
    : slug === "led-arrays-cob-engines"
      ? "Custom LED Arrays & COB Light Engines | CECL Photonics"
    : slug === "uvc-led-chips-and-source-modules"
      ? "UV-C LED Chips & Germicidal Source Modules | CECL Photonics"
      : `${product.name.en} | CECL Photonics`;
  const description = slug === "vcsel-chips"
    ? "Compare catalog-listed VCSEL chip families for proximity, robot-vacuum obstacle, liquid and industrial sensing. Share wavelength, drive conditions, beam and package needs for OEM review."
    : slug === "vcsel-modules"
      ? "Scope project-defined VCSEL illuminators for 3D time-of-flight, structured-light projection and in-cabin sensing. Review field of illumination, optics, drive and integration needs with CECL Photonics."
    : slug === "led-arrays-cob-engines"
      ? "Scope emitter layout, spectrum, optical coverage, board and thermal interfaces for application-specific LED arrays and COB light engines. Share your project brief for engineering review."
    : slug === "uvc-led-chips-and-source-modules"
      ? "Explore UV-C LED chip and source-module development for air, enclosed-surface and water-treatment equipment. Wavelength, dose, safety and system efficacy require project-specific review and validation."
      : product.summary.en;
  return { title, description, alternates: { canonical: `/products/${slug}`, languages: { en: `/products/${slug}`, "zh-CN": `/zh/products/${slug}`, "x-default": `/products/${slug}` } }, openGraph: { title, description, url: `/products/${slug}`, type: "website" } };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const product = getProductFamily(slug); if (!product) notFound(); return <ProductDetail product={product} lang="en" />; }
