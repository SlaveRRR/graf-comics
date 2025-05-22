'use client';
import cn from 'classnames';
import { FC } from 'react';
import { Button } from '../UI';
import DepositHistoryCard from '../UI/DepositHistoryCard';
import { BackLink } from '../shared';
import styles from './index.module.scss';
const Balance: FC = () => {
  return (
    <div className={'container'}>
      <div className={styles['balance__backLink-container']}>
        <BackLink mixClass={[styles['balance__backLink']]} />
        <div className={styles['balance__backLink-count-container']}>
          <h5 className={styles['balance__backLink-count']}>9999</h5>
          <img src="/currency.svg" alt="icon" className={styles['balance__backLink-count-icon']} />
        </div>
      </div>
      <div>
        <section className={cn(styles['balance'], 'container')}>
          <h1 className={styles['balance__h1']}>Мой кошелек</h1>
          <h3 className={styles['balance__h3']}>У вас на счету:</h3>
          <div className={styles['balance__count-container']}>
            <h1 className={styles['balance__count']}>9999</h1>
            <img src="/currency.svg" alt="icon" className={styles['balance__count-icon']} />
          </div>
          <Button>Пополнить</Button>
          <h3 className={styles['balance__history-title']}>История операций</h3>
          <div>
            <DepositHistoryCard type="Пополнение" data="14.04.24" amount="+9999" mixClass={[styles['']]} />
            <DepositHistoryCard type="Списание" data="14.04.24" amount="-9999" mixClass={[styles['']]} />
            <DepositHistoryCard type="Пополнение" data="14.04.24" amount="+9999" mixClass={[styles['']]} />
            <DepositHistoryCard type="Списание" data="14.04.24" amount="-9999" mixClass={[styles['']]} />
            <DepositHistoryCard type="Пополнение" data="14.04.24" amount="+9999" mixClass={[styles['']]} />
          </div>
        </section>
      </div>
    </div>
  );
};
export default Balance;
