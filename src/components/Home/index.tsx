'use client';
import { FC } from 'react';

import styles from './index.module.scss';

import cn from 'classnames';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Articles from '../Articles';
import { Badge, Button, Card, SliderArticles } from '../UI';
import { ArrowLink } from '../shared/index';

const Home: FC = () => {
  const { data, status } = useSession();

  return (
    <>
      <section className={styles['image-section']}>
        <div className={styles['cards']}>
          <div className={cn(styles['cards__item--start'], styles['cards__item'])} />
          <div className={styles['cards__item']} />
          <div className={styles['cards__item']} />
          <div className={styles['cards__item']} />
        </div>
        <div className={styles['image-container']}>
          <div className={styles['image-container__text-container']}>
            <h1 className={styles['image-container__slogan']}>Создаем вселенную комиксов вместе</h1>
            <p className={styles['image-container__text']}>Здесь каждый комикс находит своего читателя</p>
            <Button mixClass={[styles['image-container__btn']]}>Добавить комикс</Button>
          </div>
        </div>

        <div className={styles['cards-pc']}>
          <div className={styles['cards-pc__item']} />
          <div className={styles['cards-pc__item']} />
          <div className={styles['cards-pc__item']} />
          <div className={styles['cards-pc__item']} />
          <div className={styles['cards-pc__item']} />
          <div className={styles['cards-subgrid']}>
            <div className={styles['cards-subgrid__item']} />
            <div className={styles['cards-subgrid__item']} />
          </div>
          <div className={styles['cards-subgrid-bottom']}>
            <div className={styles['cards-subgrid-bottom__item']} />
            <div className={styles['cards-subgrid-bottom__item']} />
          </div>
        </div>
        <div className={styles['cards']}>
          <div className={styles['cards__item']} />
          <div className={styles['cards__item']} />
          <div className={styles['cards__item']} />
          <div className={styles['cards__item']} />
        </div>
      </section>
      {
        //**
        // TODO: доделать */
      }
      <section className={styles['co-author-section']}>
        <div className={cn('container', styles['co-author__container'])}>
          <p className={styles['co-author__text']}>
            Хочешь помочь с <span className={styles['co-author__idea']}>идеей</span> или есть своя?
          </p>
          <Link href="/co-author" className={styles['co-author__link']}>
            Стать соавтором
          </Link>
        </div>
      </section>
      <section className={styles['popular-section']}>
        <div className={cn(styles['popular-container'], 'container')}>
          <ArrowLink mixClass={[styles['popular-container__link']]} text="Популярные" url="/popular" />

          <div className={styles['popular-cards']}>
            {Array.from({ length: 6 }).map((item) => (
              <Card text="Название" />
            ))}
          </div>
        </div>
      </section>
      <section className={styles['novelty-section']}>
        <div className={cn(styles['novelty-container'], 'container')}>
          <ArrowLink mixClass={[styles['novelty-container__link']]} text="Новинки" url="/novelty" />

          <div className={styles['novelty-cards']}>
            {Array.from({
              length: 8,
            }).map((item) => (
              <Card type="" mixClass={[styles['cards-comics']]} text="Название" />
            ))}
          </div>
        </div>
      </section>
      <section className={styles['genre-section']}>
        <ArrowLink mixClass={[styles['genre-container__link']]} text="Жанры" url="/catalog" />
        <div className={styles['genres']}>
          <Badge
            mixClass={[styles['genre-container__badge']]}
            text="Повседневность"
            url="/catalog?genre=повседневность"
          />
          <Badge mixClass={[styles['genre-container__badge']]} text="Фантастика" url="/catalog?genre=фантастика" />
          <Badge mixClass={[styles['genre-container__badge']]} text="Детектив" url="/catalog?genre=детектив" />
          <Badge mixClass={[styles['genre-container__badge']]} text="Трагедия" url="/catalog?genre=трагедия" />
          <Badge mixClass={[styles['genre-container__badge']]} text="Романтика" url="/catalog?genre=романтика" />
          <Badge mixClass={[styles['genre-container__badge']]} text="Драма" url="/catalog?genre=драма" />
          <Badge mixClass={[styles['genre-container__badge']]} text="Спорт" url="/catalog?genre=спорт" />
          <Badge mixClass={[styles['genre-container__badge']]} text="Ужасы" url="/catalog?genre=ужасы" />
        </div>
      </section>
      <section className={styles['slider-section']}>
        <div className={cn(styles['slider-container'], 'container')}>
          <ArrowLink mixClass={[styles['slider-container__link']]} text="Новости" url="/news" />
          <SliderArticles arr={['Статья №1', 'Статья №2', 'Статья №3']} />
        </div>
      </section>
      <section className="article-section">
        <div className="container">
          <ArrowLink mixClass={[styles['slider-container__link']]} text="Полезные статьи" url="/articles" />
          <Articles />
        </div>
      </section>
    </>
  );
};

export default Home;
