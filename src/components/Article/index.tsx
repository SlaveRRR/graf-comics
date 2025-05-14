'use client';
import { ctx } from '@/context/contextProvider';
import { useGetArticleByIdQuery } from '@/store/api/articles';
import { Category } from '@prisma/client';
import cn from 'classnames';
import { useParams } from 'next/navigation';
import { FC, useContext, useEffect } from 'react';
import { ComicsComment } from '../ComicsPreview/components';
import { comments } from '../ComicsPreview/data';
import { Avatar } from '../UI';
import { ArticleView, BackLink } from '../shared';
import styles from './index.module.scss';

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

  const { setActiveLoader } = useContext(ctx);

  useEffect(() => {
    setActiveLoader(isLoading);
  }, [isLoading]);

  if (!data) {
    return (
      <div className="contaner">
        <p>Ошибка...</p>
      </div>
    );
  }

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
            {comments.map((comment) => (
              <>
                <ComicsComment key={comment.id} comment={comment} />
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Article;
