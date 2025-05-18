'use client';
import { MixClass } from '@/types/mixClass.type';
import cn from 'classnames';
import { FC, useState } from 'react';
import styles from './index.module.scss';

type Props = {
  tabArray: string[];
  sortArray: string[];
  isOpen: boolean;
  onClose: () => void;
} & MixClass;

const ProfileFilters: FC<Props> = ({ tabArray, isOpen, onClose, sortArray, mixClass }) => {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  const [selectedSort, setSelectedSort] = useState<string | null>(null);

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  const handleSortChange = (sort: string) => {
    setSelectedSort(sort);
  };

  const handleReset = () => {
    setSelectedTab(null);
    setSelectedSort(null);
  };

  return (
    <div>
      {isOpen && <div className={cn(styles['profile-filters__overlay'])} onClick={onClose}></div>}

      <div className={cn(styles['profile-filters'], { [styles.open]: isOpen }, ...mixClass)}>
        <button className={styles['profile-filters__close-popup-btn']} onClick={onClose}>
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.62891 4.2666L12.2698 12.8026" stroke="#7A5AF8" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M4.49219 12.6553L12.4053 4.41285" stroke="#7A5AF8" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <div className={styles['profile-filters__tabs-section']}>
          <p className={styles['profile-filters__tabs']}>Вкладки</p>
          <ul>
            {tabArray.map((tab, index) => (
              <li key={index}>
                <input
                  type="radio"
                  id={`tab-${index}`}
                  name="tabs"
                  checked={selectedTab === tab}
                  onChange={() => handleTabChange(tab)}
                />
                <label htmlFor={`tab-${index}`} className={styles['profile-filters__option-p']}>
                  {tab}
                </label>
              </li>
            ))}
          </ul>
          <a href="#" className={styles['create-tab-link']}>
            Создать вкладку
          </a>
        </div>

        <div className={styles['profile-filters__sort-section']}>
          <p className={styles['profile-filters__sort']}>Сортировать</p>
          <ul>
            {sortArray.map((sortOption, index) => (
              <li key={index}>
                <input
                  type="radio"
                  id={`sort-${index}`}
                  name="sort"
                  checked={selectedSort === sortOption}
                  onChange={() => handleSortChange(sortOption)}
                />
                <label htmlFor={`sort-${index}`} className={styles['profile-filters__option-p']}>
                  {sortOption}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles['profile-filters__action-buttons']}>
          <button className={`${styles['profile-filters__btn']} ${styles['profile-filters__btn--apply-btn']}`}>
            Применить
          </button>
          <button
            className={`${styles['profile-filters__btn']} ${styles['profile-filters__btn--reset-btn']}`}
            onClick={handleReset}
          >
            Сбросить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileFilters;
