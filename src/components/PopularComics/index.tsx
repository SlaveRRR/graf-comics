'use client';
import { useGetPopularQuery } from '@/store/api/articles';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { Card, CardsSkeleton } from '../UI';
import styles from './index.module.scss';

const PopularComics: FC = () => {
  const { data, isLoading } = useGetPopularQuery();

  const router = useRouter();

  return (
    <div className={styles['popular-comics']}>
      {isLoading ? (
        <CardsSkeleton />
      ) : data?.length > 0 ? (
        <>
          {data.map(({ title, id, covers }) => (
            <Card text={title} imageSrc={covers[0]} onClick={() => router.push(`preview/${id}`)} />
          ))}
        </>
      ) : (
        <p className={styles['empty']}>Пока комиксов нет</p>
      )}
    </div>
  );
};
export default PopularComics;
