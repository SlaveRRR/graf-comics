import React, { FC } from 'react';
import styles from './index.module.scss';
import BackLink from '../BackLink';
import cn from 'classnames';

type Props = {
  children: React.ReactNode;
};

const AddArticle: FC<Props> = ({ children }) => {
  return (
    <section className="add-article">
      <div className={cn(styles['add-article__container'], 'container')}>
        <BackLink mixClass={[styles['add-article__link']]} />
        <div className={styles['add-article__content']}>
          <p className={styles['add-article__title']}>Добавить свою статью</p>
          {children}
        </div>
      </div>
    </section>
  );
};
export default AddArticle;
