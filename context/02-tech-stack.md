# Tech Stack

Stack contract for generated code. Use only these technologies unless explicitly requested.

## Core framework

- Next.js `14.x` (pages router conventions in this codebase)
- React `18.x`
- TypeScript `5.x` with `strict: true`

## Styling and UI

- SCSS + SCSS Modules
- Shared style tokens and mixins in `src/styles/vars.scss`
- `classnames` utility (also available as global `cn` in runtime config)

## Internationalization

- `react-i18next` + project wrappers (`i18n-server`, `i18n-browser`)
- Locales: `en`, `es`, `ca`

## Motion and media

- `framer-motion`
- `lottie-react` and `@lottiefiles/dotlottie-react`
- `lenis`
- `swiper`

### Framer Motion usage contract

- Keep motion meaningful: use animation only to explain hierarchy, state, or navigation changes.
- Prefer `transform` and `opacity` animations; avoid animating `top/left`, `width/height`, and heavy `filter` chains.
- Respect reduced motion:
  - Wrap animated trees with `MotionConfig reducedMotion="user"` when appropriate.
  - Use `useReducedMotion()` to simplify or disable non-essential motion paths.
- Use declarative variants for non-trivial animations:
  - Define shared `variants` objects outside render.
  - Reuse constants for durations/easing to avoid magic numbers.
- For enter/exit transitions, use `AnimatePresence` with stable keys and explicit `mode` when sequencing matters.
- For viewport-triggered animations, prefer `whileInView` + `viewport={{ once: true, amount: 0.2 }}` as baseline.
- Avoid long-running infinite loops unless they are purely decorative and cheap to render.
- In SSR-sensitive sections, avoid hydration flicker:
  - Prefer `initial={false}` when the first render must match server markup.
  - Avoid random or time-based initial states in render.
- Keep animated lists performant:
  - Do not animate every property of every item in large collections.
  - Stagger sparingly and only when it improves comprehension.
- For implementation recipes and copy-paste patterns, use `context/06-motion-guidelines.md`.

## Utility libraries

- `lodash`
- `dayjs`
- `uuid`

## Tooling contract

- Linting/formatting: Biome (`@biomejs/biome`)
- Additional style checks: Stylelint
- Type checks: `tsc --noEmit`
- Testing: Jest

## Build and platform notes

- SVG as React component by default via SVGR.
- SVG as URL with `?url` suffix.
- TS path aliases:
  - `@/* -> src/*`
  - `@public/* -> public/*`

## Forbidden substitutions (unless user requests)

- Do not replace SCSS Modules with Tailwind/CSS-in-JS.
- Do not replace `react-i18next` with another i18n approach.
- Do not introduce state managers unless requested (Redux, Zustand, MobX).
- Do not replace Biome conventions with ESLint/Prettier-specific output style.
