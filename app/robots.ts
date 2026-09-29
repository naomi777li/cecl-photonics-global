import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const origin = process.env.GITHUB_PAGES === "true" ? "https://ceclphotonics.com" : "https://cecl-photonics-global.georgia52201.chatgpt.site";
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${origin}/sitemap.xml`, host: origin };
}
