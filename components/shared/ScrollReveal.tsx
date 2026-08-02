'use client'

import { type ReactNode } from 'react'
import { motion } from 'motion/react'

interface ScrollRevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  delay?: number
  duration?: number
  className?: string
}

/**
 * ScrollReveal wrapper component animation triggered as it enters the viewport.
 * Automatically respects OS prefers-reduced-motion.
 */
export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className = '',
}: ScrollRevealProps) {
  const directions = {
    up: { y: 24 },
    down: { y: -24 },
    left: { x: 24 },
    right: { x: -24 },
    none: {},
  }

  const offset = directions[direction]

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom easeOut cubic curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
