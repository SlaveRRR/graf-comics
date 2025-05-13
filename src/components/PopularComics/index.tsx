'use client';
import { useGetPopularQuery } from '@/store/api/articles';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { Card, Skeletons } from '../UI';
import styles from './index.module.scss';

const PopularComics: FC = () => {
  const { data, isLoading } = useGetPopularQuery();

  const router = useRouter();

  const { data: user, status } = useSession();

  return (
    <div className={styles['popular-comics']}>
      {isLoading || status === 'loading' ? (
        <Skeletons type="card" />
      ) : data?.length > 0 ? (
        <>
          {data.map(({ title, id, covers, likes }) => (
            <Card
              key={id}
              comicsId={id}
              isLiked={likes.includes(user?.user?.id)}
              text={title}
              imageSrc={covers[0]}
              onClick={() => router.push(`preview/${id}`)}
            />
          ))}
        </>
      ) : (
        <p className={styles['empty']}>Пока комиксов нет</p>
      )}
    </div>
  );
};
export default PopularComics;
