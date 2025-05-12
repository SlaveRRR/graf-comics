'use client';
import cn from 'classnames';
import { FC } from 'react';
import { Button } from '../UI';
import styles from './index.module.scss';

const ModalSubscription: FC = () => {
  return (
    <div className={styles['modalSubscription__container']}>
      <h1 className={cn(styles['text--bold'], styles['text--margin-bottom-10'], styles['text--font-size-12'])}>
        Уважаемый читатель
      </h1>
      <p className={cn(styles['text--grey'], styles['text--margin-bottom-40'], styles['text'])}>
        Спасибо, что проявил интерес к нашему комиксу! Чтобы получить доступ к продолжению истории и наслаждаться новыми
        главами без ограничений, вам потребуется оформить{' '}
        <span className={cn(styles['subscription'])}>подписку.</span>{' '}
      </p>
      <Button mixClass={[styles['btn']]}>Оформление подписки</Button>
      <p className={cn(styles['text--lilac'], styles['text'])}>
        Не упусти возможность погрузиться в увлекательный мир наших комиксов!
      </p>
    </div>
  );
};

export default ModalSubscription;
