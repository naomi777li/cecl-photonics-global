import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const origin = "https://cecl-photonics-global.georgia52201.chatgpt.site";
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${origin}/sitemap.xml`, host: origin };
}
