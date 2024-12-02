'use client';

import { routes } from '@/config/routing';
import { ctx } from '@/context/contextProvider';
import { author, sortSmall, theme } from '@/data/data.json';
import cn from 'classnames';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FC, useContext } from 'react';
import { SliderArticles } from '../UI';
import { ActiveFilters, ArrowLink } from '../shared';
import GridGallery from '../shared/GridGallery';
import styles from './index.module.scss';

const Filters = dynamic(() => import('@/components/shared/Filters/index'), {
  ssr: false,
});

const Blog: FC = () => {
  const { activeFilters, toggleFilters } = useContext(ctx);
  const searchParams = useSearchParams();

  return (
    <>
      <GridGallery
        mixClass={['additional-class']}
        sloganText="Есть чем поделиться с миром?"
        descriptionText={
          <>
            Знаешь интересные <span>факты о комиксах?</span> Не стесняйся!
          </>
        }
        buttonText={'Напиши статью'}
      />

      <section className={styles['blog']}>
        <div className={cn(styles['blog__container'], 'container')}>
          <label htmlFor="search" className={styles['blog__search-label']}>
            {' '}
            <input
              type="text"
              id="search"
              placeholder="Найти статью или новость..."
              className={styles['blog__search-field']}
            />
          </label>
          <header className={styles['blog__header']}>
            <p className={styles['blog__header-text']}>Есть чем поделиться?</p>
            <Link className={styles['blog__header-link']} href={routes['Профиль']}>
              Напиши статью
            </Link>
          </header>

          <ArrowLink mixClass={[styles['blog__link']]} text="Новости" url="/news" />
          <SliderArticles arr={['Статья №1', 'Статья №2', 'Статья №3']} />
        </div>
      </section>
      <section className={styles['blog-articles']}>
        <div className="container">
          <ArrowLink mixClass={[styles['blog__link']]} text="Полезные статьи" url="/articles" />
          <div className={styles['articles']}>
            <div className={styles['articles__item']}>
              <header className={styles['articles__header']}>Название статьи</header>
              <p className={styles['articles__short']}>Кратко о статье</p>
              <Link className={styles['articles__link']} href={'/article'}>
                Читать статью
              </Link>
            </div>
            <div className={styles['articles__item']}>
              <header className={styles['articles__header']}>Название статьи</header>
              <p className={styles['articles__short']}>Кратко о статье</p>
              <Link className={styles['articles__link']} href={'/article'}>
                Читать статью
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['filter-section']}>
        <div className="container">
          <Filters
            filters={[
              { text: 'Тема', colorClass: 'theme', filters: theme, filterType: 'default', isActive: false },
              { text: 'Автор', colorClass: 'author', filters: author, filterType: 'search', isActive: false },
              { text: 'Сортировать', colorClass: 'violet', filters: sortSmall, filterType: 'sort', isActive: false },
            ]}
            mixClass={[styles['catalog__filter']]}
          />

          <div className={styles['filters-articles']}>
            <div>
              <div className={styles['short-sort-field']}>
                <label htmlFor="search" className={styles['filters-articles__search-label']}>
                  {' '}
                  <input
                    type="text"
                    id="search"
                    placeholder="Найти статью или новость..."
                    className={styles['filters-articles__search-field']}
                  />
                </label>

                <ActiveFilters
                  mixClass={[styles['filters-articles__active-filters']]}
                  filters={activeFilters}
                  toggleFilters={toggleFilters}
                  shortMode={false}
                />
              </div>
              <div className={styles['articles-card']}>
                <div className={styles['articles__item-card']}>
                  <header className={styles['articles__header']}>Название статьи</header>
                  <p className={styles['articles__short']}>Кратко о статье</p>
                  <Link className={styles['articles__link']} href={'/article'}>
                    Читать статью
                  </Link>
                </div>
                <div className={styles['articles__item-card']}>
                  <header className={styles['articles__header']}>Название статьи</header>
                  <p className={styles['articles__short']}>Кратко о статье</p>
                  <Link className={styles['articles__link']} href={'/article'}>
                    Читать статью
                  </Link>
                </div>
                <div className={styles['articles__item-card']}>
                  <header className={styles['articles__header']}>Название статьи</header>
                  <p className={styles['articles__short']}>Кратко о статье</p>
                  <Link className={styles['articles__link']} href={'/article'}>
                    Читать статью
                  </Link>
                </div>
                <div className={styles['articles__item-card']}>
                  <header className={styles['articles__header']}>Название статьи</header>
                  <p className={styles['articles__short']}>Кратко о статье</p>
                  <Link className={styles['articles__link']} href={'/article'}>
                    Читать статью
                  </Link>
                </div>
                <div className={styles['articles__item-card']}>
                  <header className={styles['articles__header']}>Название статьи</header>
                  <p className={styles['articles__short']}>Кратко о статье</p>
                  <Link className={styles['articles__link']} href={'/article'}>
                    Читать статью
                  </Link>
                </div>
                <div className={styles['articles__item-card']}>
                  <header className={styles['articles__header']}>Название статьи</header>
                  <p className={styles['articles__short']}>Кратко о статье</p>
                  <Link className={styles['articles__link']} href={'/article'}>
                    Читать статью
                  </Link>
                </div>
                <div className={styles['articles__item-card']}>
                  <header className={styles['articles__header']}>Название статьи</header>
                  <p className={styles['articles__short']}>Кратко о статье</p>
                  <Link className={styles['articles__link']} href={'/article'}>
                    Читать статью
                  </Link>
                </div>
                <div className={styles['articles__item-card']}>
                  <header className={styles['articles__header']}>Название статьи</header>
                  <p className={styles['articles__short']}>Кратко о статье</p>
                  <Link className={styles['articles__link']} href={'/article'}>
                    Читать статью
                  </Link>
                </div>
                <div className={styles['articles__item-card']}>
                  <header className={styles['articles__header']}>Название статьи</header>
                  <p className={styles['articles__short']}>Кратко о статье</p>
                  <Link className={styles['articles__link']} href={'/article'}>
                    Читать статью
                  </Link>
                </div>
                <div className={styles['articles__item-card']}>
                  <header className={styles['articles__header']}>Название статьи</header>
                  <p className={styles['articles__short']}>Кратко о статье</p>
                  <Link className={styles['articles__link']} href={'/article'}>
                    Читать статью
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles['filters-articles__filters']}>
              <div className={styles['filter']}>
                <div className={styles['filter__title']}>
                  <Filters
                    filters={[
                      { text: 'Тема', colorClass: 'theme', filters: theme, filterType: 'default', isActive: false },
                      { text: 'Автор', colorClass: 'author', filters: author, filterType: 'search', isActive: false },
                      {
                        text: 'Сортировать',
                        colorClass: 'violet',
                        filters: sortSmall,
                        filterType: 'sort',
                        isActive: false,
                      },
                    ]}
                    mixClass={[styles['catalog__filter1920']]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
