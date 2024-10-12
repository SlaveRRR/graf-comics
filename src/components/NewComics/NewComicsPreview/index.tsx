'use client';
import ComicsPreview from '@/components/ComicsPreview';
import { useAppSelector } from '@/hooks/redux';
import { useRouter } from 'next/navigation';
import { FC, useCallback } from 'react';
import styles from './index.module.scss';

const NewComicsPreview: FC = () => {
  const comics = useAppSelector((state) => state.comics);
  const router = useRouter();

  console.log(comics);
  const sendModerate = useCallback(async () => {
    await fetch(`${process.env.NEXT_PUBLIC_AXIOS_URL}/api/comics`, {
      method: 'POST',
      body: JSON.stringify({ ...comics }),
    });
    // router.push('/add-comics/final');
  }, []);
  return (
    <>
      <p className={styles['preview-text']}>Предпросмотр</p>

      <ComicsPreview comics={comics} />
      <div className={styles['btns-container']}>
        <button onClick={() => router.back()} className={styles['btns-container__back-btn']}>
          Редактировать
        </button>
        <button onClick={sendModerate} className={styles['btns-container__next-btn']}>
          Опубликовать
        </button>
      </div>
    </>
  );
};

export default NewComicsPreview;
