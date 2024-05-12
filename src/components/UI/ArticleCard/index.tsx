import React, { FC } from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import { Article } from '@prisma/client';

type Props = Pick<Article, 'description' | 'title' | 'id'>;

const ArticleCard: FC<Props> = ({ description, title, id }) => {
  return (
    <div className={styles['article']}>
      <div className={styles['article__container-text']}>
        <header className={styles['article__header']}>{title}</header>
        <p className={styles['article__short']}>{description}</p>
      </div>
      <Link className={styles['article__link']} href={`/article/${id}`}>
        Читать статью
      </Link>
    </div>
  );
};
export default ArticleCard;
