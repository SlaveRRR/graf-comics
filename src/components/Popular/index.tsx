'use client';
import { Cup, Rating, Vector } from '@assets/icons';
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
        <PopularCards Icon={Rating} titleText="Топ рейтинга (месяц)" />
        <PopularCards Icon={Vector} titleText="Топ просмотров (месяц)" />
        <PopularCards Icon={Cup} titleText="Лучшее за все время" />
      </div>
    </div>
  );
};
export default Popular;
