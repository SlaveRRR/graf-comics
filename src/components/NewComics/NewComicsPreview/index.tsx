'use client';
import ComicsPreview from '@/components/ComicsPreview';
import { ctx } from '@/context/contextProvider';
import { useAppSelector } from '@/hooks/redux';
import { useRouter } from 'next/navigation';
import { FC, useCallback, useContext } from 'react';
import { toast } from 'sonner';
import styles from './index.module.scss';

const NewComicsPreview: FC = () => {
  const comics = useAppSelector((state) => state.comics);
  const router = useRouter();
  const { setActiveLoader } = useContext(ctx);
  console.log(comics);
  const sendModerate = useCallback(async () => {
    setActiveLoader(true);
    try {
      await fetch(`${process.env.NEXT_PUBLIC_AXIOS_URL}/api/comics`, {
        method: 'POST',
        body: JSON.stringify({ ...comics }),
      });
      return router.replace('/add-comics/final');
    } catch (error) {
      toast.error(error);
    } finally {
      setActiveLoader(false);
    }
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
