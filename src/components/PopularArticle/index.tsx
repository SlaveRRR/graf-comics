'use client';
import { BackLink } from '@/components/shared';
import { FC } from 'react';
import { PopularArticleItem } from './components';
import { popularArticleData } from './data';
import styles from './index.module.scss';
import { PopularArticleProps } from './types';

const PopularArticle: FC<PopularArticleProps> = ({ plans = popularArticleData }) => {
  return (
    <div className={'container'}>
      <div className={styles['backlink-cont']}>
        <BackLink mixClass={[styles['balance__backLink']]} />
      </div>
      <section className={styles['articles']}>
        {plans.map((plan) => (
          <PopularArticleItem key={plan.id} {...plan} />
        ))}
      </section>
    </div>
  );
};
export default PopularArticle;
