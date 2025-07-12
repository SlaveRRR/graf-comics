'use client';
import { useTheme } from '@/context/themeProvider';
import { FC, useEffect, useState } from 'react';
import { BackLink, Filters } from '../shared';
import TabsAuthorship from '../UI/TabsAuthorship';
import styles from './index.module.scss';

const AuthorshipComponent: FC = () => {
  const { theme, setTheme } = useTheme();
  const [flag, setFlag] = useState<string>('./flag.svg');
  useEffect(() => {
    if (theme === 'light') {
      setFlag('./flag.svg');
    }
    if (theme === 'dark') {
      setFlag('./flagWhite.svg');
    }
  }, [theme]);

  const blocks = Array(3).fill({});

  return (
    <div className={styles['authorship']}>
      <BackLink />
      <TabsAuthorship mixClass={[styles['tabs__items']]} tabs={['Комиксы', 'Мои комиксы', 'Новый комикс']}>
        <div className="">
          <div className={styles['authorship__text']}>
            Показано:
            <span>10 комиксов</span>
          </div>
          <div className={styles['authorship__comics']}>
            <div className={styles['authorship__comics--first']}>
              <Filters
                filters={[
                  {
                    text: 'Роль',
                    colorClass: 'tags',
                    filters: [
                      'Художник',
                      'Художник',
                      'Художник',
                      'Художник',
                      'Художник',
                      'Художник',
                      'Художник',
                      'Художник',
                      'Художник',
                      'Художник',
                    ],
                    filterType: 'search',
                    isActive: false,
                  },
                  {
                    text: 'Теги',
                    colorClass: 'tags',
                    filters: ['#тег', '#тег', '#тег', '#тег', '#тег', '#тег', '#тег', '#тег', '#тег', '#тег'],
                    filterType: 'search',
                    isActive: false,
                  },
                  {
                    text: 'Жанр',
                    colorClass: 'tags',
                    filters: ['Жанр', 'Жанр', 'Жанр', 'Жанр', 'Жанр', 'Жанр', 'Жанр', 'Жанр', 'Жанр', 'Жанр'],
                    filterType: 'search',
                    isActive: false,
                  },
                ]}
                mixClass={[styles['catalog__filter']]}
              />
            </div>
            <div className={styles['authorship__comics--two']}>
              {blocks.map((_, index) => (
                <div>
                  <div className={styles['authorship__view']}>
                    <p>Новый комикс</p>
                    <div className="">
                      <img src={flag} alt="flag" className={styles['authorship__view--flag']} />
                    </div>
                  </div>
                  <p>роли роли</p>
                  <div className={styles['authorship__genre']}>
                    <div className="">
                      <p>жанр</p>
                    </div>
                    <div className="">
                      <p>жанр</p>
                    </div>
                    <div className="">
                      <p>жанр</p>
                    </div>
                    <div className="">
                      <p>жанр</p>
                    </div>
                  </div>
                  <div className={styles['authorship__ViewTag']}>
                    <div className={styles['authorship__ViewTag--tag']}>
                      <div className="">
                        <p>#тег</p>
                      </div>
                      <div className="">
                        <p>#тег</p>
                      </div>
                      <div className="">
                        <p>#тег</p>
                      </div>
                      <div className="">
                        <p>#тег</p>
                      </div>
                    </div>
                    <p>100 лет назад</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <div className={styles['authorship__text']}>Мои комиксы</div>
          <div className={styles['authorship__comics']}>
            <div className={styles['authorship__mycomics--first']}>
              <h1 className={styles['authorship__mycomics--buttonfirst']}>Мои комиксы</h1>
              <h1 className={styles['authorship__mycomics--buttontwo']}>Сохранённые комиксы</h1>
            </div>
            <div className={styles['authorship__comics--two']}>
              <div>
                <div className={styles['authorship__view']}>
                  <p>Новый комикс</p>
                  <div className="">
                    <img src={flag} alt="flag" className={styles['authorship__view--flag']} />
                  </div>
                </div>
                <p>роли роли</p>
                <div className={styles['authorship__genre']}>
                  <div className="">
                    <p>жанр</p>
                  </div>
                  <div className="">
                    <p>жанр</p>
                  </div>
                  <div className="">
                    <p>жанр</p>
                  </div>
                  <div className="">
                    <p>жанр</p>
                  </div>
                </div>
                <div className={styles['authorship__ViewTag']}>
                  <div className={styles['authorship__ViewTag--tag']}>
                    <div className="">
                      <p>#тег</p>
                    </div>
                    <div className="">
                      <p>#тег</p>
                    </div>
                    <div className="">
                      <p>#тег</p>
                    </div>
                    <div className="">
                      <p>#тег</p>
                    </div>
                  </div>
                  <p>100 лет назад</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabsAuthorship>
    </div>
  );
};

export default AuthorshipComponent;
