# landing-context

Canonical AI context for generating code that matches the `Landing` codebase.

## Purpose

This project packages the non-negotiable conventions of `Landing` (stack, architecture, styling tokens, and code patterns) in an AI-friendly format.

Primary target is Figma Make AI, but the context can be used with any code-generation model.

## Structure

- `context/01-hard-rules.md` - strict rules and priorities
- `context/02-tech-stack.md` - allowed stack and tooling contract
- `context/03-design-system.md` - tokens, breakpoints, mixins
- `context/04-code-patterns.md` - canonical implementation patterns
- `context/05-do-dont.md` - concise anti-pattern guide
- `context/06-motion-guidelines.md` - motion guidelines and recipes
- `context/07-prompt-contract.md` - reusable prompt for Figma Make AI
- `examples/` - small copy-paste examples
- `checks/acceptance-checklist.md` - output quality scoring rubric
- `checks/golden-tasks.md` - benchmark generation scenarios

## How to use with Figma Make AI

1. Start from `context/07-prompt-contract.md`.
2. Add target task (for example: "build a feature section with 3 cards").
3. Include relevant files from `context/` as inline context.
4. Generate code.
5. Review output with `checks/acceptance-checklist.md`.

## Priorities

Rules are tagged by priority:

- `P0` - mandatory, reject output on violation
- `P1` - important, fix before merge
- `P2` - stylistic, improve when cheap

## Maintenance

Update this context whenever one of these changes in `Landing`:

- `.cursorrules`
- `src/styles/vars.scss`
- `tsconfig.json`
- `package.json` (major tooling or stack changes)
- core architecture conventions

