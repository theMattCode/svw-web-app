/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Required until the new app directory feature is fully enabled
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
      {
        protocol: "https",
        hostname: "svw.uber.space",
        pathname: "/uploads",
      },
    ],
  },
};

module.exports = nextConfig;
