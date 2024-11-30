'use client';
import cn from 'classnames';
import { FC } from 'react';
import { Card } from '../UI';
import { BackLink } from '../shared';
import styles from './index.module.scss';

const Popular: FC = () => {
  return (
    <div className={cn('container')}>
      <BackLink mixClass={[styles['popular__backLink']]} />
      <section className={styles['section']}>
        <div className={styles['container']}>
          <h1 className={styles['container__slogan']}>
            <img src="/rating.svg" alt="icon" className={styles['icon']} />
            Топ рейтинга (месяц)
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
      <section className={styles['section']}>
        <div className={styles['container']}>
          <h1 className={styles['container__slogan']}>
            <img src="/Vector.svg" alt="icon" className={styles['icon']} />
            Топ просмотров (месяц)
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
      <section className={styles['section']}>
        <div className={styles['container']}>
          <h1 className={styles['container__slogan']}>
            <img src="/cup.svg" alt="icon" className={styles['icon']} />
            Лучшее за все время
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
    </div>
  );
};

export default Popular;
