'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

/**
 * CustomCursor component provides a premium magnetic/interactive cursor trail.
 * It automatically disables itself:
 *   - On touch-screen devices (pointer: coarse)
 *   - When the user prefers reduced motion (prefers-reduced-motion: reduce)
 * This avoids unnecessary JS overhead and respects WCAG 2.2 guidelines.
 */
export function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const isVisibleRef = useRef(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  // Cursor coordinates — motion values avoid triggering React re-renders on every pixel
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Smooth springs for the trailing outer ring
  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisibleRef.current) {
        isVisibleRef.current = true
        setIsVisible(true)
      }
    },
    [cursorX, cursorY],
  )

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement
    const isInteractive =
      target.tagName === 'A' ||
      target.tagName === 'BUTTON' ||
      target.closest('a') !== null ||
      target.closest('button') !== null ||
      target.classList.contains('cursor-pointer')

    setIsHovered(isInteractive)
  }, [])

  useEffect(() => {
    // Bail on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return
    // Bail if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    requestAnimationFrame(() => setMounted(true))

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    // Use passive listeners on mousemove for scroll-jank prevention
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mouseover', handleMouseOver, { passive: true })

    // Hide the native cursor when our custom one is active
    document.body.classList.add('cursor-none')

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mouseover', handleMouseOver)
      document.body.classList.remove('cursor-none')
    }
  }, [handleMouseMove, handleMouseOver])

  if (!mounted || !isVisible) return null

  return (
    <>
      {/* Outer ring cursor (spring-delayed trail) */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isClicking ? 0.8 : isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? 'var(--accent)' : 'transparent',
          opacity: 0.8,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
        aria-hidden="true"
      />
      {/* Inner dot cursor (instant) */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-light mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        aria-hidden="true"
      />
    </>
  )
}
