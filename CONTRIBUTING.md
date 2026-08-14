# Contributing to RAHUUL

> Last updated: 2026-08-02

---

## 1. Prerequisites

- **Node.js** ≥ 20.x
- **npm** ≥ 10.x
- A code editor with TypeScript + Tailwind CSS IntelliSense

## 2. Getting Started

```bash
# Clone the repository
git clone https://github.com/sinsof1fourth-source/rahuul.git
cd rahuul

# Install dependencies
npm install

# Start the development server
npm run dev
```

The dev server runs at `http://localhost:3000`.

---

## 3. Project Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `next dev` | Start development server |
| `build` | `next build --webpack` | Production build |
| `start` | `next start` | Serve production build |
| `lint` | `eslint` | Run ESLint |

---

## 4. Coding Conventions

### TypeScript

- **Strict mode** is enabled (`"strict": true` in `tsconfig.json`).
- Use `interface` for component props, `type` for unions and utility types.
- Export types/interfaces alongside their components.
- Use explicit return types for public utility functions in `lib/`.

### React

- **Server Components by default.** Only add `'use client'` when the component requires hooks, event handlers, or browser APIs.
- **Named exports only.** No default exports for components.
- **Props interfaces** are defined directly above the component, not in separate files.
- Use `cn()` (from `lib/utils.ts`) for all className composition.

### Styling

- **No inline styles** except for Motion's `style` prop (which requires JS values like motion values).
- **Use design tokens.** Never use raw hex values or pixel values. Always reference the token system.
- **Tailwind utilities first**, custom CSS in `globals.css` only when a utility class is shared across 3+ components.

### File Naming

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `ThemeToggle.tsx` |
| Utilities | camelCase | `utils.ts` |
| Data files | camelCase | `navigation.ts` |
| Pages | lowercase | `page.tsx` |
| Documentation | SCREAMING_SNAKE | `PROJECT_ARCHITECTURE.md` |

---

## 5. Component Authoring Checklist

When creating a new component, ensure:

- [ ] **TypeScript:** Props are typed with an exported interface.
- [ ] **Accessibility:** Interactive elements have `aria-label`, `role`, or `aria-current` as needed.
- [ ] **Focus management:** `:focus-visible` styles are inherited from the global rule. Custom focus styles use `focus-visible:ring-2 focus-visible:ring-accent`.
- [ ] **Keyboard navigation:** All interactive elements are keyboard-operable. Modals close on Escape.
- [ ] **Reduced motion:** Animations respect `prefers-reduced-motion` (CSS handles this globally; JS components check the media query).
- [ ] **Server/Client boundary:** The component is a Server Component unless it provably requires client features.
- [ ] **Responsive:** The component works from 320px to 2560px viewport widths.
- [ ] **Dark/Light mode:** All colours use design tokens, not raw values.

---

## 6. Commit Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <short description>

[optional body]

[optional footer]
```

### Types

| Type | When |
|------|------|
| `feat` | New feature or component |
| `fix` | Bug fix |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `style` | Design token / CSS changes |
| `docs` | Documentation only |
| `perf` | Performance improvement |
| `a11y` | Accessibility improvement |
| `chore` | Build config, dependencies, tooling |

### Examples

```
feat(navbar): add scroll-aware frosted glass background
fix(theme): resolve hydration mismatch on first load
a11y(mobile-menu): add Escape key to close modal
docs: add COMPONENT_GUIDE.md
```

---

## 7. Branch Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production-ready, always deployable |
| `develop` | Integration branch for feature work |
| `feat/<name>` | Individual feature branches |
| `fix/<name>` | Bug fix branches |

---

## 8. Adding a New Page (Phase 2+)

1. Create `app/<route>/page.tsx`.
2. Export page-specific metadata using `generatePageMetadata()` from `lib/seo.ts`.
3. Use `ScrollReveal` for entry animations.
4. Use design tokens for all colours.
5. Test in both dark and light modes.
6. Test with keyboard-only navigation.
7. Run `npx tsc --noEmit` and `npm run build` before committing.

---

## 9. Adding a New Dependency

Before adding any npm package:

1. **Check maintenance status.** Is it actively maintained? When was the last release?
2. **Check bundle size.** Use [bundlephobia.com](https://bundlephobia.com) to verify the size impact.
3. **Check alternatives.** Can the functionality be implemented with native APIs or existing dependencies?
4. **Document the decision.** If the package is added, note the rationale in a commit message.

### Currently Approved Dependencies

| Package | Purpose | Approved |
|---------|---------|----------|
| `motion` | Animation library | ✅ |
| `lucide-react` | Icon library | ✅ |
| `clsx` | Conditional class composition | ✅ |
| `tailwind-merge` | Tailwind conflict resolution | ✅ |

---

## 10. Quality Gates

Before any PR is merged:

1. **TypeScript:** `npx tsc --noEmit` passes with 0 errors.
2. **Build:** `npm run build` completes successfully.
3. **Lint:** `npm run lint` passes.
4. **Accessibility:** Manual keyboard navigation test on new/changed components.
5. **Responsive:** Verified at 320px, 768px, 1024px, and 1440px viewports.
6. **Dark/Light:** Both themes tested visually.
