'use client';
import React, { FC } from 'react';
import { useParams } from 'next/navigation';
import { ArticleView, BackLink } from '../shared';
import cn from 'classnames';
import { useGetArticleByIdQuery } from '@/store/api/articles';
import styles from './index.module.scss';
import { Category } from '@prisma/client';
import { Avatar } from '../UI';

// prettier-ignore
const categoryObj = {
    [Category.PROMOTION]:"продвижение комикса", 
    [Category.SCENARIO]:"сценарий",
    [Category.LIFESTYLE]:"лайфстайл художника",
    [Category.CHARACTERS]:"персонажи",
    [Category.ENVIROMENT]:"окружение",
    [Category.GRAPHIC]:"графическое наполнение",
  };

const Article: FC = () => {
  const obj = useParams<{ id: string }>();

  const { data, isLoading } = useGetArticleByIdQuery(obj?.id, {
    refetchOnFocus: false,
  });
  if (isLoading) {
    return (
      <div className="contaner">
        <p>Загрузка....</p>
      </div>
    );
  }
  if (!data) {
    return (
      <div className="contaner">
        <p>Ошибка...</p>
      </div>
    );
  }
  console.log(data);
  //@ts-ignore
  const dataJson = JSON.parse(data.content);
  return (
    <section className="article">
      <div className={cn('container', styles['padding'])}>
        <BackLink mixClass={[styles['link']]} />
        <div className={styles['inner-container']}>
          {data.cover && <img alt="article cover" className={styles['article__cover']} src={data.cover} />}
          <div className={styles['article__container']}>
            <h2 className={styles['article__title']}>{data.title}</h2>
            <p className={styles['article__category']}>{categoryObj[data.category]}</p>
            <div className={styles['data-container']}>
              <div className={styles['data-flex']}>
                <Avatar />
                <p className={styles['article__author']}>{data.authorName}</p>
              </div>
              <p className={styles['article__data']}>{new Date(data.createdAt).toLocaleDateString()}</p>
            </div>
            <ArticleView data={dataJson} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Article;
