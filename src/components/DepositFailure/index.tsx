'use client';
import { FC } from 'react';
import { Button } from '../UI';
import { BackLink } from '../shared';
import styles from './index.module.scss';
const DepositFailure: FC = () => {
  return (
    <div className={'container'}>
      <div className={styles['deposit-f__backLink-container']}>
        <BackLink mixClass={[styles['deposit-f__backLink']]} />
        <div className={styles['deposit-f__backLink-count-container']}>
          <h5 className={styles['deposit-f__backLink-count']}>9999</h5>
          <img src="/currency.svg" alt="icon" className={styles['deposit-f__backLink-count-icon']} />
        </div>
      </div>
      <div className={styles['deposit-f__container']}>
        <h1 className={styles['deposit-f__h1']}>Упс! Не хватает рыбок на счету :(</h1>
        <Button>Пополнить</Button>
      </div>
    </div>
  );
};
export default DepositFailure;
