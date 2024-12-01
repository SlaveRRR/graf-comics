'use client';
import cn from 'classnames';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  text: string;
  mixClass?: string[];
  imagePath: string;
};

const AchievementCard: FC<Props> = ({ text, mixClass = [], imagePath }) => {
  const router = useRouter();

  return (
    <div className={styles['achievement-card']}>
      <div
        onClick={() => router.push('/achievement-detail')}
        className={cn(styles['achievement-card__container'], ...mixClass)}
      >
        <img src={imagePath} alt={text} className={styles['achievement-card__image']} />
      </div>

      <p onClick={() => router.push('/achievement-detail')} className={styles['achievement-card__text']}>
        {text}
      </p>
    </div>
  );
};

export default React.memo(AchievementCard);
