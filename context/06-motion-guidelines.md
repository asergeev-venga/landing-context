# Motion Guidelines (Framer Motion)

Practical rules for generating animation code in this project.

Use this file together with `01-hard-rules.md` and `02-tech-stack.md`.
For implementation-ready code recipes, use `examples/motion-recipes.example.tsx` as the single source of truth.

## Goals

- Improve comprehension, not decoration.
- Keep interactions responsive on low-end devices.
- Respect accessibility preferences (`prefers-reduced-motion`).
- Keep behavior deterministic in SSR environments.

## Baseline defaults

- Prefer animating `transform` and `opacity`.
- Avoid animating `top`, `left`, `width`, `height` unless there is no viable alternative.
- Keep transitions short:
  - Enter: `0.3s - 0.5s`
  - Exit: `0.2s - 0.3s`
- Use one easing family consistently in a section.
- Limit stagger effects to small groups.

## Shared motion constants pattern

Rules:

- Keep `Variants` typed.
- Define reusable variants and easings outside component render.
- Avoid random values for initial states.
- Reference implementation: `MotionHeroExample` in `examples/motion-recipes.example.tsx:70`.
- Shared constants reference:
  - `EASE_STANDARD` in `examples/motion-recipes.example.tsx:40`
  - `heroVariants` in `examples/motion-recipes.example.tsx:42`
  - `listContainerVariants` in `examples/motion-recipes.example.tsx:51`
  - `listItemVariants` in `examples/motion-recipes.example.tsx:61`

## Recipe 1: Hero reveal on first viewport entry

Use for top-section headings and supporting copy.

Use when:

- Content appears once and should not replay while scrolling.

Avoid when:

- The same element mounts/unmounts often due to state toggles.
- Reference implementation: `MotionHeroExample` in `examples/motion-recipes.example.tsx:70`.

## Recipe 2: Staggered cards list

Use for small card groups (for example 3-8 items).

Rules:

- Keep stable keys.
- Avoid heavy stagger on long lists.
- Prefer simple opacity+translate for list items.
- Reference implementation: `MotionFeatureListExample` in `examples/motion-recipes.example.tsx:91`.

## Recipe 3: Modal enter/exit with AnimatePresence

Use for dialogs, drawers, and conditional overlays.

Rules:

- Wrap conditional mount/unmount with `AnimatePresence`.
- Keep keys explicit and stable.
- Animate overlay and panel separately.
- Reference implementation: `MotionModalExample` in `examples/motion-recipes.example.tsx:120`.

## Recipe 4: Button hover/tap feedback

Use for interactive controls with clear affordance.

Rules:

- Keep amplitude subtle.
- Avoid overshoot or bounce for primary CTA unless explicitly requested.
- Reference implementation: `MotionButtonExample` in `examples/motion-recipes.example.tsx:148`.

## Recipe 5: SSR-safe first paint

When server markup and first client frame must match:

Use `initial={false}` when initial animation would create hydration flicker or mismatch.
- Reference implementation: `SsrSafeFadeExample` in `examples/motion-recipes.example.tsx:163`.

## Reduced motion checklist

- For non-essential animation, provide reduced branch:
  - Use fade-only transition, or disable transition.
- Preserve content order and readability without movement.
- Never hide critical information behind motion timing.

## Performance checklist

- Keep animated elements count low in viewport.
- Avoid combining many blur/filter/shadow animations simultaneously.
- Avoid infinite loops in content-critical sections.
- Prefer CSS hover transitions for trivial micro-interactions when Framer Motion is unnecessary.

## Quick decision matrix

- `whileInView`: section reveal on scroll.
- `AnimatePresence`: conditional render with exit.
- `layout` / `layoutId`: only when layout continuity is required.
- `whileHover` / `whileTap`: small interaction feedback.

## Review-ready criteria

Animation implementation is acceptable when:

- It has a clear UX purpose.
- It includes reduced-motion behavior where needed.
- It uses performant properties.
- It avoids SSR/hydration visual mismatch.
- It stays consistent with shared easing/timing patterns.
