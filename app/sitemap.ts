import type { MetadataRoute } from "next";
import { insights } from "@/lib/insights";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = process.env.GITHUB_PAGES === "true" ? "https://naomi777li.github.io/cecl-photonics-global" : "https://cecl-photonics-global.georgia52201.chatgpt.site";
  const lastModified = new Date("2026-09-29");
  return [
    { url: `${origin}/`, lastModified, changeFrequency: "monthly", priority: 1, alternates: { languages: { en: `${origin}/`, "zh-CN": `${origin}/zh` } } },
    { url: `${origin}/zh`, lastModified, changeFrequency: "monthly", priority: .9, alternates: { languages: { en: `${origin}/`, "zh-CN": `${origin}/zh` } } },
    ...insights.flatMap(({ slug }) => [
      { url: `${origin}/insights/${slug}`, lastModified, changeFrequency: "monthly" as const, priority: .75, alternates: { languages: { en: `${origin}/insights/${slug}`, "zh-CN": `${origin}/zh/insights/${slug}` } } },
      { url: `${origin}/zh/insights/${slug}`, lastModified, changeFrequency: "monthly" as const, priority: .7, alternates: { languages: { en: `${origin}/insights/${slug}`, "zh-CN": `${origin}/zh/insights/${slug}` } } }
    ])
  ];
}
