'use client';
import cn from 'classnames';
import React, { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  type: string;
  data: string;
  amount: string;
  mixClass?: string[];
};

const DepositHistoryCard: FC<Props> = ({ type, data, amount, mixClass = [] }) => {
  return (
    <div className={styles['card']}>
      <div className={cn(styles['card__img'], ...mixClass)}>
        <div className={styles['card__text-container']}>
          <p className={styles['card__type-text']}>{type}</p>
          <p className={styles['card__data-text']}>{data}</p>
        </div>
        <div className={styles['card__amount-container']}>
          {type == 'Пополнение' ? (
            <p className={styles['card__amount-text-s']}>{amount}</p>
          ) : (
            <p className={styles['card__amount-text-e']}>{amount}</p>
          )}
          <img src="/currency.svg" alt="icon" className={styles['card__amount-icon']} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(DepositHistoryCard);
