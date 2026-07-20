/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for production (only in production build)
  ...(process.env.NODE_ENV === 'production' && { output: 'standalone' }),
  
  // Image optimization
  images: {
    unoptimized: true,
    domains: [],
  },
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
