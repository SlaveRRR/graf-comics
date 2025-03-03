'use client';
import cn from 'classnames';
import { FC, useState } from 'react';
import { Button } from '../UI';
import DepositValuesCard from '../UI/DepositValuesCard';
import { BackLink } from '../shared';
import styles from './index.module.scss';
const Deposit: FC = () => {
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
          <h3 className={styles['deposit__h3']}>Выберите размер</h3>
          <div className={styles['deposit__amount-container']}>
            {[
              { currency: '100', rub: '100', discount: '', isDiscount: false },
              { currency: '300', rub: '250', discount: '300', isDiscount: true },
              { currency: '1000', rub: '800', discount: '1000', isDiscount: true },
            ].map(({ currency, rub, discount, isDiscount }) => (
              <div key={currency} onClick={() => handleCardClick(currency, rub)} className={styles['card-container']}>
                <DepositValuesCard
                  currencyAmount={currency}
                  rubAmount={rub}
                  discountAmount={discount}
                  isDiscount={isDiscount}
                  isActive={selectedCard?.currency === currency}
                />
              </div>
            ))}
          </div>
          <h3 className={styles['deposit__promo-title']}>Промокод</h3>
          <input type="text" id="promo" placeholder="Введите промокод" className={styles['deposit__promo-field']} />
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
export default Deposit;
