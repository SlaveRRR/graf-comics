import { author, sortSmall, theme } from '@/data/data.json';
import cn from 'classnames';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FC } from 'react';
import { Button, SliderArticles } from '../UI';
import { ArrowLink } from '../shared';
import styles from './index.module.scss';

const Filters = dynamic(() => import('@/components/shared/Filters/index'), {
  ssr: false,
});

const Blog: FC = () => {
  return (
    <>
      <section className={styles['blog']}>
        <section className={styles['image-section']}>
          <div className={styles['cards']}>
            <div className={styles['cards__item']}>
              <img src={'/homePage6.svg'} alt="" />
            </div>
            <div className={styles['cards__item']}>
              <img className={styles['cards__item--right']} src={'/homePage3.svg'} alt="" />
            </div>
            <div className={styles['cards__item']}>
              <img src={'/homePage4.svg'} alt="" />
            </div>
            <div className={styles['cards__item']}>
              <img src={'/homePage5.svg'} alt="" />
            </div>
          </div>
          <div className={styles['image-container']}>
            <div className={styles['image-container__text-container']}>
              <h1 className={styles['image-container__slogan']}>Есть чем поделиться с миром?</h1>
              <p className={styles['image-container__text']}>
                Знаешь интересные <span>факты о комиксах?</span> Не стесняйся!
              </p>
              <div className={styles['image-container__btn']}>
                <Button mixClass={[styles['image-container__btn']]}>Напиши статью</Button>
              </div>
            </div>
          </div>

          <div className={styles['cards-pc']}>
            <div className={styles['cards-pc__item']}>
              <img src={'/homePage2.svg'} alt="Card 2" />
            </div>

            <div className={styles['cards-pc__item']}>
              <img src={'/homePage1.svg'} alt="Card 1" />
            </div>

            <div className={styles['cards-pc__item']}>
              <img src={'/homePage3.svg'} alt="Card 3" />
            </div>

            <div className={styles['cards-pc__item']}>
              <img src={'/homePage7.svg'} alt="Card 7" />
            </div>

            <div className={styles['cards-pc__item']}>
              <img src={'/homePage4.svg'} alt="Card 4" />
            </div>

            <div className={styles['cards-subgrid']}>
              <div className={styles['cards-subgrid__item']}>
                <img src={'/homePage5.svg'} alt="Card 5" />
              </div>
              <div className={styles['cards-subgrid__item']}>
                <img src={'/homePage6.svg'} alt="Card 6" />
              </div>
            </div>

            <div className={styles['cards-subgrid-bottom']}>
              <div className={styles['cards-subgrid-bottom__item']}>
                <img src={'/homePage8.svg'} alt="Card 8" />
              </div>
              <div className={styles['cards-subgrid-bottom__item']}>
                <img src={'/homePage9.svg'} alt="Card 9" />
              </div>
            </div>
          </div>
          <div className={styles['cards']}>
            <div className={styles['cards__item']}>
              <img src={'/homePage9.svg'} alt="" />
            </div>
            <div className={styles['cards__item']}>
              <img src={'/homePage1.svg'} alt="" />
            </div>
            <div className={styles['cards__item']}>
              <img src={'/homePage7.svg'} alt="" />
            </div>
            <div className={styles['cards__item']}>
              <img className={styles['cards__item--left']} src={'/homePage8.svg'} alt="" />
            </div>
          </div>
        </section>
        <div className={cn(styles['blog__container'], 'container')}>
          <header className={styles['blog__header']}>
            <p className={styles['blog__header-text']}>
              Есть чем поделиться с миром? Знаешь интересные <span>факты о комиксах?</span>
            </p>
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
              <div className={styles['articles__img']}>
                <img src="" alt="" />
              </div>
              <Link className={styles['articles__link']} href={'/article'}>
                Читать статью
              </Link>
            </div>
            <div className={styles['articles__item']}>
              <header className={styles['articles__header']}>Название статьи</header>
              <p className={styles['articles__short']}>Кратко о статье</p>
              <div className={styles['articles__img']}>
                <img src="" alt="" />
              </div>
              <Link className={styles['articles__link']} href={'/article'}>
                Читать статью
              </Link>
            </div>
            <div className={styles['articles__item']}>
              <header className={styles['articles__header']}>Название статьи</header>
              <p className={styles['articles__short']}>Кратко о статье</p>
              <div className={styles['articles__img']}>
                <img src="" alt="" />
              </div>
              <Link className={styles['articles__link']} href={'/article'}>
                Читать статью
              </Link>
            </div>
            <div className={styles['articles__item']}>
              <header className={styles['articles__header']}>Название статьи</header>
              <p className={styles['articles__short']}>Кратко о статье</p>
              <div className={styles['articles__img']}>
                <img src="" alt="" />
              </div>
              <Link className={styles['articles__link']} href={'/article'}>
                Читать статью
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['filter-section']}>
        <div className={styles['container-articles']}>
          <div className={styles['container-filter']}>
            <div className={styles['blog__search']}>
              <label htmlFor="search" className={styles['blog__search-label']}>
                <input
                  type="text"
                  id="search"
                  placeholder="Название, автор, персонаж..."
                  className={styles['blog__search-field']}
                />
              </label>
            </div>
            <div className={styles['articles-card']}>
              <div className={styles['articles__item-card']}>
                <header className={styles['articles__header']}>Название статьи</header>
                <p className={styles['articles__short']}>Кратко о статье</p>
                <div className={styles['articles__img']}>
                  <img src="" alt="" />
                </div>
                <Link className={styles['articles__link']} href={'/article/1'}>
                  Читать статью
                </Link>
              </div>
              <div className={styles['articles__item-card']}>
                <header className={styles['articles__header']}>Название статьи</header>
                <p className={styles['articles__short']}>Кратко о статье</p>
                <div className={styles['articles__img']}>
                  <img src="" alt="" />
                </div>
                <Link className={styles['articles__link']} href={'/article/1'}>
                  Читать статью
                </Link>
              </div>
              <div className={styles['articles__item-card']}>
                <header className={styles['articles__header']}>Название статьи</header>
                <p className={styles['articles__short']}>Кратко о статье</p>
                <div className={styles['articles__img']}>
                  <img src="" alt="" />
                </div>
                <Link className={styles['articles__link']} href={'/article/1'}>
                  Читать статью
                </Link>
              </div>
              <div className={styles['articles__item-card']}>
                <header className={styles['articles__header']}>Название статьи</header>
                <p className={styles['articles__short']}>Кратко о статье</p>
                <div className={styles['articles__img']}>
                  <img src="" alt="" />
                </div>
                <Link className={styles['articles__link']} href={'/article/1'}>
                  Читать статью
                </Link>
              </div>
              <div className={styles['articles__item-card']}>
                <header className={styles['articles__header']}>Название статьи</header>
                <p className={styles['articles__short']}>Кратко о статье</p>
                <div className={styles['articles__img']}>
                  <img src="" alt="" />
                </div>
                <Link className={styles['articles__link']} href={'/article/1'}>
                  Читать статью
                </Link>
              </div>
              <div className={styles['articles__item-card']}>
                <header className={styles['articles__header']}>Название статьи</header>
                <p className={styles['articles__short']}>Кратко о статье</p>
                <div className={styles['articles__img']}>
                  <img src="" alt="" />
                </div>
                <Link className={styles['articles__link']} href={'/article/1'}>
                  Читать статью
                </Link>
              </div>
              <div className={styles['articles__item-card']}>
                <header className={styles['articles__header']}>Название статьи</header>
                <p className={styles['articles__short']}>Кратко о статье</p>
                <div className={styles['articles__img']}>
                  <img src="" alt="" />
                </div>
                <Link className={styles['articles__link']} href={'/article/1'}>
                  Читать статью
                </Link>
              </div>
              <div className={styles['articles__item-card']}>
                <header className={styles['articles__header']}>Название статьи</header>
                <p className={styles['articles__short']}>Кратко о статье</p>
                <div className={styles['articles__img']}>
                  <img src="" alt="" />
                </div>
                <Link className={styles['articles__link']} href={'/article/1'}>
                  Читать статью
                </Link>
              </div>
              <div className={styles['articles__item-card']}>
                <header className={styles['articles__header']}>Название статьи</header>
                <p className={styles['articles__short']}>Кратко о статье</p>
                <div className={styles['articles__img']}>
                  <img src="" alt="" />
                </div>
                <Link className={styles['articles__link']} href={'/article/1'}>
                  Читать статью
                </Link>
              </div>
              <div className={styles['articles__item-card']}>
                <header className={styles['articles__header']}>Название статьи</header>
                <p className={styles['articles__short']}>Кратко о статье</p>
                <div className={styles['articles__img']}>
                  <img src="" alt="" />
                </div>
                <Link className={styles['articles__link']} href={'/article/1'}>
                  Читать статью
                </Link>
              </div>
            </div>
          </div>
          <div className={styles['articles-filter']}>
            <Filters
              filters={[
                { text: 'Тема', colorClass: 'theme', filters: theme, filterType: 'default', isActive: false },
                { text: 'Автор', colorClass: 'author', filters: author, filterType: 'search', isActive: false },
                { text: 'Сортировать', colorClass: 'violet', filters: sortSmall, filterType: 'sort', isActive: false },
              ]}
              mixClass={[styles['catalog__filter']]}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
