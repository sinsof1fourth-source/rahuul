/**
 * Shared motion configuration constants for GSAP and Framer Motion.
 * Standardizes easings, durations, and stagger timings to guarantee
 * cohesive, expensive-feeling micro-animations across all components.
 */

export const EASE = {
  // Smooth editorial deceleration
  OUT: 'power3.out',
  // Punchy Apple-style entrance
  EXPO_OUT: 'expo.out',
  // Smooth fluid curve for scroll-tied interpolation
  SMOOTH: 'power2.out',
  // Cubic-bezier array for Framer Motion / CSS
  CUBIC_BEZIER: [0.22, 1, 0.36, 1] as const,
  // Custom spring configuration for physical feedback
  SPRING: { damping: 30, stiffness: 250, mass: 0.5 },
}

export const DURATION = {
  FAST: 0.3,
  NORMAL: 0.6,
  SLOW: 1.0,
  CINEMATIC: 1.4,
}

export const STAGGER = {
  TIGHT: 0.05,
  NORMAL: 0.08,
  RELAXED: 0.12,
}
