# Do / Don't

Fast anti-pattern reference for AI generation.

## Do

- Use TypeScript interfaces with `I` prefix.
- Use named exports for components.
- Use `@/` and `@public/` aliases.
- Use SCSS Modules and shared tokens from `vars.scss`.
- Use v2 typography mixins only (`text-h*-v2`, `text-body-*-v2`, `text-subtitle-v2`, `text-button-v2`).
- Use project responsive conventions (`media(...)` mixin family).
- Use `<Trans />` for static layout copy.
- Use `t()` for dynamic strings and attributes.
- Keep styles import as the last import in component files.
- Keep component file structure consistent (`Component.tsx`, `.module.scss`, `index.ts`).
- Use `framer-motion` variants for non-trivial animation instead of scattered inline transition objects.
- Use `useReducedMotion()` for accessibility-sensitive motion branches.
- Prefer `transform`/`opacity` animation properties.

## Don't

- Do not hardcode design values as a default approach.
- If a required token is missing, allow temporary hardcode only with `TODO(token-missing): ...` marker.
- Do not introduce Tailwind or CSS-in-JS without explicit request.
- Do not create default exports in non-page component files.
- Do not use `any` when type inference or interfaces are possible.
- Do not use `console.log`.
- Do not invent a custom breakpoint system.
- Do not bypass i18n and hardcode user-facing strings in TSX.
- Do not use relative imports where alias imports are expected.
- Do not use legacy typography mixins (`text-h1`, `text-h2`, `text-h3`, `text-h4`, `text-subtitle`, `text-body-l`, `text-body-m`, `text-body-s`, `text-mega`).
- Do not animate layout-heavy properties (`top`, `left`, `width`, `height`) when transform alternatives exist.
- Do not add infinite loops for primary UI content.
- Do not ship motion without reduced-motion fallback for non-essential effects.

## Typical fixes when output drifts

- Replace hardcoded color/font values with named tokens/mixins.
- If replacement is impossible because token is missing, keep a temporary fallback with `TODO(token-missing): ...` marker.
- Replace ad-hoc `@media` rules with canonical responsive strategy.
- Replace default exports with named exports and `index.ts` re-export.
- Replace plain `<a>` locale paths with locale-aware link wrappers when needed.
