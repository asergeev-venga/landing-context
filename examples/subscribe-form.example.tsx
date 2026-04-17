import type { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, EButtonView } from '@/components/ui/Button';

import styles from './example.module.scss';

interface ISubscribeFormExampleProps {
  email: string;
  isLoading?: boolean;
  onEmailChange: (value: string) => void;
  onSubmit: () => void;
  className?: string;
}

export const SubscribeFormExample = ({
  email,
  isLoading = false,
  onEmailChange,
  onSubmit,
  className,
}: ISubscribeFormExampleProps) => {
  const { t } = useTranslation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form className={cn(styles.formRoot, className)} onSubmit={handleSubmit}>
      <label htmlFor="newsletter-email" className={styles.formLabel}>
        {t('subscribe.emailLabel')}
      </label>

      <input
        id="newsletter-email"
        type="email"
        value={email}
        className={styles.formInput}
        placeholder={t('subscribe.emailPlaceholder') as string}
        onChange={(event) => onEmailChange(event.target.value)}
        aria-label={t('subscribe.emailLabel') as string}
      />

      <Button view={EButtonView.orange} type="submit" disabled={isLoading}>
        {t('subscribe.buttonLabel')}
      </Button>
    </form>
  );
};
