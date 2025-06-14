'use client';
import { ActiveFilters } from '@/components/shared/index';
import { ctx } from '@/context/contextProvider';
import { focus, genres, rating, size, sort, status, tags, viewCounts } from '@/data/data.json';
import cn from 'classnames';
import { useSearchParams } from 'next/navigation';
import { FC, useCallback, useContext, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Cards } from '../UI';
import { Filters } from '../shared';
import styles from './index.module.scss';

const Catalog: FC = () => {
  const searchParams = useSearchParams();
  const [scroll, setScroll] = useState<number>(0);

  const { activeFilters, toggleFilters } = useContext(ctx);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  const handleScroll = useCallback(() => {
    setScroll(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section className="catalog">
      <div className={cn(styles['catalog__container'], 'container')}>
        <label htmlFor="search" className={styles['catalog__search-label']}>
          <input
            type="text"
            id="search"
            placeholder="Название, автор, персонаж..."
            className={styles['catalog__search-field']}
          />
        </label>
        <Filters
          filters={[
            { text: 'Жанры', colorClass: 'genres', filters: genres, filterType: 'default', isActive: false },
            { text: 'Направленность', colorClass: 'naprav', filters: focus, filterType: 'default', isActive: false },
            { text: 'Размер', colorClass: 'size', filters: size, filterType: 'default', isActive: false },
            { text: 'Включить метки', colorClass: 'tags', filters: tags, filterType: 'search', isActive: false },
            {
              text: 'Количество оценок',
              colorClass: 'viewcounts',
              filters: viewCounts,
              filterType: 'default',
              isActive: false,
            },
            { text: 'Рейтинг', colorClass: 'rating', filters: rating, filterType: 'default', isActive: false },
            { text: 'Статус', colorClass: 'status', filters: status, filterType: 'default', isActive: false },
            { text: 'Сортировать', colorClass: 'author', filters: sort, filterType: 'sort', isActive: false },
          ]}
          mixClass={[styles['catalog__filter']]}
          urlFilter={searchParams.get('genre') ?? ''}
        />
        <div className={styles['catalog__cards-container']}>
          <ActiveFilters
            mixClass={[styles['catalog__active-filters']]}
            filters={activeFilters}
            toggleFilters={toggleFilters}
            shortMode={false}
          />
          <Cards
            mixClass={[styles['catalog__cards']]}
            cards={[
              { name: 'Название' },
              { name: 'Название' },
              { name: 'Название' },
              { name: 'Название' },
              { name: 'Название' },
              { name: 'Название' },
              { name: 'Название' },
              { name: 'Название' },
              { name: 'Название' },
              { name: 'Название' },
              { name: 'Название' },
              { name: 'Название' },
            ]}
          />
        </div>
        <CSSTransition
          timeout={200}
          in={scroll > 80}
          unmountOnExit
          classNames={{
            enter: styles['catalog__start-btn-enter'],
            enterActive: styles['catalog__start-btn-enter-active'],
            exit: styles['catalog__start-btn-exit'],
            exitActive: styles['catalog__start-btn-exit-active'],
          }}
        >
          <button onClick={() => handleClick()} className={styles['catalog__start-btn']}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18 7.79169L18 28.2084"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M28.209 18L18.0007 7.79169L7.79232 18"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </CSSTransition>
      </div>
    </section>
  );
};

export default Catalog;
