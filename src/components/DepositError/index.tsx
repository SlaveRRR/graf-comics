'use client';
import { FC } from 'react';
import { BackLink } from '../shared';
import styles from './index.module.scss';
const DepositError: FC = () => {
  return (
    <div className={'container'}>
      <div className={styles['deposit-e__backLink-container']}>
        <BackLink mixClass={[styles['deposit-e__backLink']]} />
        <div className={styles['deposit-e__backLink-count-container']}>
          <h5 className={styles['deposit-e__backLink-count']}>9999</h5>
          <img src="/currency.svg" alt="icon" className={styles['deposit-e__backLink-count-icon']} />
        </div>
      </div>
      <h1 className={styles['deposit-e__h1']}>Произошла какая-то ошибка, попробуйте еще раз через пару минут :(</h1>
    </div>
  );
};
export default DepositError;
