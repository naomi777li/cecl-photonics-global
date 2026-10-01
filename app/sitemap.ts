import type { MetadataRoute } from "next";
import { insights } from "@/lib/insights";
import { commercialPages } from "@/lib/growth-model";
import { productFamilies } from "@/lib/product-catalog";
import { siteOrigin } from "@/lib/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = siteOrigin;
  const lastModified = new Date("2026-09-29");
  const localized = (path: string) => ({
    en: `${origin}${path}`,
    "zh-CN": `${origin}/zh${path === "/" ? "" : path}`,
    "x-default": `${origin}${path}`,
  });
  return [
    { url: `${origin}/`, lastModified, changeFrequency: "monthly", priority: 1, alternates: { languages: localized("/") } },
    { url: `${origin}/zh`, lastModified, changeFrequency: "monthly", priority: .9, alternates: { languages: localized("/") } },
    { url: `${origin}/products`, lastModified, changeFrequency: "monthly", priority: .95, alternates: { languages: localized("/products") } },
    { url: `${origin}/zh/products`, lastModified, changeFrequency: "monthly", priority: .9, alternates: { languages: localized("/products") } },
    { url: `${origin}/privacy`, lastModified, changeFrequency: "yearly", priority: .3, alternates: { languages: localized("/privacy") } },
    { url: `${origin}/zh/privacy`, lastModified, changeFrequency: "yearly", priority: .3, alternates: { languages: localized("/privacy") } },
    ...productFamilies.flatMap(({ slug }) => [
      { url: `${origin}/products/${slug}`, lastModified, changeFrequency: "monthly" as const, priority: .88, alternates: { languages: localized(`/products/${slug}`) } },
      { url: `${origin}/zh/products/${slug}`, lastModified, changeFrequency: "monthly" as const, priority: .82, alternates: { languages: localized(`/products/${slug}`) } },
    ]),
    ...commercialPages.flatMap(({ slug }) => [
      { url: `${origin}/solutions/${slug}`, lastModified, changeFrequency: "monthly" as const, priority: .9, alternates: { languages: localized(`/solutions/${slug}`) } },
      { url: `${origin}/zh/solutions/${slug}`, lastModified, changeFrequency: "monthly" as const, priority: .85, alternates: { languages: localized(`/solutions/${slug}`) } },
    ]),
    ...insights.flatMap(({ slug }) => [
      { url: `${origin}/insights/${slug}`, lastModified, changeFrequency: "monthly" as const, priority: .75, alternates: { languages: localized(`/insights/${slug}`) } },
      { url: `${origin}/zh/insights/${slug}`, lastModified, changeFrequency: "monthly" as const, priority: .7, alternates: { languages: localized(`/insights/${slug}`) } }
    ])
  ];
}
