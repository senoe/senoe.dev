const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  }
];

/** @type {import('next').NextConfig} */
const config = {
  async headers() {
    return [
      {
        // Apply to all routes.
        source: '/:path*',
        headers: securityHeaders
      }
    ];
  },
  swcMinify: true,
  reactStrictMode: true,
  experimental: { appDir: true },
  typescript: { ignoreBuildErrors: true }
};

export default config;
