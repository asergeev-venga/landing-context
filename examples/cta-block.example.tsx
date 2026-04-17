import { Trans } from 'react-i18next';

import { Button, EButtonView } from '@/components/ui/Button';

import styles from './example.module.scss';

interface ICtaBlockExampleProps {
  className?: string;
  onClick?: () => void;
}

export const CtaBlockExample = ({ className, onClick }: ICtaBlockExampleProps) => {
  return (
    <section className={cn(styles.ctaRoot, className)}>
      <h2 className={styles.ctaTitle}>
        <Trans i18nKey="home.cta.title" />
      </h2>
      <p className={styles.ctaText}>
        <Trans i18nKey="home.cta.description" />
      </p>
      <Button view={EButtonView.transparent} onClick={onClick}>
        <Trans i18nKey="home.cta.button" />
      </Button>
    </section>
  );
};
