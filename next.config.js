/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  experimental: {
    appDir: true,
  },
  env: {
    publicUrl:
      process.env.NODE_ENV !== 'production'
        ? 'http://localhost:3000'
        : 'https://spaceship.vercel.app',
  },
}

module.exports = nextConfig
