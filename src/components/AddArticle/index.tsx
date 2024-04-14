import React, { FC } from 'react';
import cn from 'classnames';
import styles from './index.module.scss';
type Props = {
  children: React.ReactNode;
};

const AddArticle: FC<Props> = ({ children }) => {
  return (
    <section className="add-article">
      <div className={cn(styles['add-article__container'], 'container')}>
        <p className={styles['add-article__title']}>Добавить свою статью</p>
        <div className="add-article__content">{children}</div>
      </div>
    </section>
  );
};
export default AddArticle;
