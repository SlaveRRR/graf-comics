'use client';
import { AchievementCard, BackLink } from '@/components/shared';
import cn from 'classnames';
import { useSession } from 'next-auth/react';
import { FC } from 'react';
import styles from './index.module.scss';

const ProfileReader: FC = () => {
  const { data } = useSession();

  const achievementItems = [
    { title: 'Название', imagePath: '/achievement-icon.png' },
    { title: 'Название', imagePath: '/achievement-icon.png' },
    { title: 'Название', imagePath: '/achievement-icon.png' },
    { title: 'Название', imagePath: '/achievement-icon.png' },
    { title: 'Название', imagePath: '/achievement-icon.png' },
    { title: 'Название', imagePath: '/achievement-icon.png' },
  ];

  return (
    <div className={'container'}>
      <section className={styles['achievements']}>
        <section className={styles['achievements__heading']}>
          <BackLink mixClass={[styles['achievements__backlink']]} />
          <p className={styles['achievements__counter']}>00/00</p>
        </section>

        <div className={styles['achievements__section']}>
          <p className={styles['achievements__title']}>Достижения</p>
          <p className={styles['achievements__subtitle']}>Достижения читателя</p>
          <div className={styles['achievements__cards-container']}>
            {achievementItems.map((item, index) => (
              <AchievementCard key={index} text={item.title} imagePath={item.imagePath} />
            ))}
          </div>

          <p className={cn(styles['achievements__subtitle'], styles['achievements__subtitle--author'])}>
            Достижения автора
          </p>
          <div className={styles['achievements__cards-container']}>
            {achievementItems.map((item, index) => (
              <AchievementCard key={index + achievementItems.length} text={item.title} imagePath={item.imagePath} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileReader;
