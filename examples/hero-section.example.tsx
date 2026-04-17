import type { HTMLAttributes } from 'react';
import { Trans } from 'react-i18next';

import { Button, EButtonView } from '@/components/ui/Button';

import styles from './example.module.scss';

interface IHeroSectionExampleProps extends HTMLAttributes<HTMLElement> {
  onCtaClick?: () => void;
}

export const HeroSectionExample = ({ className, onCtaClick, ...otherProps }: IHeroSectionExampleProps) => {
  return (
    <section className={cn(styles.heroRoot, className)} {...otherProps}>
      <h1 className={styles.heroTitle}>
        <Trans i18nKey="home.hero.title" />
      </h1>
      <p className={styles.heroSubtitle}>
        <Trans i18nKey="home.hero.subtitle" />
      </p>
      <Button view={EButtonView.black} onClick={onCtaClick}>
        <Trans i18nKey="buttons.getStarted" />
      </Button>
    </section>
  );
};
