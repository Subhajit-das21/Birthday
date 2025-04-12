/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      unoptimized: true, // If you're using local images & don't want Vercel optimization errors
    },
    experimental: {
      appDir: true, // Because you're using `src/app/` (app router)
    },
  };
  
  export default nextConfig;
  