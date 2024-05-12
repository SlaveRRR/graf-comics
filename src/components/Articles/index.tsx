import React, { FC } from 'react';
import styles from './index.module.scss';
import Link from 'next/link';

const Articles: FC = () => {
  return (
    <div className={styles['articles']}>
      <div className={styles['articles__item']}>
        <div className={styles['articles__container-text']}>
          <header className={styles['articles__header']}>Название статьи</header>
          <p className={styles['articles__short']}>Кратко о статье</p>
        </div>
        <Link className={styles['articles__link']} href={'/article'}>
          Читать статью
        </Link>
      </div>
      <div className={styles['articles__item']}>
        <div className={styles['articles__container-text']}>
          <header className={styles['articles__header']}>Название статьи</header>
          <p className={styles['articles__short']}>Кратко о статье</p>
        </div>
        <Link className={styles['articles__link']} href={'/article'}>
          Читать статью
        </Link>
      </div>
      <div className={styles['articles__item']}>
        <div className={styles['articles__container-text']}>
          <header className={styles['articles__header']}>Название статьи</header>
          <p className={styles['articles__short']}>Кратко о статье</p>
        </div>
        <Link className={styles['articles__link']} href={'/article'}>
          Читать статью
        </Link>
      </div>
      <div className={styles['articles__item']}>
        <div className={styles['articles__container-text']}>
          <header className={styles['articles__header']}>Название статьи</header>
          <p className={styles['articles__short']}>Кратко о статье</p>
        </div>
        <Link className={styles['articles__link']} href={'/article'}>
          Читать статью
        </Link>
      </div>
    </div>
  );
};
export default Articles;
