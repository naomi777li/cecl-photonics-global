import type { MetadataRoute } from "next";
import { insights } from "@/lib/insights";
import { commercialPages } from "@/lib/growth-model";
import { productFamilies } from "@/lib/product-catalog";
import { siteOrigin } from "@/lib/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = siteOrigin;
  const lastModified = new Date("2026-09-29");
  return [
    { url: `${origin}/`, lastModified, changeFrequency: "monthly", priority: 1, alternates: { languages: { en: `${origin}/`, "zh-CN": `${origin}/zh`, "x-default": `${origin}/` } } },
    { url: `${origin}/zh/`, lastModified, changeFrequency: "monthly", priority: .9, alternates: { languages: { en: `${origin}/`, "zh-CN": `${origin}/zh/`, "x-default": `${origin}/` } } },
    { url: `${origin}/products/`, lastModified, changeFrequency: "monthly", priority: .95, alternates: { languages: { en: `${origin}/products/`, "zh-CN": `${origin}/zh/products/`, "x-default": `${origin}/products/` } } },
    { url: `${origin}/zh/products/`, lastModified, changeFrequency: "monthly", priority: .9, alternates: { languages: { en: `${origin}/products/`, "zh-CN": `${origin}/zh/products/`, "x-default": `${origin}/products/` } } },
    { url: `${origin}/privacy/`, lastModified, changeFrequency: "yearly", priority: .3, alternates: { languages: { en: `${origin}/privacy/`, "zh-CN": `${origin}/zh/privacy/`, "x-default": `${origin}/privacy/` } } },
    { url: `${origin}/zh/privacy/`, lastModified, changeFrequency: "yearly", priority: .3, alternates: { languages: { en: `${origin}/privacy/`, "zh-CN": `${origin}/zh/privacy/`, "x-default": `${origin}/privacy/` } } },
    ...productFamilies.flatMap(({ slug }) => [
      { url: `${origin}/products/${slug}/`, lastModified, changeFrequency: "monthly" as const, priority: .88, alternates: { languages: { en: `${origin}/products/${slug}/`, "zh-CN": `${origin}/zh/products/${slug}/`, "x-default": `${origin}/products/${slug}/` } } },
      { url: `${origin}/zh/products/${slug}/`, lastModified, changeFrequency: "monthly" as const, priority: .82, alternates: { languages: { en: `${origin}/products/${slug}/`, "zh-CN": `${origin}/zh/products/${slug}/`, "x-default": `${origin}/products/${slug}/` } } },
    ]),
    ...commercialPages.flatMap(({ slug }) => [
      { url: `${origin}/solutions/${slug}/`, lastModified, changeFrequency: "monthly" as const, priority: .9, alternates: { languages: { en: `${origin}/solutions/${slug}/`, "zh-CN": `${origin}/zh/solutions/${slug}/`, "x-default": `${origin}/solutions/${slug}/` } } },
      { url: `${origin}/zh/solutions/${slug}/`, lastModified, changeFrequency: "monthly" as const, priority: .85, alternates: { languages: { en: `${origin}/solutions/${slug}/`, "zh-CN": `${origin}/zh/solutions/${slug}/`, "x-default": `${origin}/solutions/${slug}/` } } },
    ]),
    ...insights.flatMap(({ slug }) => [
      { url: `${origin}/insights/${slug}/`, lastModified, changeFrequency: "monthly" as const, priority: .75, alternates: { languages: { en: `${origin}/insights/${slug}/`, "zh-CN": `${origin}/zh/insights/${slug}/`, "x-default": `${origin}/insights/${slug}/` } } },
      { url: `${origin}/zh/insights/${slug}/`, lastModified, changeFrequency: "monthly" as const, priority: .7, alternates: { languages: { en: `${origin}/insights/${slug}/`, "zh-CN": `${origin}/zh/insights/${slug}/`, "x-default": `${origin}/insights/${slug}/` } } }
    ])
  ];
}
