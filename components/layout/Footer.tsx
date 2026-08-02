'use client'

import Link from 'next/link'
import { FOOTER_LINKS } from '@/content/data/navigation'
import { SOCIAL_LINKS } from '@/content/data/social'
import { GithubIcon, TwitterIcon, LinkedinIcon } from '@/components/icons/BrandIcons'
import { Mail, ArrowUpRight } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'

import { BrandLogo } from '../shared/BrandLogo'

// Map social icon string keys to actual React components
const iconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  Github: GithubIcon,
  Twitter: TwitterIcon,
  Linkedin: LinkedinIcon,
  Mail: Mail,
}

/**
 * Footer component displaying directory structure links, social networks,
 * and email newsletter placeholder. Marked as 'use client' because the
 * newsletter form uses an onSubmit event handler.
 */
export function Footer() {
  return (
    <footer className="w-full border-t border-border-subtle bg-surface/50 py-12 antialiased">
      <div className="container-default grid grid-cols-1 gap-8 md:grid-cols-4">
        {/* Left Column: Brand Bio */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="focus:outline-none">
            <BrandLogo size="md" showText />
          </Link>
          <p className="text-sm leading-relaxed text-foreground-muted">
            Software engineer with a designer&apos;s eye. Crafting high-performance web products and thoughtful design tokens.
          </p>
        </div>

        {/* Center-Left & Center-Right Columns: Link directory */}
        <div className="grid grid-cols-2 gap-4 md:col-span-2 md:pl-12">
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">
              Explore
            </h3>
            <ul className="flex flex-col gap-2">
              {FOOTER_LINKS[0].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">
              Connect
            </h3>
            <ul className="flex flex-col gap-2">
              {FOOTER_LINKS[1].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Social Links & Newsletter Subscribe placeholder */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">
            Stay in the Loop
          </h3>
          <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <div className="relative">
              <input
                id="footer-email"
                type="email"
                placeholder="you@domain.com"
                autoComplete="email"
                required
                className="w-full rounded-lg border border-border-subtle bg-background px-3 py-2 pr-10 text-sm placeholder:text-foreground-dim focus:border-border-strong focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="absolute top-1/2 right-1.5 -translate-y-1/2 rounded p-1 text-foreground-muted hover:text-foreground"
              >
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
            <p className="text-[11px] leading-relaxed text-foreground-dim">
              No spam. Unsubscribe anytime.
            </p>
          </form>

          {/* Social Icons row */}
          <div className="flex gap-4 pt-2" role="list" aria-label="Social media links">
            {SOCIAL_LINKS.map((social) => {
              const Icon = iconMap[social.icon] || GithubIcon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="listitem"
                  className="rounded text-foreground-muted transition-colors hover:text-foreground hover:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                  aria-label={`Visit ${social.name}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="container-default mt-12 border-t border-border-subtle pt-6 text-center text-xs text-foreground-dim flex flex-col sm:flex-row sm:justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} RAHUUL. All rights reserved.</p>
        <p>Built with Next.js & Tailwind CSS v4</p>
      </div>
    </footer>
  )
}
