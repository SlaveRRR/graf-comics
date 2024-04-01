'use client';
import React, { FC } from 'react';
import { AddComics } from '@/components/shared';
import { genres, focus, tags, rating } from '@/data/data.json';
import styles from './index.module.scss';
import { SearchSelect } from '@/components/UI';
import { FilterItem } from '@/types/filter.type';
import { useRouter } from 'next/navigation';
import { useActions, useAppSelector } from '@/hooks/redux';

const genresData = genres.map((v, i) => ({ colorClass: 'violet', text: v } as FilterItem));
const focusData = focus.map((v, i) => ({ colorClass: 'violet', text: v } as FilterItem));
const tagsData = tags.map((v, i) => ({ colorClass: 'violet', text: v } as FilterItem));
const ratingData = rating.map((v, i) => ({ colorClass: 'violet', text: v } as FilterItem));

const NewComicsTags: FC = () => {
  const router = useRouter();

  const { focus, genres, rating, tags } = useAppSelector((state) => state.comics);
  const { toggleFilters } = useActions();
  const handleClick = () => {
    router.push('/add-comics/toms');
  };

  return (
    <AddComics final={false}>
      <SearchSelect
        title="Выберите жанры"
        searchTitle="Поиск жанра"
        data={genresData}
        state={genres}
        toggleFilters={(el) => toggleFilters({ type: 'genres', element: el })}
      />
      <SearchSelect
        title="Выберите направленность"
        searchTitle="Поиск направленности"
        data={focusData}
        state={focus}
        toggleFilters={(el) => toggleFilters({ type: 'focus', element: el })}
      />
      <SearchSelect
        title="Выберите метки"
        searchTitle="Поиск метки"
        data={tagsData}
        state={tags}
        toggleFilters={(el) => toggleFilters({ type: 'tags', element: el })}
      />
      <SearchSelect
        title="Выберите рейтинг"
        searchTitle="Поиск рейтинга"
        data={ratingData}
        state={rating}
        toggleFilters={(el) => toggleFilters({ type: 'rating', element: el })}
      />
      <div className={styles['btns-container']}>
        <button onClick={() => router.back()} className={styles['btns-container__back-btn']}>
          назад
        </button>
        <button onClick={() => handleClick()} className={styles['btns-container__next-btn']}>
          далее
        </button>
      </div>
    </AddComics>
  );
};

export default NewComicsTags;
