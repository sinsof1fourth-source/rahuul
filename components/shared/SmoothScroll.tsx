'use client'

import { useEffect, type ReactNode } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '@/lib/animations/gsap'

interface SmoothScrollProps {
  children: ReactNode
}

/**
 * SmoothScroll component wraps children and initializes Lenis smooth scrolling.
 * Seamlessly integrates Lenis with GSAP ScrollTrigger ticker.
 * Automatically respects `prefers-reduced-motion`.
 */
export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    // Connect Lenis scroll events to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    // Synchronize Lenis RAF with GSAP Ticker
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(updateTicker)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(updateTicker)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
