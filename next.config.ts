import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Enforce trailing slashes sitewide (routing + Link + sitemap alignment)
  trailingSlash: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.resumeground.com", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "i.pravatar.cc", pathname: "/**" },
    ],
  },
  async redirects() {
    return [
      // WWW → non-WWW (301), preserve path
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.resumesuplift.com" }],
        destination: "https://resumesuplift.com/:path*",
        permanent: true,
      },
      // Duplicate LinkedIn URL → canonical service page
      {
        source: "/linkedin-profile-optimization",
        destination: "/linkedin-optimization/",
        permanent: true,
      },
      {
        source: "/linkedin-profile-optimization/",
        destination: "/linkedin-optimization/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
