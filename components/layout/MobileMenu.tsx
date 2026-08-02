'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, type Variants } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/content/data/navigation'
import { SOCIAL_LINKS } from '@/content/data/social'
import { ThemeToggle } from '../shared/ThemeToggle'
import { BrandLogo } from '../shared/BrandLogo'
import { Button } from '../ui/Button'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  onOpen: () => void
}

/**
 * MobileMenu component overlay that covers the viewport with staggered navigation link fade-ins.
 * Disables scrolling when open.
 */
export function MobileMenu({ isOpen, onClose, onOpen }: MobileMenuProps) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      // Move focus into the menu for screen reader users
      setTimeout(() => firstLinkRef.current?.focus(), 100)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close on Escape key (WCAG 2.2 — Keyboard accessible modals)
  useEffect(() => {
    if (!isOpen) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Motion variants for container and items
  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: '-10%',
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      y: '0%',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  }

  const itemVariants: Variants = {
    closed: { opacity: 0, y: 15 },
    open: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } },
  }

  return (
    <div className="md:hidden">
      {/* Menu Toggle Button */}
      <button
        onClick={isOpen ? onClose : onOpen}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle bg-surface text-foreground-muted transition-all hover:border-border-strong hover:bg-elevated hover:text-foreground"
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Full Screen Overlay Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="glass fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col justify-between p-6 antialiased"
          >
            <nav className="flex flex-col gap-6 pt-8">
              {NAV_LINKS.map((link, idx) => (
                <motion.div key={link.href} variants={itemVariants}>
                  <Link
                    ref={idx === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    onClick={onClose}
                    className="font-display text-3xl font-bold tracking-tight text-foreground transition-colors hover:text-accent-light"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={itemVariants} className="pt-4">
                <Button href="/contact" onClick={onClose} className="w-full justify-center">
                  Get in Touch
                </Button>
              </motion.div>
            </nav>

            <div className="flex flex-col gap-6 border-t border-border-subtle pt-6">
              {/* Bottom Row controls */}
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground-muted transition-colors hover:text-foreground"
                      aria-label={`Visit ${social.name}`}
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
                <ThemeToggle />
              </div>
              <div className="flex items-center justify-between pt-2">
                <BrandLogo size="md" showText />
                <p className="text-xs text-foreground-dim">
                  &copy; {new Date().getFullYear()} RAHUUL. All rights reserved.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
