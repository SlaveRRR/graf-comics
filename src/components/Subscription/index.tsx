'use client';
import { BackLink } from '@/components/shared';
import cn from 'classnames';
import { useSession } from 'next-auth/react';
import { FC } from 'react';
import { Button } from '../UI';
import { subscriptionData } from './data';
import styles from './index.module.scss';

export interface SubscriptionCard {
  id: number;
  price: number;
  duration: string;
  description: string;
  benefits: string;
}
interface SubscriptionProps {
  plans?: SubscriptionCard[];
}
const Subscription: FC<SubscriptionProps> = ({ plans = subscriptionData }) => {
  const { data: session } = useSession();
  return (
    <div className={'container'}>
      <div className={styles['balance__backLink-container']}>
        <BackLink mixClass={[styles['balance__backLink']]} />
        <div className={styles['balance__backLink-count-container']}>
          <h5 className={styles['balance__backLink-count']}>9999</h5>
          <img src="/currency.svg" alt="icon" className={styles['balance__backLink-count-icon']} />
        </div>
      </div>

      <section className={cn(styles['balance'], 'container')}>
        <h1 className={styles['balance__h1']}>Оформление подписки</h1>
        <h3 className={styles['balance__h3']}>У вас на счету:</h3>
        <div className={styles['balance__count-container']}>
          <h1 className={styles['balance__count']}>9999</h1>
          <img src="/currency.svg" alt="icon" className={styles['balance__count-icon']} />
        </div>
        <Button>Пополнить</Button>
      </section>

      <section className={styles['cards']}>
        {plans.map((plan: SubscriptionCard) => (
          <div key={plan.id} className={styles['cards__subscribe']}>
            <div className={styles['cards__content']}>
              <div className={styles['balance__count-container']}>
                <p className={styles['cards__price']}>{plan.price}</p>
                <img src="/currency.svg" alt="icon" className={styles['balance__count-icon']} />
              </div>

              <h2 className={styles['cards__title']}>{plan.duration}</h2>
              <p className={styles['cards__text']}>{plan.description}</p>
              <br />
              <p className={styles['cards__text']}>{plan.benefits}</p>
            </div>
            <button className={styles['cards__button']}>Оформить</button>
          </div>
        ))}
      </section>

      <section>
        <p className={styles['subscription-link']}>
          <a className={styles['subscription-link__rule']} href="#">
            Правила
          </a>{' '}
          и
          <a className={styles['subscription-link__rule']} href="#">
            {' '}
            условия пользования{' '}
          </a>
          подпиской
        </p>
      </section>
    </div>
  );
};

export default Subscription;
