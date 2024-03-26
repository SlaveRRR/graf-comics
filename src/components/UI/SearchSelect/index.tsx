'use client';
import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import SearchItem from './SearchItem';
import { ActiveFilters } from '@/components/shared';
import { FilterItem } from '@/types/filter.type';

type Props = {
  data: FilterItem[];
  title: string;
};

const SearchSelect: FC<Props> = ({ data, title }) => {
  const [visible, setVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [activeElements, setActiveElements] = useState<FilterItem[]>([]);

  const refCnt = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event) => {
      if (!refCnt?.current.contains(event.target)) {
        setVisible(false);
      }
    };
    document.addEventListener('click', handler);
    return () => {
      document.removeEventListener('click', handler);
    };
  });

  return (
    <div ref={refCnt} className={styles['search']}>
      <p className={styles['search-title']}>{title}</p>
      <label htmlFor="search" className={styles['search-label']}>
        <input
          onFocus={(e) => {
            setVisible(true);
          }}
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          type="text"
          id="search"
          placeholder="Поиск жанра"
          className={styles['search-field']}
        />
      </label>
      {visible && (
        <ul className={styles['items']}>
          {data
            .filter((el) => el.text.includes(searchValue))
            .map(({ text }) => (
              <SearchItem
                setActiveElements={setActiveElements}
                activeElements={activeElements}
                key={text}
                text={text}
              />
            ))}
        </ul>
      )}
      {activeElements.length > 0 && <ActiveFilters filters={activeElements} setFilters={setActiveElements} />}
    </div>
  );
};
export default SearchSelect;
