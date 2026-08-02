'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

/**
 * BackToTop button with a radial scroll progress ring.
 * Appears when user scrolls past 300px.
 * Smoothly scrolls back to top using window/Lenis scrolling.
 */
export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0

      setProgress(scrollPercent)
      setIsVisible(scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // SVG progress circle math (radius = 18, circumference = 2 * PI * 18 = 113.097)
  const radius = 18
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-border-subtle bg-surface/80 text-foreground-muted backdrop-blur-md transition-all hover:border-accent hover:text-foreground hover:shadow-card focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Scroll back to top of page"
        >
          {/* Radial progress ring */}
          <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 44 44">
            <circle
              cx="22"
              cy="22"
              r={radius}
              fill="none"
              stroke="var(--border-subtle)"
              strokeWidth="2"
            />
            <circle
              cx="22"
              cy="22"
              r={radius}
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-150"
            />
          </svg>
          <ArrowUp className="relative z-10 h-4 w-4" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
