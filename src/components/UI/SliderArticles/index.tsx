'use client';
import cn from 'classnames';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import styles from './index.module.scss';

import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

type Props = {
  arr: string[];
};
// || (slidesPerView === 1 && activeColIndexWithShift > (slides.length - slidesPerView * 2) - 1 )
const SliderArticles: FC<Props> = ({ arr }) => {
  const [slidesPerView, setSlidesPerView] = useState(1); // Устанавливаем начальное значение
  useEffect(() => {
    const updateMedia = () => {
      if (window.innerWidth >= 1490) {
        setSlidesPerView(0.9);
      } else {
        setSlidesPerView(1);
      }
    };
    window.addEventListener('resize', updateMedia);
    updateMedia();

    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <div className={styles['slider']}>
      <Swiper
        slidesPerView={slidesPerView}
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
