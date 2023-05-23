/** @type {import('next').NextConfig} */

const baseUrl = process.env.NEXT_PUBLIC_BASE_PATH; 

const nextConfig = {
  reactStrictMode: true,
  basePath: baseUrl,
  assetPrefix: baseUrl
}

module.exports = nextConfig
