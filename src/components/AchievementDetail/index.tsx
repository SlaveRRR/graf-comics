'use client';
import { BackLink } from '@/components/shared';
import cn from 'classnames';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import styles from './index.module.scss';

type Props = {};

const AchievementDetail: FC<Props> = ({}) => {
  const router = useRouter();

  return (
    <section className={cn(styles['achievement-detail'], 'container')}>
      <BackLink mixClass={[styles['achievement-detail__backlink']]} />

      <section className={styles['achievement-detail__main-content']}>
        <img src="/post.svg" alt="Иконка достижения" className={styles['achievement-detail__img']} />
        <p className={styles['achievement-detail__title']}>
          Название
          <br />
          &nbsp;достижения
        </p>
        <p className={styles['achievement-detail__description']}>Описание достижения</p>
      </section>
    </section>
  );
};

export default AchievementDetail;
