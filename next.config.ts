import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const securityHeaders = [
  { key: "Content-Security-Policy", value: "default-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; object-src 'none'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com; img-src 'self' data: blob: https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; font-src 'self' data:; upgrade-insecure-requests" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  ...(isGitHubPages ? {
    output: "export" as const,
    ...(repositoryBasePath ? { basePath: repositoryBasePath, assetPrefix: repositoryBasePath } : {}),
    trailingSlash: true,
  } : {}),
  images: { unoptimized: isGitHubPages },
  async headers() {
    return isGitHubPages ? [] : [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
