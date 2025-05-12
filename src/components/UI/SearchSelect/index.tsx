'use client';
import { ActiveFilters } from '@/components/shared';
import { FilterItem } from '@/types/filter.type';
import { FC, useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import SearchItem from './SearchItem';

type Props = {
  data: FilterItem[];
  title: string;
  state: FilterItem[];
  toggleFilters: any;
  searchTitle: string;
  multiple: boolean;
};

const SearchSelect: FC<Props> = ({ data, title, state, toggleFilters, searchTitle, multiple }) => {
  const [visible, setVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const refCnt = useRef<HTMLDivElement>(null);

  const filteredItems = data.filter((el) => el.text.toLowerCase().includes(searchValue.toLowerCase()));

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
          {filteredItems.length > 0 ? (
            filteredItems.map(({ text }) => (
              <SearchItem
                toggleFilters={(el) => {
                  setSearchValue('');
                  toggleFilters(el);
                }}
                activeElement={state.some((e) => e.text === text)}
                key={text}
                text={text}
                multiple={multiple}
                state={state}
              />
            ))
          ) : (
            <p className={styles['no-results']}>нет результата</p>
          )}
        </ul>
      )}
      {state.length > 0 && <ActiveFilters mixClass={[styles['tags']]} filters={state} toggleFilters={toggleFilters} />}
    </div>
  );
};
export default SearchSelect;
