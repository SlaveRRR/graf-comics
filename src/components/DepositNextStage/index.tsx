'use client';
import cn from 'classnames';
import { FC, useState } from 'react';
import { Button } from '../UI';
import { BackLink } from '../shared';
import styles from './index.module.scss';
const DepositNextStage: FC = () => {
  const [selectedCard, setSelectedCard] = useState<{ currency: string; rub: string } | null>(null);

  const handleCardClick = (currency: string, rub: string) => {
    setSelectedCard({ currency, rub });
  };

  return (
    <div className={'container'}>
      <div className={styles['deposit__backLink-container']}>
        <BackLink mixClass={[styles['deposit__backLink']]} />
        <div className={styles['deposit__backLink-count-container']}>
          <h5 className={styles['deposit__backLink-count']}>9999</h5>
          <img src="/currency.svg" alt="icon" className={styles['deposit__backLink-count-icon']} />
        </div>
      </div>
      <div>
        <section className={cn(styles['deposit'], 'container')}>
          <h1 className={styles['deposit__title']}>Пополнить баланс</h1>
          <h3 className={styles['deposit__h3']}>Выберите способ оплаты</h3>
          <div className={styles['deposit__btn-container']}>
            <button className={styles['deposit__sber-btn']}>
              <img src="/sber-icon.svg" className={styles['deposit__icon-btn']} />
              <span className={styles['deposit__text-btn']}>SberPay</span>
            </button>
            <button className={styles['deposit__sbp-btn']}>
              <img src="/sbp-icon.svg" className={styles['deposit__icon-btn']} />
              <span className={styles['deposit__text-btn']}>СБП</span>
            </button>
            <button className={styles['deposit__card-btn']}>
              <img src="/card-icon.svg" className={styles['deposit__icon-btn']} />
              <span className={styles['deposit__text-btn']}>По карте</span>
            </button>
          </div>
          <div className={styles['deposit__final-container']}>
            <h1 className={styles['deposit__final-text']}>Итого:</h1>
            <h1 className={styles['deposit__final-amount']}>{selectedCard ? `${selectedCard.rub} ₽` : '0 ₽'}</h1>
          </div>
          <Button>Оплатить</Button>
        </section>
      </div>
    </div>
  );
};
export default DepositNextStage;
