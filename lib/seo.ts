import type { Metadata } from 'next'

/* ─── Central Production Domain ─── */
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://rahuul-five.vercel.app'
const SITE_NAME = 'RAHUUL'
const SITE_SUBTITLE = 'The Shadow Architect'
const TWITTER_HANDLE = '@rahuul'

const DEFAULT_DESCRIPTION =
  'Rahuul Kalappatt (The Shadow Architect) — AI Architect, Quant Researcher, Systems Builder, and Media Creator. Engineering intelligent automation and long-term systems in silence.'

const DEFAULT_OG_IMAGE = `${BASE_URL}/og.png`

/* ─── Types ─── */
export interface PageSEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedAt?: string
  tags?: string[]
}

/**
 * Generates fully-populated Next.js Metadata for any page.
 * Handles title templating, Open Graph, Twitter Cards, canonicals,
 * and article-specific metadata in a single call.
 */
export function generatePageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_OG_IMAGE,
  url = BASE_URL,
  type = 'website',
  publishedAt,
  tags,
}: PageSEOProps = {}): Metadata {
  const fullTitle = title
    ? `${title} · ${SITE_NAME}`
    : `${SITE_NAME} KALAPPATT // ${SITE_SUBTITLE}`

  const canonicalUrl = url.startsWith('http') ? url : `${BASE_URL}${url}`

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: `${SITE_NAME} // ${SITE_SUBTITLE}`,
      locale: 'en_US',
      type,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
      ...(type === 'article' && publishedAt ? { publishedTime: publishedAt } : {}),
      ...(tags?.length ? { tags } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      ],
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    },
    manifest: '/site.webmanifest',
  }
}

/**
 * JSON-LD structured data for the site owner (Person schema).
 * Include in the root layout for sitewide person markup.
 */
export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rahuul Kalappatt',
  alternateName: 'The Shadow Architect',
  url: BASE_URL,
  sameAs: [
    'https://github.com/sinsof1fourth-source',
    'https://twitter.com/rahuul',
  ],
  jobTitle: 'AI Architect & Quant Researcher',
  description: DEFAULT_DESCRIPTION,
  knowsAbout: [
    'Artificial Intelligence',
    'Quantitative Research',
    'Automated Trading Systems',
    'Multi-Agent Architecture',
    'Media Engineering',
    'Systems Architecture',
  ],
} as const
