import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/site-url";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const origin = siteOrigin;
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${origin}/sitemap.xml`, host: origin };
}
