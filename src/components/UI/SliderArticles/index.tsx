'use client';
import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss'
import cn from 'classnames'
import styles from './index.module.scss';
import Link from 'next/link'

import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';

type Props = {
  arr: string[];
};
// || (slidesPerView === 1 && activeColIndexWithShift > (slides.length - slidesPerView * 2) - 1 )
const SliderArticles: FC<Props> = ({ arr }) => {
  return (
    <div className={styles['slider']}>
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
          clickable:true,
        }}
        className={cn('swiper',styles['my-swiper'])}
        modules={[Pagination]}
      >
        {arr.map((text, ind) => (
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
