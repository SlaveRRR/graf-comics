'use client';
import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import cn from 'classnames'
import 'swiper/scss'
import styles from './index.module.scss';



import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

type Props = {
    items: string[];
    mixClass:string[]
}

const SliderPreview: FC<Props> = ({ items,mixClass }) => {
    return (
            <div className={cn(styles["slider"],...mixClass)}>
                <Swiper

                    slidesPerView={1}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{

                        delay: 3500,
                        disableOnInteraction: false,

                    }}
                    pagination={
                        {
                            renderBullet: function (index, className) {
                                return '<span class="' + className + '">' + '' + '</span>';
                            },
                        }
                    }

                    style={{

                        //@ts-ignore

                        "--swiper-pagination-color": "#7A5AF8",
                        "--swiper-pagination-bullet-inactive-color": "#b4b2b2",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "6px",
                        "--swiper-pagination-bullet-horizontal-gap": "3px",
                        "maxWidth":"100%"
                    }}
                    modules={[Pagination,Autoplay]}
                >
                    {items.map((src, ind) =>

                        <SwiperSlide
                            key={ind}
                            className={styles['slide']}>

                            <img className={styles['slide__img']} src={src} alt="comics" />


                        </SwiperSlide>)}

                </Swiper>

            </div >


    )
}

export default SliderPreview