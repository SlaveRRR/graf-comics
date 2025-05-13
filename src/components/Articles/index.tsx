'use client';
import { useGetArticlesQuery } from '@/store/api/articles';
import { FC } from 'react';
import { ArticleCard, Skeletons } from '../UI';
import styles from './index.module.scss';

const Articles: FC = () => {
  const { data, isLoading } = useGetArticlesQuery();

  return (
    <div className={styles['articles']}>
      {isLoading ? (
        <Skeletons type="article" />
      ) : data?.length > 0 ? (
        <>
          {data.map((el) => (
            <ArticleCard title={el.title} id={el.id} description={el.description} />
          ))}
        </>
      ) : (
        <p className={styles['empty']}>Пока статей нет</p>
      )}
    </div>
  );
};
export default Articles;
