# Design System

Canonical style contract for AI output.

Always use names exactly as defined in `src/styles/vars.scss`.

## Import rule

For SCSS modules:

```scss
@use '@/styles/vars' as *;
```

Do not invent a third pattern.

## Breakpoints and responsive mixins

### Canonical sizes

- `$min-tablet-size: 768px`
- `$min-desktop-size: 1024px`
- `$s-desktop-size: 1440px`
- `$m-desktop-size: 1620px`
- `$l-desktop-size: 1920px`

### `@mixin media(...)` meaning

- `mobile`: `width < 768px`
- `tablet`: `768px <= width <= 1024px`
- `desktop`: `width > 1024px`
- `s-desktop`: `1024px < width < 1440px`
- `m-desktop`: `1440px <= width < 1620px`
- `l-desktop`: `1620px <= width < 1920px`
- `xl-desktop`: `width >= 1920px`

Use `@include media(...)` and avoid custom breakpoint APIs.

## Core color tokens (resolved)

### Surfaces

- `$white-base: #fffef8` (primary light surface)
- `$white-second: #f7f6ed` (secondary light surface)
- `$white-third: #ecebe4` (tertiary light surface and subtle separators)
- `$black-base: #111a29` (primary dark text/surface)
- `$black-second: #2b374a` (secondary dark tone)

### Brand and accent

- `$orange-base: #ff6000` (primary accent and hover target)
- `$orange-tint: #ff7b2b` (lighter orange accent)
- `$lime-base: #cbea00` (brand lime accent)
- `$lime-tint: #e6f96a` (lighter lime accent)
- `$blue-base: #78a6ff` (supporting accent)
- `$blue-second: #007aff` (strong blue action/accent)
- `$mint-base: #70f8c4` (supporting positive accent)
- `$pink-base: #ff4365` (supporting contrast accent)
- `$yellow-base: #ffedad` (soft highlight background)

### Semantic

- `$semantic-success: #32c341` (success state)
- `$red-error: #ea3636` (error state)

Always prefer token names over raw hex values.

## Button primitives

- `$button-radius: 40px`
- `$button-height: 48px`
- `$button-small-radius: 16px`
- `$button-small-height: 30px`
- `$button-black-color: $black-base`
- `$button-black-color-hover: $orange-base`
- `$button-transparent-border-color: $white-base`
- `$button-transparent-border-color-hover: $orange-base`

## Typography mixins (v2 only)

### Allowed mixins

- `text-mega-v2`
- `text-h1-v2`
- `text-h2-v2`
- `text-h3-v2`
- `text-h4-v2`
- `text-subtitle-v2`
- `text-body-l-v2`
- `text-body-m-v2`
- `text-body-s-v2`
- `text-button-v2`

### Shared text-box behavior

`text-h*-v2`, `text-mega-v2`, `text-subtitle-v2`, `text-body-*-v2` include:

- `text-box-edge: cap alphabetic`
- `text-box-trim: trim-both`

### Resolved values

- `text-h1-v2`: 98px / 84px / 44px (desktop/tablet/mobile), 800, line-height 100%, uppercase
- `text-h2-v2`: 64px / 56px / 34px (desktop/tablet/mobile), 800, line-height 100%, uppercase
- `text-h3-v2`: 40px / 40px / 28px (desktop/tablet/mobile), 800, line-height 100%, uppercase
- `text-h4-v2`: 32px / 28px / 22px (desktop/tablet/mobile), 600, line-height 110% then 100% on tablet/mobile
- `text-mega-v2`: 180px / 112px / 64px (desktop/tablet/mobile), 800, line-height 100%, uppercase
- `text-subtitle-v2`: 24px / 20px / 18px (desktop/tablet/mobile), 500, line-height 130%
- `text-body-l-v2`: 18px / 18px / 16px (desktop/tablet/mobile), 500, line-height 120%
- `text-body-m-v2`: 16px / 16px / 14px (desktop/tablet/mobile), 500, line-height 130%
- `text-body-s-v2`: 14px / 14px / 12px (desktop/tablet/mobile), 500, line-height 130%
- `text-button-v2`: 16px, 700, line-height 100%

All mixins above use `font-family: LabilGrotesk, sans-serif`.

## Excluded from default generation

Legacy items below are forbidden by default and may be used only when a task explicitly requests legacy support:

- Deprecated breakpoints: `$max-tablet-size`, `$max-phone-size`, `$min-phone-size`
- Legacy typography mixins: `text-h1`, `text-h2`, `text-h3`, `text-h4`, `text-subtitle`, `text-body-l`, `text-body-m`, `text-body-s`, `text-mega`
- Domain-specific ticker tokens/maps: `$tickers`, `$coins-*`, `$ticker-bg-colors`
- Old input/control text tokens unless working on legacy form components

## Missing-token fallback policy

If a required style token is missing in `vars.scss`:

1. Prefer a close existing token first.
2. If no safe equivalent exists, temporary hardcode is allowed only with a marker comment:
   - `/* TODO(token-missing): replace with vars.scss token for <property/context> */`
3. Any such fallback must be reported in generation output assumptions/self-check.

## Global style layering

Global stylesheet uses CSS layer order:

1. `defaults`
2. `libs`
3. `components`
4. `overrides`

When AI generates global styles, preserve this layering strategy.

## Design-system generation checklist

Generated styles should:

1. Reuse existing tokens and mixins.
2. Keep responsive logic in canonical media conventions.
3. Avoid custom fonts or arbitrary line-height systems.
4. Keep visual behavior consistent with button and typography primitives.
