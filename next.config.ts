import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    swcMinify: true,
    compress: true,
}

export default nextConfig
