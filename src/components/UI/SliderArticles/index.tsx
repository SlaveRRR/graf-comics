'use client';
import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import styles from './index.module.scss';

import { useGetArticlesQuery } from '@/store/api/articles';
import { Pagination } from 'swiper/modules';
import { SliderSkeleton } from '../Skeletons/components';
import { SliderArticlesProps } from './types';

const SliderArticles: FC<SliderArticlesProps> = ({ slides, className }) => {
  const { data, isLoading } = useGetArticlesQuery({ take: 3 });
  return (
    <div className={cn(styles['slider'], className)}>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        pagination={{
          renderBullet: function (index, spanClass) {
            return '<span class="' + spanClass + '">' + '' + '</span>';
          },
          clickable: true,
        }}
        className={cn('swiper', styles['my-swiper'])}
        modules={[Pagination]}
      >
        {isLoading ? (
          Array.from({ length: 3 }).map(() => (
            <SwiperSlide className={styles['slide']}>
              <SliderSkeleton />
            </SwiperSlide>
          ))
        ) : data?.length > 0 ? (
          <>
            {data.map((item) => (
              <SwiperSlide key={item.id} className={styles['slide']}>
                <div className={styles['slide__text-container']}>
                  <p className={styles['slide__text']}>{item.title}</p>
                  <Link className={styles['slide__link']} href={`/article/${item.id}`}>
                    Читать подробнее
                  </Link>
                </div>
                <div className={styles['slide__img']}></div>
              </SwiperSlide>
            ))}
          </>
        ) : (
          <p className={styles['empty']}>Пока статей нет</p>
        )}
      </Swiper>
    </div>
  );
};

export default SliderArticles;
