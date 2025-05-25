'use client';
import { useTheme } from '@/context/themeProvider';
import cn from 'classnames';
import { FC } from 'react';
import { Card } from '../UI';
import styles from './index.module.scss';
import { PopularCardsProps } from './types';

const PopularCards: FC<PopularCardsProps> = ({ titleText, Icon }) => {
  const { theme } = useTheme();

  return (
    <section className={styles['section']}>
      <div className={styles['container']}>
        <h1 className={styles['container__slogan']}>
          <Icon
            className={cn(styles['icon'], {
              [styles['icon--dark']]: theme === 'dark',
            })}
          />
          {titleText}
        </h1>
        <div className={styles['popular-cards']}>
          <Card mixClass={[styles['cards-comics']]} text="Название" />
          <Card mixClass={[styles['cards-comics']]} text="Название" />
          <Card mixClass={[styles['cards-comics']]} text="Название" />
          <Card mixClass={[styles['cards-comics']]} text="Название" />
          <Card mixClass={[styles['cards-comics']]} text="Название" />
          <Card mixClass={[styles['cards-comics']]} text="Название" />
        </div>
      </div>
    </section>
  );
};
export default PopularCards;
