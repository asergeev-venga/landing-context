# Acceptance Checklist

Use this checklist to evaluate generated output before integrating into `Landing`.

Scoring:

- `Pass` = requirement satisfied
- `Fail` = requirement violated
- `N/A` = not relevant for this task

Final gate:

- Any `P0: Fail` => reject output
- More than 2 `P1: Fail` => request regeneration

## P0 (Mandatory)

- [ ] Uses TypeScript + arrow function components.
- [ ] Uses named exports for non-page components.
- [ ] Uses alias imports (`@/`, `@public/`) where relevant.
- [ ] Uses SCSS Modules for component styling.
- [ ] Reuses existing tokens/mixins from `vars.scss`; avoids arbitrary hardcoded replacements.
- [ ] Uses only v2 typography mixins (`text-*-v2`, `text-button-v2`) unless task explicitly overrides this rule.
- [ ] Uses i18n-compatible output (`Trans` and/or `t` where appropriate).
- [ ] No `console.log`.
- [ ] Avoids introducing non-approved stack changes.

## P1 (Important)

- [ ] Component/file structure follows project pattern.
- [ ] Import order follows project conventions.
- [ ] Mobile and desktop behavior both addressed.
- [ ] Accessibility basics included (`aria-label`, semantic tags, button type).
- [ ] Generated code is Biome/stylelint-friendly with no obvious formatting drift.

## P2 (Stylistic)

- [ ] Class and symbol names are concise and consistent.
- [ ] Code avoids unnecessary abstractions.
- [ ] Motion logic is separated when complexity warrants it.

## Review report template

```md
Task: <task name>
Date: <YYYY-MM-DD>
Reviewer: <name>

P0:
- <item>: Pass/Fail

P1:
- <item>: Pass/Fail

P2:
- <item>: Pass/Fail

Result:
- Accept / Regenerate / Accept with fixes

Main fixes required:
- <fix 1>
- <fix 2>
```
