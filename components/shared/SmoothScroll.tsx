'use client'

import { useEffect, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '@/lib/animations/gsap'

interface SmoothScrollProps {
  children: ReactNode
}

/**
 * SmoothScroll component wraps children and initializes Lenis smooth scrolling.
 * Seamlessly integrates Lenis with GSAP ScrollTrigger ticker.
 * Handles smooth anchor jumps, route changes, and respects prefers-reduced-motion.
 */
export function SmoothScroll({ children }: SmoothScrollProps) {
  const pathname = usePathname()

  useEffect(() => {
    // Respect user's reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    })

    // Connect Lenis scroll events to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    // Synchronize Lenis RAF with GSAP Ticker
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(updateTicker)
    gsap.ticker.lagSmoothing(0)

    // Handle internal anchor jumps smoothly
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a')
      if (!target) return

      const href = target.getAttribute('href')
      if (!href) return

      let hash = ''
      if (href.startsWith('#')) {
        hash = href
      } else if (href.startsWith('/#') && window.location.pathname === '/') {
        hash = href.replace('/', '')
      }

      if (hash && hash !== '#') {
        const targetElement = document.querySelector(hash)
        if (targetElement) {
          e.preventDefault()
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: -80, // account for fixed navbar height
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          })
          window.history.pushState(null, '', hash)
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    // Handle initial hash on page load
    if (window.location.hash) {
      const initialElement = document.querySelector(window.location.hash)
      if (initialElement) {
        setTimeout(() => {
          lenis.scrollTo(initialElement as HTMLElement, {
            offset: -80,
            immediate: true,
          })
        }, 150)
      }
    }

    // Refresh ScrollTrigger on window resize
    const handleResize = () => {
      ScrollTrigger.refresh()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      window.removeEventListener('resize', handleResize)
      gsap.ticker.remove(updateTicker)
      lenis.destroy()
    }
  }, [])

  // On route change, reset scroll position and refresh ScrollTrigger
  useEffect(() => {
    window.scrollTo(0, 0)
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 120)
    return () => clearTimeout(timeout)
  }, [pathname])

  return <>{children}</>
}

