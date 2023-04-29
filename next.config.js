/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  experimental: {
    appDir: true,
  },
  env: {
    isDev: process.env.NODE_ENV !== "production",
  },
};

module.exports = nextConfig;
