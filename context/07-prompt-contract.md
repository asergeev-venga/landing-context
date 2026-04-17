# Prompt Contract

Copy-paste this contract into Figma Make AI (or another generator) and fill the placeholders.

---

## System role

You are generating production-oriented code for a Next.js + React + TypeScript + SCSS Modules landing project.

Your output must match the conventions in the provided context files.

If a requirement conflicts with the context priorities, follow:

1. P0 hard rules
2. P1 important rules
3. P2 stylistic rules

---

## Required context files

Use these files as mandatory context:

- `context/01-hard-rules.md`
- `context/02-tech-stack.md`
- `context/03-design-system.md`
- `context/04-code-patterns.md`
- `context/05-do-dont.md`
- `context/06-motion-guidelines.md` (required when task includes animation/motion behavior)

Optional but recommended:

- `examples/*`
- `checks/acceptance-checklist.md`

---

## Task input (fill before run)

Project task:

`<describe section/component to build>`

Target files to generate:

`<list files>`

Behavior and UX expectations:

`<animations/interactions/accessibility/responsive rules>`

Translation keys to use:

`<list keys or namespace>`

Design constraints:

`<palette/typography/spacing constraints from figma>`

---

## Hard generation constraints

1. Use TypeScript, arrow function components, and named exports.
2. Use alias imports (`@/`, `@public/`) where applicable.
3. Use SCSS Modules for component styling.
4. Use existing design tokens and typography mixins from `vars.scss`.
5. Use v2 typography mixins only (`text-h*-v2`, `text-body-*-v2`, `text-subtitle-v2`, `text-button-v2`) unless the task explicitly requests legacy support.
6. If a required style token is missing, temporary hardcode is allowed only with `TODO(token-missing): ...` comment in SCSS and explicit note in `Assumptions` and `Self-check`.
7. Keep import order and component structure consistent with context.
8. Use i18n-aware output (`Trans`/`t` patterns from context).
9. Do not introduce libraries not listed in allowed stack.

---

## Output format (strict)

Return output in this order:

1. `Assumptions` (short bullet list)
2. `Files` (each file path + complete file content)
3. `Self-check` against `checks/acceptance-checklist.md` with Pass/Fail per P0 and P1 item
4. `Open questions` only if blocking

If any P0 item cannot be satisfied, stop and explain why instead of guessing.

---

## Quality gate

Before finalizing, verify:

- No hardcoded style values when equivalent tokens/mixins exist.
- No legacy typography mixins unless task explicitly requests legacy support.
- Any token-missing hardcoded fallback is marked with `TODO(token-missing): ...` and documented in `Assumptions` and `Self-check`.
- No default export in non-page components.
- No `any` unless absolutely unavoidable and justified.
- No `console.log`.
- Responsive behavior includes mobile handling.
- User-facing strings are i18n-ready.

---

## Example invocation

Build a new homepage feature section with:

- headline
- 3 feature cards
- CTA button
- mobile and desktop layouts

Output files:

- `src/modules/HomePage/components/NewFeatureSection/NewFeatureSection.tsx`
- `src/modules/HomePage/components/NewFeatureSection/NewFeatureSection.module.scss`
- `src/modules/HomePage/components/NewFeatureSection/index.ts`

Use keys:

- `home.newFeature.title`
- `home.newFeature.cards.*`
- `home.newFeature.cta`
