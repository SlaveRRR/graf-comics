'use client';
import { FC, memo } from 'react';
import styles from '../../index.module.scss';
import { SubscriptionCardType } from '../../types';

const SubscriptionCardComponent: FC<SubscriptionCardType> = ({ id, price, duration, description, benefits }) => {
  return (
    <div key={id} className={styles['cards__subscribe']}>
      <div className={styles['cards__content']}>
        <div className={styles['balance__count-container']}>
          <p className={styles['cards__price']}>{price}</p>
          <img src="/currency.svg" alt="icon" className={styles['balance__count-icon']} />
        </div>

        <h2 className={styles['cards__title']}>{duration}</h2>
        <p className={styles['cards__text']}>{description}</p>
        <br />
        <p className={styles['cards__text']}>{benefits}</p>
      </div>
      <button className={styles['cards__button']}>Оформить</button>
    </div>
  );
};
export const SubscriptionCard = memo(SubscriptionCardComponent);
