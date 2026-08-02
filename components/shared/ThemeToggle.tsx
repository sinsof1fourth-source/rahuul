'use client'

import { useEffect, useState } from 'react'
import { useTheme } from './ThemeProvider'
import { Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

/**
 * A beautiful theme toggler with smooth morphing exit/entry micro-animations.
 * Utilizes Custom ThemeProvider context value and displays corresponding Sun/Moon states.
 */
export function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by waiting until client-side mount
  useEffect(() => {
    requestAnimationFrame(() => setMounted(true))
  }, [])

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-lg border border-border-subtle bg-surface" />
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle bg-surface text-foreground-muted transition-all hover:border-border-strong hover:bg-elevated hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent"
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {resolvedTheme === 'dark' ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
            transition={{ duration: 0.15 }}
          >
            <Moon className="h-4.5 w-4.5" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
            transition={{ duration: 0.15 }}
          >
            <Sun className="h-4.5 w-4.5" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}
