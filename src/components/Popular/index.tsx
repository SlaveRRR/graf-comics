'use client';
import { FC } from 'react';
import PopularCards from '../PopularCards';
import { BackLink } from '../shared';
import styles from './index.module.scss';
const Popular: FC = () => {
  return (
    <div>
      <div className={'container'}>
        <BackLink mixClass={[styles['popular__backLink']]} />
      </div>
      <div className={styles['container']}>
        <PopularCards icon_text="/rating.svg" title_text="Топ рейтинга (месяц)" />
        <PopularCards icon_text="/Vector.svg" title_text="Топ просмотров (месяц)" />
        <PopularCards icon_text="/cup.svg" title_text="Лучшее за все время" />
      </div>
    </div>
  );
};
export default Popular;
