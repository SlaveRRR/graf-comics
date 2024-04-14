'use client';
import React, { FC } from 'react';
import { AddComics } from '@/components/shared';
import { useRouter } from 'next/navigation';
import { useActions, useAppSelector } from '@/hooks/redux';
import styles from './index.module.scss';
import Tom from '@/components/Tom';

const NewComicsToms: FC = () => {
  const router = useRouter();
  const { addTom, removeTom } = useActions();
  const { toms } = useAppSelector((state) => state.comics);
  const handleClick = () => {
    router.push('/add-comics/preview');
  };

  return (
    <AddComics final={false}>
      <p className={styles['title']}>Добавьте главы и загрузите файлы</p>
      <div className={styles['btns']}>
        <button onClick={() => addTom()} className={styles['btns__add-btn']}>
          Добавить том
        </button>
        <button onClick={() => removeTom()} className={styles['btns__remove-btn']}>
          Удалить том
        </button>
      </div>

      <div className={styles['toms']}>
        {toms.map((el) => (
          <Tom tom={el} />
        ))}
      </div>
      <div className={styles['btns-container']}>
        <button onClick={() => router.back()} className={styles['btns-container__back-btn']}>
          назад
        </button>
        <button onClick={() => handleClick()} className={styles['btns-container__next-btn']}>
          готово
        </button>
      </div>
    </AddComics>
  );
};

export default NewComicsToms;
