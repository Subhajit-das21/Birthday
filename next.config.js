/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // To avoid Vercel image optimization issues for local images
  },
  experimental: {
    appDir: true, // Because you're using src/app/ folder (App Router)
  },
};

module.exports = nextConfig;
