'use client'

import { useState, useEffect } from 'react'

/**
 * Hook for intelligent header visibility on scroll.
 * Returns `isScrolled` (for glass background) and `isVisible` (for auto-hide on scroll down, reveal on scroll up).
 */
export function useHeaderScroll(threshold = 20, hideThreshold = 120) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > threshold)

      if (currentScrollY > hideThreshold) {
        if (currentScrollY > lastScrollY + 5) {
          // Scrolling down -> hide header
          setIsVisible(false)
        } else if (currentScrollY < lastScrollY - 5) {
          // Scrolling up -> reveal header
          setIsVisible(true)
        }
      } else {
        // Near top -> always visible
        setIsVisible(true)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold, hideThreshold])

  return { isScrolled, isVisible }
}
