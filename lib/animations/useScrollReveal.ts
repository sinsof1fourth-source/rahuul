'use client'

import { useEffect, type RefObject } from 'react'
import { gsap } from './gsap'
import { EASE, DURATION, STAGGER } from './config'

export type RevealVariant = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up'

interface ScrollRevealOptions {
  triggerRef: RefObject<HTMLElement | null>
  targetSelector?: string
  variant?: RevealVariant
  delay?: number
  duration?: number
  stagger?: number
  start?: string
  once?: boolean
}

/**
 * Reusable GSAP ScrollTrigger reveal hook.
 * Animates target elements when they enter the viewport with zero layout shift.
 * Automatically cleans up GSAP triggers and respects `prefers-reduced-motion`.
 */
export function useScrollReveal({
  triggerRef,
  targetSelector,
  variant = 'fade-up',
  delay = 0,
  duration = DURATION.NORMAL,
  stagger = STAGGER.NORMAL,
  start = 'top 85%',
  once = true,
}: ScrollRevealOptions) {
  useEffect(() => {
    // Respect user's reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const container = triggerRef.current
    if (!container) return

    const targets = targetSelector
      ? container.querySelectorAll(targetSelector)
      : [container]

    if (!targets.length) return

    const getInitialProps = () => {
      switch (variant) {
        case 'fade-up':
          return { opacity: 0, y: 36, scale: 1 }
        case 'fade-in':
          return { opacity: 0, y: 0, scale: 1 }
        case 'slide-left':
          return { opacity: 0, x: 40, scale: 1 }
        case 'slide-right':
          return { opacity: 0, x: -40, scale: 1 }
        case 'scale-up':
          return { opacity: 0, y: 20, scale: 0.95 }
        default:
          return { opacity: 0, y: 30, scale: 1 }
      }
    }

    const ctx = gsap.context(() => {
      const initial = getInitialProps()

      gsap.fromTo(
        targets,
        initial,
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration,
          delay,
          stagger: targets.length > 1 ? stagger : 0,
          ease: EASE.OUT,
          scrollTrigger: {
            trigger: container,
            start,
            toggleActions: once ? 'play none none none' : 'play reverse play reverse',
          },
        }
      )
    }, container)

    return () => ctx.revert()
  }, [triggerRef, targetSelector, variant, delay, duration, stagger, start, once])
}
