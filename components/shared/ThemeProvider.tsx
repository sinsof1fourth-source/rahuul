'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

/* ─── Types ─── */
type Theme = 'dark' | 'light' | 'system'
type ResolvedTheme = 'dark' | 'light'

interface ThemeContextValue {
  /** The stored preference (may be 'system') */
  theme: Theme
  /** The actual applied theme ('dark' or 'light') */
  resolvedTheme: ResolvedTheme
  setTheme: (theme: Theme) => void
  /** Convenience: toggles between dark and light directly */
  toggleTheme: () => void
}

/* ─── Constants ─── */
const STORAGE_KEY = 'rahuul-theme'
const DEFAULT_THEME: Theme = 'dark'

/* ─── Context ─── */
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

/* ─── Pure helpers (no side effects) ─── */
function getSystemTheme(): ResolvedTheme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function resolveTheme(theme: Theme): ResolvedTheme {
  return theme === 'system' ? getSystemTheme() : theme
}

function applyThemeToDOM(resolved: ResolvedTheme): void {
  const root = document.documentElement
  root.classList.remove('dark', 'light')
  root.classList.add(resolved)
}

function readStoredTheme(): Theme {
  try {
    return (localStorage.getItem(STORAGE_KEY) as Theme) ?? DEFAULT_THEME
  } catch {
    // localStorage is unavailable (e.g., private browsing with strict settings)
    return DEFAULT_THEME
  }
}

function writeStoredTheme(theme: Theme): void {
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // Silently fail — theme will still work for this session
  }
}

/* ─────────────────────────────────────────────────────────────────────────────
   ThemeProvider
   Custom replacement for next-themes that avoids the React 19 inline-script
   warnings and hydration issues reported in the unmaintained package.

   Architecture:
   - An inline <script> in app/layout.tsx reads localStorage and adds .dark/.light
     to <html> SYNCHRONOUSLY before React hydrates — preventing any flash.
   - This provider then reads the same value and keeps React state in sync.
   - System preference changes are listened to and applied if theme === 'system'.
───────────────────────────────────────────────────────────────────────────── */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME)
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('dark')

  /** Apply a theme: update DOM, state, and localStorage */
  const applyTheme = useCallback((t: Theme) => {
    const resolved = resolveTheme(t)
    applyThemeToDOM(resolved)
    setThemeState(t)
    setResolvedTheme(resolved)
  }, [])

  const setTheme = useCallback(
    (newTheme: Theme) => {
      writeStoredTheme(newTheme)
      applyTheme(newTheme)
    },
    [applyTheme],
  )

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }, [resolvedTheme, setTheme])

  useEffect(() => {
    // Sync React state with the theme already applied by the inline script
    const stored = readStoredTheme()
    queueMicrotask(() => applyTheme(stored))

    // Listen for OS-level preference changes
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onSystemChange = () => {
      const current = readStoredTheme()
      if (current === 'system') applyTheme('system')
    }

    media.addEventListener('change', onSystemChange)
    return () => media.removeEventListener('change', onSystemChange)
  }, [applyTheme])

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

/* ─── Hook ─── */
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (ctx === undefined) {
    throw new Error('useTheme must be called within a <ThemeProvider>')
  }
  return ctx
}
