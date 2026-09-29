import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryBasePath = "/cecl-photonics-global";

const nextConfig: NextConfig = {
  ...(isGitHubPages ? {
    output: "export" as const,
    basePath: repositoryBasePath,
    assetPrefix: repositoryBasePath,
    trailingSlash: true,
  } : {}),
  images: { unoptimized: true },
};

export default nextConfig;
