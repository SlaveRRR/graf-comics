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
        <BackLink mixClass={[styles['novelty__backLink']]}/>
      </div>
      <div className={styles['novelty__container']}>
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
              isNews={[
                true,
                true,
                true,
                true,
                true,
                true,
                true,
                true,
                true,
                true,
                true,
                true,
              ]}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Novelty;
