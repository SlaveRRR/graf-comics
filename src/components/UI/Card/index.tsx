'use client';
import { useLikeComicsMutation } from '@/store/api';
import cn from 'classnames';
import { useSession } from 'next-auth/react';
import React, { FC, useState } from 'react';
import { toast } from 'sonner';
import { useDebouncedCallback } from 'use-debounce';
import styles from './index.module.scss';
import { CardProps } from './types';

// Обновите Props чтобы принимать cover
interface ExtendedCardProps extends CardProps {
  cover?: string;
}

const Card: FC<ExtendedCardProps> = ({
  text,
  mixClass = [],
  type = null,
  onClick,
  imageSrc,
  cover, // ← Новый пропс
  isLiked = false,
  comicsId = '1',
}) => {
  const [like, setLike] = useState(isLiked);
  const [mutate, { isError }] = useLikeComicsMutation();
  const { data } = useSession();

  // Используем cover если передан, иначе imageSrc
  const imageSource = cover || imageSrc;

  const onClickLike = useDebouncedCallback(async () => {
    const userId = data?.user?.id;
    if (userId) {
      await mutate({ comicsId: comicsId, userId: data?.user?.id });
    }
    if (isError) {
      toast.error('Произошла ошибка!');
      setLike((prev) => !prev);
    }
  }, 500);

  return (
    <div
      className={cn(styles['card'], {
        [styles['card--moder']]: type === 'moder',
        [styles['card--edit']]: type === 'edit',
      })}
    >
      <div
        onClick={() => onClick?.()}
        className={cn(styles['card__content'], { [styles['clickable']]: onClick }, ...mixClass)}
      >
        {imageSource && <img className={styles['card__img']} src={imageSource} alt={text} />}

        {(() => {
          switch (type) {
            case 'new':
              return (
                <div className={styles['image-container']}>
                  <img src="/box-new.svg" alt="new box" className={styles['image-container__image-new']} />
                  <div className={styles['image-container__text-new']}>NEW</div>
                </div>
              );
            case 'moder':
              return (
                <div className={styles['image-container']}>
                  <img src="/box-moder.svg" alt="moder box" className={styles['image-container__image-moder']} />
                  <div className={styles['image-container__text-moder']}>На модерации</div>
                </div>
              );
            case 'edit':
              return (
                <div className={styles['image-container']}>
                  <img src="/box-edit.svg" alt="new box" className={styles['image-container__image-edit']} />
                  <div className={styles['image-container__text-edit']}>Требуется редактирование</div>
                </div>
              );
            default:
              null;
          }
        })()}
        {type == 'new' || type == null ? (
          <svg
            onClick={(e) => {
              e.stopPropagation();
              setLike((prev) => !prev);
              onClickLike();
            }}
            className={cn(styles['card__like'], {
              [styles['card__like--liked']]: like,
            })}
            width="15"
            height="15"
            viewBox="0 0 13 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.36343 0.711914C8.77718 0.721166 8.20372 0.887212 7.70095 1.19328C7.19819 1.49935 6.78393 1.93461 6.5 2.4551C6.21607 1.93461 5.80181 1.49935 5.29905 1.19328C4.79628 0.887212 4.22282 0.721166 3.63657 0.711914C2.70202 0.753112 1.82153 1.16792 1.18745 1.86571C0.553368 2.5635 0.217248 3.48756 0.25252 4.436C0.25252 6.8379 2.74422 9.46113 4.83401 11.2397C5.3006 11.6375 5.89053 11.8557 6.5 11.8557C7.10947 11.8557 7.6994 11.6375 8.16599 11.2397C10.2558 9.46113 12.7475 6.8379 12.7475 4.436C12.7828 3.48756 12.4466 2.5635 11.8126 1.86571C11.1785 1.16792 10.298 0.753112 9.36343 0.711914Z"
              fill="white"
            />
          </svg>
        ) : null}
      </div>

      <p className={styles['card__text']}>{text}</p>
    </div>
  );
};

export default React.memo(Card);
