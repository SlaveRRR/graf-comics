'use client';
import cn from 'classnames';
import { FC } from 'react';
import { Cards } from '../UI';
import BackLink from '../shared/BackLink';
import styles from './index.module.scss';

const Novelty: FC = () => {
  return (
    <div className={styles['novetly__container']}>
      <div className={'container'}>
        <BackLink mixClass={[styles['novelty__backLink']]} />
      </div>
      <div className={styles['novelty__container']}>
        <section className={cn(styles['novelty'], 'container')}>
          <div className={styles['novetly__cards-container']}>
            <Cards
              mixClass={[styles['novetly__cards']]}
              cards={[
                { name: 'Название', type: 'new' },
                { name: 'Название', type: 'new' },
                { name: 'Название', type: 'new' },
                { name: 'Название', type: 'new' },
                { name: 'Название', type: 'new' },
                { name: 'Название', type: 'new' },
                { name: 'Название', type: 'new' },
                { name: 'Название', type: 'new' },
                { name: 'Название', type: 'new' },
                { name: 'Название', type: 'new' },
                { name: 'Название', type: 'new' },
                { name: 'Название', type: 'new' },
              ]}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Novelty;
