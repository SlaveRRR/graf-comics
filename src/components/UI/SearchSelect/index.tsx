'use client';
import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import SearchItem from './SearchItem';
import { ActiveFilters } from '@/components/shared';
import { FilterItem } from '@/types/filter.type';

type Props = {
  data: FilterItem[];
  title: string;
  state: FilterItem[];
  toggleFilters: any;
  searchTitle: string;
};

const SearchSelect: FC<Props> = ({ data, title, state, toggleFilters, searchTitle }) => {
  const [visible, setVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');

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
          placeholder={searchTitle}
          className={styles['search-field']}
        />
      </label>
      {visible && (
        <ul className={styles['items']}>
          {data
            .filter((el) => el.text.includes(searchValue))
            .map(({ text }) => (
              <SearchItem
                toggleFilters={toggleFilters}
                activeElement={state.some((e) => e.text === text)}
                key={text}
                text={text}
              />
            ))}
        </ul>
      )}
      {state.length > 0 && <ActiveFilters filters={state} toggleFilters={toggleFilters} />}
    </div>
  );
};
export default SearchSelect;
