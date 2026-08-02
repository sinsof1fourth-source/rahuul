import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Bricolage_Grotesque } from 'next/font/google'
import { ThemeProvider } from '@/components/shared/ThemeProvider'
import { SmoothScroll } from '@/components/shared/SmoothScroll'
import { CustomCursor } from '@/components/shared/CustomCursor'
import { BackToTop } from '@/components/shared/BackToTop'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { generatePageMetadata, personJsonLd } from '@/lib/seo'
import './globals.css'

// Standard typography subsets loaded directly via next/font
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin'],
  weight: ['700'],
})

// Generate production-grade SEO default metadata
export const metadata: Metadata = generatePageMetadata()

// Viewport configuration for Lighthouse & Mobile optimization
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#08090a' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

// Script injected synchronously in the HTML head to block theme flashes on page load.
const preventThemeFlashScript = `
  (function() {
    try {
      var stored = localStorage.getItem('rahuul-theme');
      var resolved = 'dark'; // fallback/default
      if (stored === 'light') {
        resolved = 'light';
      } else if (stored === 'system' || !stored) {
        var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
        resolved = darkQuery.matches ? 'dark' : 'light';
      }
      document.documentElement.classList.remove('dark', 'light');
      document.documentElement.classList.add(resolved);
    } catch (e) {}
  })();
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Inject blocking script */}
        <script dangerouslySetInnerHTML={{ __html: preventThemeFlashScript }} />
        {/* Structured Data (JSON-LD) for SEO Person schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-250">
        <ThemeProvider>
          <SmoothScroll>
            {/* Custom spring cursor for premium UX */}
            <CustomCursor />
            {/* Scroll progress ring & BackToTop button */}
            <BackToTop />
            {/* Main sticky navigation header */}
            <Navbar />
            {/* Main Content Area */}
            <main id="main-content" tabIndex={-1} className="flex-grow focus:outline-none">
              {children}
            </main>
            {/* Site-wide footer */}
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}
