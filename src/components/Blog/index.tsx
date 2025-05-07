import { author, sortSmall, theme } from '@/data/data.json';
import cn from 'classnames';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FC } from 'react';
import { SliderArticles } from '../UI';
import { ArrowLink } from '../shared';
import styles from './index.module.scss';

const Filters = dynamic(() => import('@/components/shared/Filters/index'), {
  ssr: false,
});

const Blog: FC = () => {
  return (
    <>
      <section className={styles['blog']}>
        <div className={cn(styles['blog__container'], 'container')}>
          <label htmlFor="search" className={styles['blog__search-label']}>
            {' '}
            <input
              type="text"
              id="search"
              placeholder="Название, автор, персонаж..."
              className={styles['blog__search-field']}
            />
          </label>
          <header className={styles['blog__header']}>
            <p className={styles['blog__header-text']}>Есть чем поделиться?</p>
            <Link className={styles['blog__header-link']} href={'/add-article/images'}>
              Напиши статью
            </Link>
          </header>

          <ArrowLink mixClass={[styles['blog__link']]} text="Новости" url="/news" />
          <SliderArticles slides={['Статья №1', 'Статья №2', 'Статья №3']} />
        </div>
      </section>
      <section className={styles['blog-articles']}>
        <div className="container">
          <ArrowLink mixClass={[styles['blog__link']]} text="Популярные статьи" url="/popular-article" />
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
          <div className={styles['articles-card']}>
            <div className={styles['articles__item-card']}>
              <header className={styles['articles__header']}>Название статьи</header>
              <p className={styles['articles__short']}>Кратко о статье</p>
              <Link className={styles['articles__link']} href={'/article/1'}>
                Читать статью
              </Link>
            </div>
            <div className={styles['articles__item-card']}>
              <header className={styles['articles__header']}>Название статьи</header>
              <p className={styles['articles__short']}>Кратко о статье</p>
              <Link className={styles['articles__link']} href={'/article/1'}>
                Читать статью
              </Link>
            </div>
            <div className={styles['articles__item-card']}>
              <header className={styles['articles__header']}>Название статьи</header>
              <p className={styles['articles__short']}>Кратко о статье</p>
              <Link className={styles['articles__link']} href={'/article/1'}>
                Читать статью
              </Link>
            </div>
            <div className={styles['articles__item-card']}>
              <header className={styles['articles__header']}>Название статьи</header>
              <p className={styles['articles__short']}>Кратко о статье</p>
              <Link className={styles['articles__link']} href={'/article/1'}>
                Читать статью
              </Link>
            </div>
            <div className={styles['articles__item-card']}>
              <header className={styles['articles__header']}>Название статьи</header>
              <p className={styles['articles__short']}>Кратко о статье</p>
              <Link className={styles['articles__link']} href={'/article/1'}>
                Читать статью
              </Link>
            </div>
            <div className={styles['articles__item-card']}>
              <header className={styles['articles__header']}>Название статьи</header>
              <p className={styles['articles__short']}>Кратко о статье</p>
              <Link className={styles['articles__link']} href={'/article/1'}>
                Читать статью
              </Link>
            </div>
            <div className={styles['articles__item-card']}>
              <header className={styles['articles__header']}>Название статьи</header>
              <p className={styles['articles__short']}>Кратко о статье</p>
              <Link className={styles['articles__link']} href={'/article/1'}>
                Читать статью
              </Link>
            </div>
            <div className={styles['articles__item-card']}>
              <header className={styles['articles__header']}>Название статьи</header>
              <p className={styles['articles__short']}>Кратко о статье</p>
              <Link className={styles['articles__link']} href={'/article/1'}>
                Читать статью
              </Link>
            </div>
            <div className={styles['articles__item-card']}>
              <header className={styles['articles__header']}>Название статьи</header>
              <p className={styles['articles__short']}>Кратко о статье</p>
              <Link className={styles['articles__link']} href={'/article/1'}>
                Читать статью
              </Link>
            </div>
            <div className={styles['articles__item-card']}>
              <header className={styles['articles__header']}>Название статьи</header>
              <p className={styles['articles__short']}>Кратко о статье</p>
              <Link className={styles['articles__link']} href={'/article/1'}>
                Читать статью
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
