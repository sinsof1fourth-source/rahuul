import type { NextConfig } from 'next'

/* ─────────────────────────────────────────────────────────────────────────────
   SECURITY HEADERS
   Applied to every route. Review in Phase 5 to add nonce-based CSP.
───────────────────────────────────────────────────────────────────────────── */
const securityHeaders = [
  // Prevent DNS prefetch leaking info
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  // Force HTTPS for 2 years, include subdomains
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  // Block clickjacking
  { key: 'X-Frame-Options', value: 'DENY' },
  // Prevent MIME-type sniffing
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Limit referrer info on cross-origin requests
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Disable unnecessary browser features
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  // Content Security Policy
  // Note: 'unsafe-inline' for scripts is required for the theme-flash-prevention
  // inline script in layout.tsx. Replace with a nonce in Phase 5.
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      // unsafe-inline needed for Next.js inline scripts, theme flash script, and GTM
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
      // unsafe-inline needed for Tailwind's generated styles
      "style-src 'self' 'unsafe-inline'",
      // next/font serves fonts through Next.js (no external font CDN needed)
      "font-src 'self' data:",
      // Allow images from self, data URIs, and any HTTPS source
      "img-src 'self' data: blob: https:",
      "media-src 'self'",
      // Allow fetch to Resend API + Google Analytics beacon endpoints
      "connect-src 'self' https://api.resend.com https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com",
      "frame-ancestors 'none'",
    ].join('; '),
  },
]

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },

  images: {
    // Serve images in modern formats for performance (AVIF > WebP > original)
    formats: ['image/avif', 'image/webp'],
  },

  // Opt into strict mode for catching potential React issues early
  reactStrictMode: true,

  // Remove X-Powered-By header (security fingerprint reduction)
  poweredByHeader: false,

  // Enable gzip compression for text-based assets on Vercel
  compress: true,

  webpack(config) {
    // Split GSAP + Lenis into their own long-lived cache chunk
    // so they are NOT re-downloaded on every page navigate
    const existing = config.optimization?.splitChunks?.cacheGroups ?? {}
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        ...config.optimization?.splitChunks,
        cacheGroups: {
          ...existing,
          animation: {
            name: 'animation-vendors',
            test: /[\\/]node_modules[\\/](gsap|lenis)[\\/]/,
            chunks: 'all',
            priority: 20,
          },
        },
      },
    }
    return config
  },
}

export default nextConfig
