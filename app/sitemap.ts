import type { MetadataRoute } from "next";
import { insights } from "@/lib/insights";
import { commercialPages } from "@/lib/growth-model";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = process.env.GITHUB_PAGES === "true" ? "https://ceclphotonics.com" : "https://cecl-photonics-global.georgia52201.chatgpt.site";
  const lastModified = new Date("2026-09-29");
  return [
    { url: `${origin}/`, lastModified, changeFrequency: "monthly", priority: 1, alternates: { languages: { en: `${origin}/`, "zh-CN": `${origin}/zh` } } },
    { url: `${origin}/zh/`, lastModified, changeFrequency: "monthly", priority: .9, alternates: { languages: { en: `${origin}/`, "zh-CN": `${origin}/zh/` } } },
    ...commercialPages.flatMap(({ slug }) => [
      { url: `${origin}/solutions/${slug}/`, lastModified, changeFrequency: "monthly" as const, priority: .9, alternates: { languages: { en: `${origin}/solutions/${slug}/`, "zh-CN": `${origin}/zh/solutions/${slug}/`, "x-default": `${origin}/solutions/${slug}/` } } },
      { url: `${origin}/zh/solutions/${slug}/`, lastModified, changeFrequency: "monthly" as const, priority: .85, alternates: { languages: { en: `${origin}/solutions/${slug}/`, "zh-CN": `${origin}/zh/solutions/${slug}/`, "x-default": `${origin}/solutions/${slug}/` } } },
    ]),
    ...insights.flatMap(({ slug }) => [
      { url: `${origin}/insights/${slug}/`, lastModified, changeFrequency: "monthly" as const, priority: .75, alternates: { languages: { en: `${origin}/insights/${slug}/`, "zh-CN": `${origin}/zh/insights/${slug}/` } } },
      { url: `${origin}/zh/insights/${slug}/`, lastModified, changeFrequency: "monthly" as const, priority: .7, alternates: { languages: { en: `${origin}/insights/${slug}/`, "zh-CN": `${origin}/zh/insights/${slug}/` } } }
    ])
  ];
}
