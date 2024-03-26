'use client';
import React, { FC } from 'react';
import cn from 'classnames';
import { Stats } from '../shared';
import { Cards, Tabs } from '../UI';
import { useSession } from 'next-auth/react';
import { ctx } from '@/context/contextProvider';
import styles from './index.module.scss';

const ProfileReader: FC = () => {
  const { data } = useSession();
  return (
    <>
      <section className={styles['profile-header']}>
        <div className={styles['profile__wallpaper']}>
          <img src="./profile-skeleton.svg" alt="avatar" className={styles['profile__img']} />
        </div>
        <div className={cn(styles['profile__container'], 'container')}>
          <p className={styles['profile__name']}>{data?.user?.name || 'Никнейм'}</p>
          <p className={styles['profile__status']}>Статус</p>
          <p className={styles['profile__details']}>
            Подробнее
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="circle_customer_help_info_information_service_support_icon_123208 1">
                <g id="Layer 2">
                  <path
                    id="Vector"
                    d="M5.875 4.375C5.72666 4.375 5.58166 4.33101 5.45832 4.2486C5.33499 4.16619 5.23886 4.04906 5.18209 3.91201C5.12532 3.77497 5.11047 3.62417 5.13941 3.47868C5.16835 3.3332 5.23978 3.19956 5.34467 3.09467C5.44956 2.98978 5.5832 2.91835 5.72868 2.88941C5.87417 2.86047 6.02497 2.87532 6.16201 2.93209C6.29906 2.98886 6.41619 3.08499 6.4986 3.20832C6.58101 3.33166 6.625 3.47666 6.625 3.625C6.625 3.82391 6.54598 4.01468 6.40533 4.15533C6.26468 4.29598 6.07391 4.375 5.875 4.375Z"
                    fill="#7A5AF8"
                  />
                  <path
                    id="Vector_2"
                    d="M5.875 10.75C4.91082 10.75 3.96829 10.4641 3.1666 9.92842C2.36491 9.39275 1.74007 8.63137 1.37109 7.74058C1.00211 6.84979 0.905571 5.8696 1.09367 4.92394C1.28178 3.97828 1.74608 3.10964 2.42786 2.42786C3.10964 1.74608 3.97828 1.28178 4.92394 1.09367C5.8696 0.905571 6.84979 1.00211 7.74058 1.37109C8.63137 1.74007 9.39275 2.36491 9.92842 3.1666C10.4641 3.96829 10.75 4.91082 10.75 5.875C10.75 7.16793 10.2364 8.40791 9.32215 9.32215C8.40791 10.2364 7.16793 10.75 5.875 10.75ZM5.875 1.75C5.05915 1.75 4.26163 1.99193 3.58328 2.44519C2.90492 2.89845 2.37621 3.54269 2.064 4.29643C1.75179 5.05018 1.6701 5.87958 1.82926 6.67975C1.98843 7.47992 2.3813 8.21493 2.95819 8.79182C3.53508 9.36871 4.27008 9.76158 5.07026 9.92074C5.87043 10.0799 6.69983 9.99822 7.45357 9.68601C8.20732 9.37379 8.85155 8.84508 9.30482 8.16673C9.75808 7.48838 10 6.69085 10 5.875C10 4.78098 9.56541 3.73177 8.79182 2.95819C8.01823 2.1846 6.96902 1.75 5.875 1.75Z"
                    fill="#7A5AF8"
                  />
                  <path
                    id="Vector_3"
                    d="M5.875 8.875C5.67609 8.875 5.48532 8.79598 5.34467 8.65533C5.20402 8.51468 5.125 8.32391 5.125 8.125V5.875C5.125 5.67609 5.20402 5.48532 5.34467 5.34467C5.48532 5.20402 5.67609 5.125 5.875 5.125C6.07391 5.125 6.26468 5.20402 6.40533 5.34467C6.54598 5.48532 6.625 5.67609 6.625 5.875V8.125C6.625 8.32391 6.54598 8.51468 6.40533 8.65533C6.26468 8.79598 6.07391 8.875 5.875 8.875Z"
                    fill="#7A5AF8"
                  />
                </g>
              </g>
            </svg>
          </p>
          <Stats
            mixClass={[styles['profile__stats']]}
            stats={[
              {
                name: 'Подписчики',
                count: 0,
              },
              {
                name: 'Комментарии',
                count: 0,
              },
            ]}
          />
        </div>
      </section>
      <section className={styles['tabs']}>
        <div className={cn(styles['tabs__container'], 'container')}>
          <Tabs mixClass={[styles['tabs__items']]} tabs={['Записи', 'Избранное', 'Тайтлы']}>
            <Cards
              mixClass={[]}
              names={['Записи', 'Записи', 'Записи', 'Записи', 'Записи', 'Записи', 'Записи', 'Записи', 'Записи']}
            />
            <Cards
              mixClass={[]}
              names={[
                'Избранное',
                'Избранное',
                'Избранное',
                'Избранное',
                'Избранное',
                'Избранное',
                'Избранное',
                'Избранное',
                'Записи',
              ]}
            />
            <button className={styles['tabs__public-btn']}>Опубликовать</button>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default ProfileReader;
