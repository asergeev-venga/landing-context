import type { ReactNode } from 'react';
import { Trans } from 'react-i18next';
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion';

import { Button, EButtonView } from '@/components/ui/Button';

import styles from './example.module.scss';

interface IMotionHeroExampleProps {
  className?: string;
}

interface IMotionFeatureItem {
  id: string;
  titleKey: string;
  descriptionKey: string;
}

interface IMotionFeatureListExampleProps {
  items: IMotionFeatureItem[];
  className?: string;
}

interface IMotionModalExampleProps {
  isOpen: boolean;
  className?: string;
  children: ReactNode;
}

interface IMotionButtonExampleProps {
  onClick?: () => void;
  className?: string;
}

interface ISsrSafeFadeExampleProps {
  className?: string;
  children: ReactNode;
}

const EASE_STANDARD: [number, number, number, number] = [0.22, 1, 0.36, 1];

const heroVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_STANDARD },
  },
};

const listContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.08,
    },
  },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: EASE_STANDARD },
  },
};

export const MotionHeroExample = ({ className }: IMotionHeroExampleProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      className={cn(styles.heroRoot, className)}
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={heroVariants}
    >
      <h1 className={styles.heroTitle}>
        <Trans i18nKey="home.hero.title" />
      </h1>
      <p className={styles.heroSubtitle}>
        <Trans i18nKey="home.hero.subtitle" />
      </p>
    </motion.section>
  );
};

export const MotionFeatureListExample = ({ items, className }: IMotionFeatureListExampleProps) => {
  return (
    <motion.section
      className={cn(styles.cardsRoot, className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={listContainerVariants}
    >
      <h2 className={styles.cardsTitle}>
        <Trans i18nKey="home.features.title" />
      </h2>

      <div className={styles.cardsGrid}>
        {items.map((item) => (
          <motion.article key={item.id} className={styles.cardItem} variants={listItemVariants}>
            <h3 className={styles.cardTitle}>
              <Trans i18nKey={item.titleKey} />
            </h3>
            <p className={styles.cardDescription}>
              <Trans i18nKey={item.descriptionKey} />
            </p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export const MotionModalExample = ({ isOpen, className, children }: IMotionModalExampleProps) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen ? (
        <motion.div
          key="overlay"
          className={cn(styles.modalOverlay, className)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            key="panel"
            className={styles.modalPanel}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.99 }}
            transition={{ duration: 0.28, ease: EASE_STANDARD }}
          >
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export const MotionButtonExample = ({ onClick, className }: IMotionButtonExampleProps) => {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -1, scale: 1.01 }}
      whileTap={{ y: 0, scale: 0.99 }}
      transition={{ duration: 0.15 }}
    >
      <Button view={EButtonView.orange} onClick={onClick}>
        <Trans i18nKey="buttons.getStarted" />
      </Button>
    </motion.div>
  );
};

export const SsrSafeFadeExample = ({ className, children }: ISsrSafeFadeExampleProps) => {
  return (
    <motion.div className={className} initial={false} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
      {children}
    </motion.div>
  );
};
