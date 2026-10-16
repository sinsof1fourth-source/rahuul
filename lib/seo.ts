import type { Metadata } from 'next'

/* ─── Central Official Production Domain ─── */
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://rahuulkalappatt.com'
const SITE_NAME = 'RAHUUL'
const PERSON_NAME = 'Rahuul Kalappatt'
const SITE_SUBTITLE = 'The Shadow Architect'
const TWITTER_HANDLE = '@rahuul'

const DEFAULT_DESCRIPTION =
  'Rahuul Kalappatt is an engineer, researcher, builder and creative technologist exploring AI systems, quantitative research, automation, digital infrastructure and experimental technology.'

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
    ? `${title} · ${PERSON_NAME}`
    : `${PERSON_NAME} — Engineer, Researcher, Builder & Creative Technologist`

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
      siteName: `${SITE_NAME} // ${PERSON_NAME}`,
      locale: 'en_US',
      type,
      images: [{ url: image, width: 1200, height: 630, alt: `${PERSON_NAME} — ${SITE_NAME}` }],
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
 */
export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${BASE_URL}/#person`,
  name: PERSON_NAME,
  alternateName: [SITE_NAME, SITE_SUBTITLE],
  url: BASE_URL,
  image: `${BASE_URL}/images/portrait.png`,
  jobTitle: 'AI Architect, Quant Researcher & Systems Engineer',
  description: DEFAULT_DESCRIPTION,
  sameAs: [
    'https://github.com/sinsof1fourth-source',
    'https://x.com/rahuul',
    'https://twitter.com/rahuul',
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'Quantitative Research',
    'Automated Trading Systems',
    'Multi-Agent Architecture',
    'Media Infrastructure',
    'Systems Engineering',
    'Deep-Space Autonomy',
    'Vedic Astrology & Numerology Systems',
    'Mobile Application Architecture',
  ],
} as const

/**
 * JSON-LD structured data for the WebSite entity schema.
 */
export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: SITE_NAME,
  alternateName: `${PERSON_NAME} Official Digital Headquarters`,
  url: BASE_URL,
  publisher: {
    '@type': 'Person',
    '@id': `${BASE_URL}/#person`,
    name: PERSON_NAME,
    url: BASE_URL,
  },
} as const

