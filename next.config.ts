import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = "khet-portfolio";
let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: assetPrefix,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;

