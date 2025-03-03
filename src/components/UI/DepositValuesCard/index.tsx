'use client';
import cn from 'classnames';
import React, { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  currencyAmount: string;
  rubAmount: string;
  discountAmount: string;
  isDiscount: boolean;
  mixClass?: string[];
  isActive?: boolean;
};

const DepositValuesCard: FC<Props> = ({
  currencyAmount,
  rubAmount,
  discountAmount,
  isDiscount,
  isActive,
  mixClass = [],
}) => {
  return (
    <div className={cn(styles.card, isActive && styles.active)}>
      <div className={styles['card__img']} />
      <p className={styles['card__currency-text']}>{currencyAmount} рыбок</p>
      <div className={styles['card__rub-container']}>
        {isDiscount ? <p className={styles['card__discount-text']}>{discountAmount}</p> : null}
        <p className={styles['card__amount-text']}>{rubAmount} ₽</p>
      </div>
    </div>
  );
};

export default React.memo(DepositValuesCard);
