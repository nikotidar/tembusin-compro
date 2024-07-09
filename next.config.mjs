/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    staticFolder: "/static",
  },
  output: "export",
  distDir: "out", // Where to export all pages
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
