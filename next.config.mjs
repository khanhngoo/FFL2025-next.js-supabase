/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 64, 96, 128, 256, 384, 512, 1024, 2048],
    dangerouslyAllowSVG: true,
    minimumCacheTTL: 60,
    disableStaticImages: false,
    domains: [],
  },
  experimental: {
    largePageDataBytes: 512 * 1000, // Increase the page data size limit
  },
};

export default nextConfig;
