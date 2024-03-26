'use client';
import React, { FC } from 'react';
import { AddComics, SearchFilter } from '@/components/shared';
import { genres } from '@/data/data.json';
import styles from './index.module.scss';
import { SearchSelect } from '@/components/UI';
import { FilterItem } from '@/types/filter.type';
import { useRouter } from 'next/navigation';

const data = genres.map((v, i) => ({ colorClass: 'violet', text: v } as FilterItem));

const NewComicsTags: FC = () => {
  const router = useRouter();
  return (
    <AddComics>
      <SearchSelect title="Выберите жанры" data={data} />
      <SearchSelect title="Выберите направленность" data={data} />
      <SearchSelect title="Выберите метки" data={data} />
      <SearchSelect title="Выберите рейтинг" data={data} />
      <div className={styles['btns-container']}>
        <button onClick={() => router.back()} className={styles['btns-container__back-btn']}>
          назад
        </button>
        <button onClick={() => router.push('/add-comics/toms')} className={styles['btns-container__next-btn']}>
          далеее
        </button>
      </div>
    </AddComics>
  );
};

export default NewComicsTags;
