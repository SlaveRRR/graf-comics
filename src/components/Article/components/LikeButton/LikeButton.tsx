import { useLikeArticleMutation } from '@/store/api/articles';
import cn from 'classnames';
import { FC, useState } from 'react';
import { toast } from 'sonner';
import { useDebouncedCallback } from 'use-debounce';
import styles from './index.module.scss';
import { LikeButtonProps } from './types';

export const LikeButton: FC<LikeButtonProps> = ({ isLiked, userId, articleId, count }) => {
  const [like, setLike] = useState(isLiked);

  const [mutate, { isError }] = useLikeArticleMutation();

  const onClickLike = useDebouncedCallback(async () => {
    if (userId) {
      await mutate({ articleId: articleId, userId: userId });
    }

    if (isError) {
      toast.error('Произошла ошибка!');
      setLike((prev) => !prev);
    }
  }, 500);

  return (
    <button className={styles['button']}>
      <svg
        className={cn(styles['like'], {
          [styles['like--liked']]: like,
        })}
        onClick={() => {
          onClickLike();
          setLike((prev) => !prev);
        }}
        width="18"
        height="15"
        viewBox="0 0 18 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.32324 5.00195L1.32227 4.99219C1.28221 3.93157 1.63775 2.89614 2.31543 2.08496L2.45508 1.92578C3.21998 1.097 4.28118 0.602633 5.4082 0.549805C6.10689 0.563711 6.7903 0.760861 7.38965 1.12012C7.99376 1.48235 8.49188 1.99756 8.83301 2.61328L9.31348 3.48145L9.79492 2.61328C10.0935 2.07443 10.5119 1.61238 11.0166 1.2627L11.2383 1.12012C11.8372 0.761131 12.5196 0.563974 13.2178 0.549805C14.2747 0.598958 15.2732 1.037 16.0244 1.77441L16.1719 1.92578C16.9401 2.75823 17.3474 3.86094 17.3047 4.99219V5.0127C17.3047 6.44806 16.5404 8.01958 15.3564 9.57324C14.3292 10.9212 13.0282 12.2009 11.7725 13.293L11.2383 13.749L11.2373 13.75C10.6986 14.2021 10.0172 14.4502 9.31348 14.4502C8.69767 14.4501 8.0995 14.2596 7.59863 13.9092L7.38965 13.75V13.749L6.85449 13.293C5.59875 12.2009 4.29767 10.9212 3.27051 9.57324C2.08657 8.01959 1.32324 6.44805 1.32324 5.0127V5.00195Z"
          stroke="#7A5AF8"
          stroke-width="1.1"
        />
      </svg>
      <span className={styles['count']}>{count}</span>
    </button>
  );
};
