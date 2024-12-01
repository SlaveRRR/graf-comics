'use client';
import { FC } from 'react';
import { Card } from '../UI';
import styles from './index.module.scss';

type Props = {
    icon_text: string;
    title_text: string;
}

const PopularCards: FC<Props> = ({icon_text, title_text}) => {
    return (
      <section className={styles['section']}>
        <div className={styles['container']}>
          <h1 className={styles['container__slogan']}>
            <img src={icon_text} alt="icon" className={styles['icon']} />
            {title_text}
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