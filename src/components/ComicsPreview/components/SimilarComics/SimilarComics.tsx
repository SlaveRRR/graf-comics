'use client';
import { useGetSimilarComicsesQuery } from '@/store/api/articles';
import { Card, Skeletons } from '@UI';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import styles from './index.module.scss';
import { SimilarComicsProps } from './types';

export const SimilarComics: FC<SimilarComicsProps> = ({ id }) => {
  const { data, isLoading } = useGetSimilarComicsesQuery(id, {
    refetchOnFocus: false,
  });

  const router = useRouter();

  const { data: user } = useSession();

  return (
    <div className={styles['similar-comics']}>
      {isLoading ? (
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
              onClick={() => router.push(`${id}`)}
            />
          ))}
        </>
      ) : (
        <p className={styles['empty']}>Пока что на сайте один комикс</p>
      )}
    </div>
  );
};
