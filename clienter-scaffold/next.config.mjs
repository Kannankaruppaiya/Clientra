/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.clienter.co.in' },
      { protocol: 'https', hostname: '*.r2.cloudflarestorage.com' },
    ],
  },
};
export default nextConfig;
