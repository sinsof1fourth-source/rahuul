'use client'

import { useCallback, useRef } from 'react'
import { gsap } from './gsap'

interface UseCardHoverOptions {
  maxRotation?: number // Max degrees of tilt
  scale?: number // Scale on hover
  liftY?: number // Y offset lift in px
}

/**
 * Reusable card hover hook providing subtle 3D tilt, scale, and hover lift.
 * Uses 60 FPS GPU transforms with smooth GSAP interpolation.
 */
export function useCardHover<T extends HTMLElement = HTMLDivElement>({
  maxRotation = 3,
  scale = 1.02,
  liftY = -6,
}: UseCardHoverOptions = {}) {
  const cardRef = useRef<T | null>(null)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<T>) => {
      const card = cardRef.current
      if (!card) return

      const rect = card.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const mouseX = e.clientX - centerX
      const mouseY = e.clientY - centerY

      // Calculate tilt angles normalized between -maxRotation and +maxRotation
      const rotateX = (-mouseY / (rect.height / 2)) * maxRotation
      const rotateY = (mouseX / (rect.width / 2)) * maxRotation

      gsap.to(card, {
        rotateX,
        rotateY,
        y: liftY,
        scale,
        duration: 0.3,
        ease: 'power2.out',
        transformPerspective: 1000,
        overwrite: 'auto',
      })
    },
    [maxRotation, scale, liftY]
  )

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current
    if (!card) return

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: 'power3.out',
      overwrite: 'auto',
    })
  }, [])

  return { cardRef, handleMouseMove, handleMouseLeave }
}
