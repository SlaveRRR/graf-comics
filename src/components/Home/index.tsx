'use client';
import { FC } from 'react';

import styles from './index.module.scss';

import cn from 'classnames';
import { useSession } from 'next-auth/react';
import Articles from '../Articles';
import { Badge, Card, SliderArticles } from '../UI';
import GridGallery from '../shared/GridGallery';
import { ArrowLink } from '../shared/index';

const Home: FC = () => {
  const { data, status } = useSession();

  return (
    <>
      <GridGallery
        mixClass={['additional-class']}
        sloganText="Создаем вселенную комиксов вместе"
        descriptionText={<>Здесь каждый комикс находит своего читателя</>}
        buttonText={'Добавить комикс'}
      />
      <section className={styles['popular-section']}>
        <div className={cn(styles['popular-container'], 'container')}>
          <ArrowLink mixClass={[styles['popular-container__link']]} text="Популярные" url="/popular" />

          <div className={styles['popular-cards']}>
            <Card text="Название" />
            <Card text="Название" />
            <Card text="Название" />
            <Card text="Название" />
            <Card text="Название" />
            <Card text="Название" />
          </div>
        </div>
      </section>
      <section className={styles['novelty-section']}>
        <div className={cn(styles['novelty-container'], 'container')}>
          <ArrowLink mixClass={[styles['novelty-container__link']]} text="Новинки" url="/novelty" />

          <div className={styles['novelty-cards']}>
            <Card mixClass={[styles['cards-comics']]} text="Название" />
            <Card mixClass={[styles['cards-comics']]} text="Название" />
            <Card mixClass={[styles['cards-comics']]} text="Название" />
            <Card mixClass={[styles['cards-comics']]} text="Название" />
            <Card mixClass={[styles['cards-comics']]} text="Название" />
            <Card mixClass={[styles['cards-comics']]} text="Название" />
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
