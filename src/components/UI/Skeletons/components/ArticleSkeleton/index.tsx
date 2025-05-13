import styles from './index.module.scss';

export const ArticleSkeleton = () => (
  <div className={styles['article-skeleton']}>
    <div className={styles['article-skeleton__container-text']}>
      <div className={styles['article-skeleton__header']}></div>
      <div className={styles['article-skeleton__short']}></div>
      <div className={styles['article-skeleton__short']} style={{ width: '70%' }}></div>
    </div>
    <div className={styles['article-skeleton__link']}></div>
  </div>
);
