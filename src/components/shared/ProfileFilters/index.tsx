'use client';
import React, { FC } from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

type Props = {
  tabArray: string[];
  sortArray: string[];
  mixClass: string[];
  isOpen: boolean;
  onClose: () => void;
}

const ProfileFilters: FC<Props> = ({ tabArray, isOpen, onClose, sortArray, mixClass }) => {
  return (
    <div>
      {isOpen && <div className={cn(styles['profile-filters__overlay'])} onClick={onClose}></div>}

      <div className={cn(styles['profile-filters'], { [styles.open]: isOpen }, ...mixClass)}>
        <button className={styles['profile-filters__close-popup-btn']} onClick={onClose}>
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.62891 4.2666L12.2698 12.8026" stroke="#7A5AF8" stroke-width="1.5" stroke-linecap="round" />
            <path d="M4.49219 12.6553L12.4053 4.41285" stroke="#7A5AF8" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </button>

        <div className={styles['profile-filters__tabs-section']}>
          <p className={styles['profile-filters__tabs']}>Вкладки</p>
          <ul>
            {tabArray.map((tab, index) => (
              <li key={index}>
                <input type="radio" id={`tab-${index}`} name="tabs" />
                <label htmlFor={`tab-${index}`} className={styles['profile-filters__option-p']}>{tab}</label>
              </li>
            ))}
          </ul>
          <a href="#" className={styles['create-tab-link']}>Создать вкладку</a>
        </div>

        <div className={styles['profile-filters__sort-section']}>
          <p className={styles['profile-filters__sort']}>Сортировать</p>
          <ul>
            {sortArray.map((sortOption, index) => (
              <li key={index}>
                <input type="radio" id={`sort-${index}`} name="sort" />
                <label htmlFor={`sort-${index}`} className={styles['profile-filters__option-p']}>{sortOption}</label>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles['profile-filters__action-buttons']}>
          <button className={`${styles['profile-filters__btn']} ${styles['profile-filters__btn--apply-btn']}`}>Применить
          </button>
          <button className={`${styles['profile-filters__btn']} ${styles['profile-filters__btn--reset-btn']}`}>Сбросить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileFilters;
