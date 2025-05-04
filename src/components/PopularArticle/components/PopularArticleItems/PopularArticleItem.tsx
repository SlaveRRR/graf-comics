'use client';
import { FC, memo } from 'react';
import styles from '../../index.module.scss';
import { PopularArticleType } from '../../types';

const PopularArticleComponent: FC<PopularArticleType> = ({ id, title, description }) => {
  return (
    <div key={id} className={styles['article']}>
      <div className={styles['article__img']}></div>
      <h2 className={styles['article__title']}>{title}</h2>
      <p className={styles['article__text']}>{description}</p>
      <button className={styles['article__btn']}>
        Читать далее
        <svg
          className={styles['arrow']}
          width="9"
          height="10"
          viewBox="-1 0 10 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 3L7.5 6L4.5 9"
            stroke="#7A5AF8"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};
export const PopularArticleItem = memo(PopularArticleComponent);
