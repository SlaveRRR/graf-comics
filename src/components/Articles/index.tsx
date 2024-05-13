'use client';
import React, { FC } from 'react';
import styles from './index.module.scss';
import { useGetArticlesQuery } from '@/store/api/articles';
import { ArticleCard } from '../UI';

const Articles: FC = () => {
  const { data, isLoading } = useGetArticlesQuery();

  return (
    <>
      {isLoading ? (
        <p>Загрузка...</p>
      ) : data.length > 0 ? (
        <div className={styles['articles']}>
          {data.map((el) => (
            <ArticleCard title={el.title} id={el.id} description={el.description} />
          ))}
        </div>
      ) : (
        <p>Статей пока нет :-</p>
      )}
    </>
  );
};
export default Articles;
