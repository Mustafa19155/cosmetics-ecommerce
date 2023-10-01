/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: { domains: ["aliyaabeauty.s3.eu-north-1.amazonaws.com"] },
};

module.exports = nextConfig;
