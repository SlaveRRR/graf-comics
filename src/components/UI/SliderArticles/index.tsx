'use client';
import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import styles from './index.module.scss';

import { Pagination } from 'swiper/modules';
import { SliderArticlesProps } from './types';

const SliderArticles: FC<SliderArticlesProps> = ({ slides, className }) => {
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
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '' + '</span>';
          },
          clickable: true,
        }}
        className={cn('swiper', styles['my-swiper'])}
        modules={[Pagination]}
      >
        {slides.map((text, ind) => (
          <SwiperSlide key={ind} className={styles['slide']}>
            <div className={styles['slide__text-container']}>
              <p className={styles['slide__text']}>{text}</p>
              <Link className={styles['slide__link']} href={'/article'}>
                Читать подробнее
              </Link>
            </div>
            <div className={styles['slide__img']}></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderArticles;
