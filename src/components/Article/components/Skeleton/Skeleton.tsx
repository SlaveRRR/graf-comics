import styles from './index.module.scss';

export const Skeleton = () => {
  return (
    <section className={styles.article}>
      <div className={styles.container}>
        <div className={styles.backLinkSkeleton}></div>

        <div className={styles.innerContainer}>
          {/* Скелетон для обложки */}
          <div className={styles.coverSkeleton}></div>

          <div className={styles.contentContainer}>
            {/* Скелетон для заголовка */}
            <div className={styles.titleSkeleton}></div>

            {/* Скелетон для категории */}
            <div className={styles.categorySkeleton}></div>

            <div className={styles.metaContainer}>
              <div className={styles.authorContainer}>
                {/* Скелетон для аватара */}
                <div className={styles.avatarSkeleton}></div>
                {/* Скелетон для имени автора */}
                <div className={styles.authorSkeleton}></div>
              </div>
              {/* Скелетон для даты */}
              <div className={styles.dateSkeleton}></div>
            </div>

            {/* Скелетон для содержимого статьи */}
            <div className={styles.contentSkeleton}></div>
            <div className={styles.contentSkeleton} style={{ width: '80%' }}></div>
            <div className={styles.contentSkeleton} style={{ width: '70%' }}></div>

            <div className={styles.buttonsContainer}>
              {/* Скелетон для кнопки лайка */}
              <div className={styles.likeButtonSkeleton}></div>
              {/* Скелетон для кнопки поделиться */}
              <div className={styles.shareButtonSkeleton}></div>
            </div>
          </div>
        </div>

        {/* Скелетон для комментариев */}
        <div className={styles.commentsContainer}>
          {[...Array(3)].map((_, index) => (
            <div key={index} className={styles.commentSkeleton}>
              <div className={styles.commentAvatarSkeleton}></div>
              <div className={styles.commentContent}>
                <div className={styles.commentAuthorSkeleton}></div>
                <div className={styles.commentTextSkeleton}></div>
                <div className={styles.commentTextSkeleton} style={{ width: '80%' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
