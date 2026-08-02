# RAHUUL — Component Guide

> Last updated: 2026-08-02 · Phase 1 Complete

---

## Component Hierarchy

```
RootLayout (Server)
├── <head>
│   ├── Theme Flash Prevention Script (blocking)
│   └── JSON-LD Person Schema
├── ThemeProvider (Client)
│   ├── CustomCursor (Client)
│   ├── Navbar (Client)
│   │   ├── Brand Wordmark <Link>
│   │   ├── Desktop Nav Links
│   │   ├── ThemeToggle (Client)
│   │   ├── CTA Button <Link>
│   │   └── MobileMenu (Client)
│   │       ├── Nav Links (animated)
│   │       ├── CTA Button
│   │       ├── Social Links
│   │       └── ThemeToggle
│   ├── <main> (children / page content)
│   │   └── Page Components
│   │       └── ScrollReveal (Client, wrapper)
│   └── Footer (Client)
│       ├── Brand Bio
│       ├── Link Directories (Explore / Connect)
│       ├── Newsletter Form
│       └── Social Icons (BrandIcons)
```

---

## UI Primitives (`components/ui/`)

### Button

**File:** `components/ui/Button.tsx`
**Type:** Server Component (no `'use client'`)

A polymorphic component that renders as `<button>` or Next.js `<Link>` based on the presence of `href`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'destructive'` | `'primary'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size preset |
| `href` | `string \| undefined` | `undefined` | If present, renders as `<Link>` |
| `className` | `string` | — | Additional classes (merged via `cn()`) |
| `...props` | HTML button or Link props | — | All native props forwarded |

**Usage:**
```tsx
<Button href="/contact" size="lg">Get in Touch</Button>
<Button variant="ghost" onClick={handleClick}>Cancel</Button>
```

---

### Badge

**File:** `components/ui/Badge.tsx`
**Type:** Server Component

A tag/pill component for categorisation labels.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'subtle' \| 'accent' \| 'warm' \| 'cool' \| 'outline'` | `'subtle'` | Colour scheme |
| `size` | `'sm' \| 'md'` | `'md'` | Size preset |
| `className` | `string` | — | Additional classes |

**Usage:**
```tsx
<Badge variant="accent" size="sm">TypeScript</Badge>
```

---

## Layout Components (`components/layout/`)

### Navbar

**File:** `components/layout/Navbar.tsx`
**Type:** Client Component

Sticky header that transitions to a frosted-glass background on scroll.

**Features:**
- Skip-to-main-content link (WCAG 2.2)
- Active link highlighting via `usePathname()` with `aria-current="page"`
- Passive scroll listener for performance
- Responsive: desktop nav + `MobileMenu` on `md:` breakpoint
- `aria-label="Primary navigation"` on `<nav>` element

---

### MobileMenu

**File:** `components/layout/MobileMenu.tsx`
**Type:** Client Component

Full-screen overlay menu for mobile viewports with staggered entry animations.

**Accessibility Features:**
- `role="dialog"` + `aria-modal="true"`
- Escape key closes the menu (WCAG keyboard requirement)
- Focus moves to the first link on open
- Background scroll is locked while open
- `aria-expanded` on the toggle button

---

### Footer

**File:** `components/layout/Footer.tsx`
**Type:** Client Component (newsletter form uses `onSubmit`)

Four-column responsive footer with brand bio, link directory, newsletter subscription, and social icons.

---

## Shared Components (`components/shared/`)

### ThemeProvider

**File:** `components/shared/ThemeProvider.tsx`

Provides `theme`, `resolvedTheme`, `setTheme()`, and `toggleTheme()` via React Context.

**Hook:** `useTheme()` — call from any descendant client component.

**Architecture:** Works in concert with the inline blocking `<script>` in `layout.tsx` to prevent any flash of unstyled content during theme hydration.

---

### ThemeToggle

**File:** `components/shared/ThemeToggle.tsx`

Animated Sun/Moon icon button. Uses `AnimatePresence` for smooth icon transitions. Shows a skeleton placeholder until client-side mount to avoid hydration mismatch.

---

### CustomCursor

**File:** `components/shared/CustomCursor.tsx`

Spring-physics cursor with an outer trailing ring and inner instant dot. Automatically disabled on:
- Touch devices (`pointer: coarse`)
- Reduced motion preference (`prefers-reduced-motion: reduce`)

Decorative elements use `aria-hidden="true"`.

---

### ScrollReveal

**File:** `components/shared/ScrollReveal.tsx`

Viewport-triggered entry animation wrapper using Motion's `whileInView`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `direction` | `'up' \| 'down' \| 'left' \| 'right' \| 'none'` | `'up'` | Slide direction |
| `delay` | `number` | `0` | Seconds before animation starts |
| `duration` | `number` | `0.5` | Animation duration in seconds |
| `className` | `string` | `''` | Additional classes |

**Usage:**
```tsx
<ScrollReveal direction="up" delay={0.2}>
  <h2>Animated heading</h2>
</ScrollReveal>
```

---

## Icon Components (`components/icons/`)

### BrandIcons

**File:** `components/icons/BrandIcons.tsx`

Custom SVG brand icons that match Lucide's visual language (24×24, stroke-width 2, round caps). Created because Lucide removed brand icons in v1.x.

**Exports:** `GithubIcon`, `TwitterIcon`, `LinkedinIcon`

All accept standard `SVGProps<SVGSVGElement>` and include `aria-hidden="true"` since they are decorative (the parent `<a>` tag carries `aria-label`).

---

## Adding a New Component

1. **Determine the category:** Is it a primitive (`ui/`), structural (`layout/`), cross-cutting (`shared/`), or icon (`icons/`)?
2. **Server or Client?** Default to Server Component. Only add `'use client'` if the component uses hooks, event handlers, or browser APIs.
3. **Props interface:** Define a typed interface. Use `cn()` for className merging.
4. **Accessibility:** Include `aria-label`, `role`, `aria-expanded`, `aria-current` as appropriate.
5. **Export:** Use named exports (no default exports).
