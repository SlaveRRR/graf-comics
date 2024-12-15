'use client';
import { useGetArticlesQuery } from '@/store/api/articles';
import { FC } from 'react';
import { ArticleCard } from '../UI';
import styles from './index.module.scss';

const Articles: FC = () => {
  const { data, isLoading } = useGetArticlesQuery();

  return (
    <>
      {isLoading ? (
        <p>Загрузка...</p>
      ) : data?.length > 0 ? (
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
