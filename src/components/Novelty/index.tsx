'use client';
import cn from 'classnames';
import { FC } from 'react';
import { Cards } from '../UI';
import BackLink from '../shared/BackLink';
import styles from './index.module.scss';

const Novelty: FC = () => {
  return (
    <div className={cn(styles['novetly__container'], 'container')}>
      <BackLink mixClass={[styles['novelty__backLink']]} />
      <section className={cn(styles['novelty'], 'container')}>
        <div className={styles['novetly__cards-container']}>
          <Cards
            mixClass={[styles['novetly__cards']]}
            names={[
              'Название',
              'Название',
              'Название',
              'Название',
              'Название',
              'Название',
              'Название',
              'Название',
              'Название',
              'Название',
              'Название',
              'Название',
            ]}
          />
        </div>
      </section>
    </div>
  );
};

export default Novelty;
