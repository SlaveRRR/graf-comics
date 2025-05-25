'use client';
import { useGetSimilarArticlesQuery } from '@/store/api/articles';
import { ArticleCard, Skeletons } from '@UI';
import { FC } from 'react';
import styles from './index.module.scss';
import { SimilarArticlesProps } from './types';

export const SimilarArticles: FC<SimilarArticlesProps> = ({ id }) => {
  const { data, isLoading } = useGetSimilarArticlesQuery(id, {
    refetchOnFocus: false,
  });

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
        <p className={styles['empty']}>Пока что на сайте одна статья</p>
      )}
    </div>
  );
};
