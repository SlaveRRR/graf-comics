'use client';
import { FC } from 'react';
import { BackLink } from '../shared';
import styles from './index.module.scss';
const DepositSuccess: FC = () => {
  return (
    <div className={'container'}>
      <div className={styles['deposit-s__backLink-container']}>
        <BackLink mixClass={[styles['deposit-s__backLink']]} />
        <div className={styles['deposit-s__backLink-count-container']}>
          <h5 className={styles['deposit-s__backLink-count']}>9999</h5>
          <img src="/currency.svg" alt="icon" className={styles['deposit-s__backLink-count-icon']} />
        </div>
      </div>
      <div className={styles['deposit-s__container']}>
        <h1 className={styles['deposit-s__h1']}>Успешно! Скорее проверяй счет:</h1>
        <div className={styles['deposit-s__count-container']}>
          <h1 className={styles['deposit-s__count']}>100</h1>
          <img src="/currency.svg" alt="icon" className={styles['deposit-s__count-icon']} />
        </div>
      </div>
    </div>
  );
};
export default DepositSuccess;
