# Code Patterns

Use these patterns as defaults when generating new sections/components.

## Component pattern (TSX)

```tsx
import type { HTMLAttributes } from 'react';
import { Trans } from 'react-i18next';

import styles from './HeroSection.module.scss';

interface IHeroSectionProps extends HTMLAttributes<HTMLElement> {
  titleKey: string;
}

export const HeroSection = ({ titleKey, className, ...otherProps }: IHeroSectionProps) => {
  return (
    <section className={cn(styles.root, className)} {...otherProps}>
      <h1 className={styles.title}>
        <Trans i18nKey={titleKey} />
      </h1>
    </section>
  );
};
```

## SCSS module pattern

```scss
@use '@/styles/vars' as *;

.root {
  background: $white-base;
  padding: 56px;

  @include media(mobile) {
    padding: 24px;
  }
}

.title {
  @include text-h2-v2;
  color: $black-base;
}
```

## Export pattern

```ts
export { HeroSection } from './HeroSection';
```

## Import ordering pattern

```ts
// 1) React + external packages
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

// 2) Public assets
import ArrowIcon from '@public/img/icons/arrow.svg';

// 3) Internal aliases
import { Button } from '@/components/ui/Button';

// 4) Styles last
import styles from './CtaSection.module.scss';
```

## i18n pattern

- Prefer `<Trans i18nKey=\"...\" />` for layout text nodes.
- Use `t('...')` for attributes and dynamic strings.
- Keep keys in existing namespace structure.

## Framer Motion pattern

```tsx
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion';

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: 8, transition: { duration: 0.25 } },
};

interface IAnimatedBlockProps {
  isVisible: boolean;
}

export const AnimatedBlock = ({ isVisible }: IAnimatedBlockProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode=\"wait\">
      {isVisible ? (
        <motion.div
          key=\"content\"
          initial={shouldReduceMotion ? false : 'hidden'}
          animate=\"visible\"
          exit=\"exit\"
          variants={fadeUpVariants}
        >
          {/* content */}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
```

- Keep variants outside render and type them with `Variants`.
- Default to transform/opacity transitions.
- Add reduced-motion branch for non-essential movement.
- Use stable keys with `AnimatePresence` for predictable enter/exit behavior.

## Routing/link pattern

- For locale-aware links, prefer project wrapper components (for example `StaticI18nLink`) over raw path concatenation.

## When generating multi-file components

Default output set:

1. `ComponentName/ComponentName.tsx`
2. `ComponentName/ComponentName.module.scss`
3. `ComponentName/index.ts`
4. `ComponentName/types.ts` (optional)
