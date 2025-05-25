'use client';
import styles from './index.module.scss';

export const SliderSkeleton = () => {
  return (
    <>
      <div className={styles['skeleton__text-container']}>
        <div className={styles['skeleton__text']}></div>
        <div className={styles['skeleton__link']}></div>
      </div>
      <div className={styles['skeleton__img']}></div>
    </>
  );
};
