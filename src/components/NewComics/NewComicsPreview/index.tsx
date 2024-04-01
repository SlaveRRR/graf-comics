'use client';
import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/hooks/redux';
import styles from './index.module.scss';
import ComicsPreview from '@/components/ComicsPreview';

const NewComicsPreview: FC = () => {
  const comics = useAppSelector((state) => state.comics);
  const router = useRouter();
  const handleClick = () => {
    router.push('/add-comics/final');
  };

  return (
    <>
      <p className={styles['preview-text']}>Предпросмотр</p>

      <ComicsPreview comics={comics} />
      <div className={styles['btns-container']}>
        <button onClick={() => router.back()} className={styles['btns-container__back-btn']}>
          Редактировать
        </button>
        <button onClick={() => handleClick()} className={styles['btns-container__next-btn']}>
          Опубликовать
        </button>
      </div>
    </>
  );
};

export default NewComicsPreview;
