/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/MiPortafolio2',
  assetPrefix: '/MiPortafolio2/',
}

module.exports = nextConfig
