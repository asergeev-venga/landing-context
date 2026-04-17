import { Trans } from 'react-i18next';

import styles from './example.module.scss';

interface IFeatureCard {
  id: string;
  titleKey: string;
  descriptionKey: string;
}

interface IFeatureCardsExampleProps {
  cards: IFeatureCard[];
  className?: string;
}

export const FeatureCardsExample = ({ cards, className }: IFeatureCardsExampleProps) => {
  return (
    <section className={cn(styles.cardsRoot, className)}>
      <h2 className={styles.cardsTitle}>
        <Trans i18nKey="home.features.title" />
      </h2>

      <div className={styles.cardsGrid}>
        {cards.map((card) => (
          <article key={card.id} className={styles.cardItem}>
            <h3 className={styles.cardTitle}>
              <Trans i18nKey={card.titleKey} />
            </h3>
            <p className={styles.cardDescription}>
              <Trans i18nKey={card.descriptionKey} />
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
