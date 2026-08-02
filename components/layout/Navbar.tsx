'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BrandLogo } from '../shared/BrandLogo'
import { NAV_LINKS } from '@/content/data/navigation'
import { ThemeToggle } from '../shared/ThemeToggle'
import { MobileMenu } from './MobileMenu'
import { Button } from '../ui/Button'
import { useHeaderScroll } from '@/lib/animations/useHeaderScroll'
import { cn } from '@/lib/utils'

/**
 * Navbar component displayed at the top of all pages.
 * Handles background frosted-glass transition, intelligent scroll auto-hide,
 * active link indicators, and mobile menu integration.
 */
export function Navbar() {
  const { isScrolled, isVisible } = useHeaderScroll()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-300 ease-out',
        isScrolled
          ? 'glass shadow-sm'
          : 'border-b border-transparent bg-transparent',
        isVisible || isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      {/* Skip to Main Content link for WCAG accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <div className="container-default flex h-16 items-center justify-between">
        {/* Brand Wordmark & Official Emblem */}
        <Link
          href="/"
          onClick={() => setIsMobileMenuOpen(false)}
          className="focus:outline-none"
        >
          <BrandLogo size="sm" showText priority />
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'relative text-sm font-medium tracking-wide transition-colors py-1 group',
                  isActive
                    ? 'text-accent-light'
                    : 'text-foreground-muted hover:text-foreground'
                )}
              >
                {link.label}
                {/* Premium active/hover indicator line */}
                <span
                  className={cn(
                    'absolute bottom-0 left-0 h-0.5 w-full bg-accent-light rounded-full transition-transform duration-250 ease-out origin-left',
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  )}
                />
              </Link>
            )
          })}
        </nav>

        {/* Actions (CTA, Theme Toggle, Mobile Trigger) */}
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-4 md:flex">
            <ThemeToggle />
            <Button href="/contact" size="sm">
              Let&apos;s talk
            </Button>
          </div>

          <MobileMenu
            isOpen={isMobileMenuOpen}
            onOpen={() => setIsMobileMenuOpen(true)}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        </div>
      </div>
    </header>
  )
}
