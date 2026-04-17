# Hard Rules

This document defines non-negotiable and high-priority rules for AI-generated code.

## P0 (Mandatory)

### Language and naming

- Code, comments, type names, and docs must be in English only.
- Use TypeScript with strict typing.
- Avoid `any`; prefer explicit interfaces/types.
- Use interfaces with `I` prefix (for example `IHeroSectionProps`).

### Stack and architecture

- Target framework: Next.js pages router + React + TypeScript.
- Use SCSS Modules for component styles.
- Do not use CSS-in-JS or inline style objects as primary styling method.
- Use absolute imports:
  - `@/` for `src/*`
  - `@public/` for `public/*`

### Components and files

- Use named exports for components (except Next.js page files).
- Use arrow function components.
- Keep file layout:
  - `ComponentName/ComponentName.tsx`
  - `ComponentName/ComponentName.module.scss`
  - `ComponentName/index.ts` with re-export
  - `ComponentName/types.ts` if needed

### Styling contract

- Before writing SCSS, read and reuse tokens/mixins from `src/styles/vars.scss`.
- Always import style tokens from `vars.scss`.
- Use v2 typography mixins only (`text-h*-v2`, `text-body-*-v2`, `text-subtitle-v2`, `text-button-v2`) unless a task explicitly requests legacy support.
- Do not hardcode colors, typography values, or breakpoints when a token/mixin exists.
- If a required token is truly missing, allow a temporary hardcoded value only with an explicit marker comment: `TODO(token-missing): <what is missing and why>`.
- Prefer shared media mixin conventions over ad-hoc breakpoint logic.

### i18n contract

- Use translation keys from `common` namespace conventions.
- Prefer `<Trans />` for static content in layout blocks.
- Use `t()` for attributes, dynamic fragments, and string composition.

### Motion contract (Framer Motion)

- Use motion only for UX-relevant feedback (state changes, hierarchy, orientation), not as decoration by default.
- Prefer animating `transform` and `opacity`; avoid layout-triggering properties (`top`, `left`, `width`, `height`) unless required.
- Respect user accessibility preferences:
  - Use `useReducedMotion()` for essential branches.
  - Reduce or disable non-essential animations when reduced motion is requested.
- For non-trivial interactions, define typed variant maps (`Variants`) outside component render to keep transitions deterministic.
- For mount/unmount animation, require `AnimatePresence` with stable keys; define transition sequencing explicitly when needed.
- In SSR-rendered UI, avoid hydration mismatch by matching initial visual state to server output (for example `initial={false}` where suitable).
- Infinite loops are allowed only for lightweight decorative elements; they must not impact readability or CPU on low-end devices.
- If a motion effect causes measurable jank, degrade gracefully to simpler transitions instead of adding complexity.

### Lint/format safety

- Code must be compatible with Biome lint/format conventions.
- Avoid `console.log`; only `console.warn` and `console.error` are acceptable.

## P1 (Important)

- Keep components focused and composable.
- Reuse existing UI primitives and patterns when available.
- Keep imports ordered by category:
  1. React and external packages
  2. Public assets
  3. Internal aliases
  4. Styles last
- Include accessibility attributes on controls (`aria-label`, semantic tags).

## P2 (Stylistic)

- Keep class names concise and readable in camelCase.
- Prefer short, explicit prop names over cryptic abbreviations.
- Keep motion/animation variants isolated in separate files when non-trivial.

## Rejection criteria for generated output

Reject output immediately if any of the following appears:

- Hardcoded palette/typography values replacing known tokens from `vars.scss`.
- Legacy typography mixins used without explicit task-level approval.
- Relative imports that should use alias imports.
- New custom media-query system conflicting with project conventions.
- `any` used where exact types can be inferred or declared.
- Default component export in non-page component modules.
- Motion that ignores reduced-motion accessibility expectations.
- Heavy layout-affecting animation where transform/opacity alternatives are viable.
