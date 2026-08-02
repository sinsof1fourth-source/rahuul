import { useEffect, type RefObject } from 'react'
import { gsap } from './gsap'

interface HeroAnimationElements {
  sectionRef: RefObject<HTMLElement | null>
  badgeRef: RefObject<HTMLElement | null>
  headlineRef: RefObject<HTMLElement | null>
  descriptionRef: RefObject<HTMLElement | null>
  actionsRef: RefObject<HTMLElement | null>
  portraitRef?: RefObject<HTMLElement | null>
  glowRef?: RefObject<HTMLElement | null>
}

/**
 * Custom hook for Hero section animations.
 * Provides subtle initial entrance and cinematic scroll-driven parallax, opacity, and scale transforms.
 * Fully modular, handles GSAP context cleanup, and respects `prefers-reduced-motion`.
 */
export function useHeroAnimation({
  sectionRef,
  badgeRef,
  headlineRef,
  descriptionRef,
  actionsRef,
  portraitRef,
  glowRef,
}: HeroAnimationElements) {
  useEffect(() => {
    // Respect reduced motion settings
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const sectionEl = sectionRef.current
    if (!sectionEl) return

    // Create a GSAP Context bound to the section container for clean memory management
    const ctx = gsap.context(() => {
      // 1. Initial Cinematic Entrance (Subtle fade + rise)
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } })

      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 }
        )
      }

      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0 },
          '-=0.4'
        )
      }

      if (descriptionRef.current) {
        tl.fromTo(
          descriptionRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0 },
          '-=0.5'
        )
      }

      if (actionsRef.current) {
        tl.fromTo(
          actionsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0 },
          '-=0.5'
        )
      }

      if (portraitRef?.current) {
        tl.fromTo(
          portraitRef.current,
          { opacity: 0, scale: 0.92, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 1.0, ease: 'expo.out' },
          '-=0.7'
        )
      }

      // 2. Scroll-driven Cinematic Parallax, Opacity & Scale
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5, // Smooth scrubbing
        },
      })

      // Hero Text Content parallax + subtle scale-down & fade on scroll out
      const textElements = [
        badgeRef.current,
        headlineRef.current,
        descriptionRef.current,
        actionsRef.current,
      ].filter(Boolean)

      if (textElements.length > 0) {
        scrollTl.to(
          textElements,
          {
            y: 60,
            opacity: 0.25,
            scale: 0.96,
            stagger: 0.02,
            ease: 'none',
          },
          0
        )
      }

      // Portrait Card Parallax
      if (portraitRef?.current) {
        scrollTl.to(
          portraitRef.current,
          {
            y: 90,
            scale: 0.94,
            opacity: 0.3,
            ease: 'none',
          },
          0
        )
      }

      // Background ambient glow parallax for depth effect
      if (glowRef?.current) {
        scrollTl.to(
          glowRef.current,
          {
            y: -100,
            scale: 1.15,
            opacity: 0.4,
            ease: 'none',
          },
          0
        )
      }
    }, sectionEl)

    return () => ctx.revert()
  }, [sectionRef, badgeRef, headlineRef, descriptionRef, actionsRef, portraitRef, glowRef])
}
