# RAHUUL — Design System

> Last updated: 2026-08-02 · Phase 1 Complete
> Source of truth: `app/globals.css`

---

## 1. Design Philosophy

**"Quiet Luxury meets Technical Precision."**

The design system prioritises restraint over excess. Every colour, shadow, and animation earns its place. The goal is a site that feels expensive, considered, and fast — not decorated.

### Principles
1. **Subtlety over spectacle** — Animations enhance understanding, never distract.
2. **Contrast as communication** — Foreground/background contrast always meets WCAG 2.2 AA (4.5:1 for body text, 3:1 for large text).
3. **Systematic over ad-hoc** — Every value comes from a token. No magic numbers.
4. **Dark-first** — Dark mode is the default. Light mode is equally polished.

---

## 2. Colour Tokens

All colours are defined as CSS custom properties in `:root` (light) and `.dark` (dark), then mapped to Tailwind utilities via `@theme inline`.

### Backgrounds

| Token | Light | Dark | Tailwind Utility |
|-------|-------|------|------------------|
| `--background` | `#ffffff` | `#08090a` | `bg-background` |
| `--surface` | `#f6f8fa` | `#0f1117` | `bg-surface` |
| `--elevated` | `#eaeef2` | `#161b22` | `bg-elevated` |

### Borders

| Token | Light | Dark | Tailwind Utility |
|-------|-------|------|------------------|
| `--border-subtle` | `#d0d7de` | `#21262d` | `border-border-subtle` |
| `--border-strong` | `#b1bac4` | `#30363d` | `border-border-strong` |

### Text

| Token | Light | Dark | Tailwind Utility |
|-------|-------|------|------------------|
| `--foreground` | `#1c2128` | `#f0f6fc` | `text-foreground` |
| `--foreground-muted` | `#57606a` | `#8b949e` | `text-foreground-muted` |
| `--foreground-dim` | `#8c959f` | `#484f58` | `text-foreground-dim` |

### Accents

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--accent` | `#6d28d9` (violet-700) | `#7c3aed` | Primary interactive colour |
| `--accent-light` | `#7c3aed` | `#a78bfa` | Hover states, active links |
| `--accent-warm` | `#d97706` (amber) | `#f59e0b` | Gradient endpoints, warm accents |
| `--accent-cool` | `#0891b2` (cyan) | `#06b6d4` | Cool accents (reserved for Phase 2+) |
| `--accent-glow` | `rgba(109,40,217,0.15)` | `rgba(124,58,237,0.2)` | Glow shadows, hover halos |

---

## 3. Typography

### Font Stack

| Role | Font Family | Weight | Tailwind Utility |
|------|------------|--------|------------------|
| **Display** | Bricolage Grotesque | 700 | `font-display` |
| **Body** | Geist | 400 | `font-body` |
| **Monospace** | Geist Mono | 400 | `font-mono` |

Fonts are loaded via `next/font/google` with `display: swap` and `latin` subset for optimal performance. No external Google Fonts CDN requests — Next.js self-hosts the font files.

### Heading Style

All headings (`h1`–`h6`) use:
- `font-family: var(--font-display)`
- `font-weight: 700`
- `letter-spacing: -0.03em`
- `line-height: 1.1`

### Body Style

- `font-family: var(--font-body)`
- `line-height: 1.7`
- `-webkit-font-smoothing: antialiased`

---

## 4. Spacing & Layout

### Container

The `.container-default` utility provides consistent page-width containment:

```css
.container-default {
  max-width: 80rem; /* 1280px */
  margin: 0 auto;
  padding: 0 1rem;    /* 16px mobile */
  /* sm: */ 0 1.5rem;  /* 24px tablet */
  /* lg: */ 0 2rem;    /* 32px desktop */
}
```

### Border Radius Scale

| Token | Value | Tailwind Utility |
|-------|-------|------------------|
| `--radius-sm` | `4px` | `rounded-sm` |
| `--radius-md` | `8px` | `rounded-md` |
| `--radius-lg` | `12px` | `rounded-lg` |
| `--radius-xl` | `16px` | `rounded-xl` |
| `--radius-2xl` | `24px` | `rounded-2xl` |

---

## 5. Shadows

| Token | Value | Use Case |
|-------|-------|----------|
| `--shadow-card` | `0 4px 24px rgba(0,0,0,0.35)` | Card hover states |
| `--shadow-elevated` | `0 16px 48px rgba(0,0,0,0.5)` | CTA sections, modals |
| `--shadow-glow` | Double accent-glow blur | Primary button glow |

---

## 6. Animations

### Keyframes

| Name | Duration | Description |
|------|----------|-------------|
| `float` | 6s | Gentle vertical float (hero decorations) |
| `float-alt` | 8s | Offset alternate float |
| `pulse-dot` | 2s | Scale + opacity pulse (status indicators) |
| `fade-slide-up` | 0.6s | Entry animation (initial load) |
| `ping-slow` | 2s | Expanding ring (notifications) |

### Motion Library Animations

| Component | Animation | Library |
|-----------|-----------|---------|
| `ScrollReveal` | Viewport-triggered slide+fade | Motion `whileInView` |
| `ThemeToggle` | Rotate + scale icon swap | Motion `AnimatePresence` |
| `MobileMenu` | Staggered slide-in | Motion `variants` |
| `CustomCursor` | Spring-physics trail | Motion `useSpring` |

### Reduced Motion

All animations are disabled when `prefers-reduced-motion: reduce` is set:
- **CSS:** Global rule sets `animation-duration` and `transition-duration` to `0.01ms`.
- **JS:** `CustomCursor` checks the media query and returns `null` if matched.

---

## 7. Component Utility Classes

| Class | Purpose |
|-------|---------|
| `.container-default` | Page-width container with responsive padding |
| `.text-gradient` | Violet → amber gradient text |
| `.glass` | Frosted glass surface (backdrop-filter blur) |
| `.border-gradient` | Gradient border via `::before` pseudo-element |

---

## 8. Interactive States

### Focus
All interactive elements receive a visible focus ring on `:focus-visible`:
```css
outline: 2px solid var(--accent);
outline-offset: 3px;
border-radius: 4px;
```

### Selection
Text selection uses the brand accent colour:
```css
::selection {
  background-color: var(--accent);
  color: #ffffff;
}
```

### Scrollbar (Webkit)
Custom themed scrollbar:
- Track: `var(--surface)`
- Thumb: `var(--border-strong)`, hover → `var(--accent)`
- Width: `8px`, fully rounded

---

## 9. Extending the Design System

### Adding a New Colour
1. Add the CSS variable to both `:root` and `.dark` in `globals.css`.
2. Map it in `@theme inline` with the `--color-` prefix.
3. Use the Tailwind utility: `bg-{name}`, `text-{name}`, `border-{name}`.

### Adding a New Animation
1. Define the `@keyframes` inside `@theme inline`.
2. Add a `--animate-{name}` variable mapping the keyframe.
3. Use via `animate-{name}` in Tailwind classes.

### Adding a New Shadow
1. Add a `--shadow-{name}` variable inside `@theme inline`.
2. Use via `shadow-{name}` in Tailwind classes.
