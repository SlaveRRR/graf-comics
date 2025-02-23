import type { FilterItem, IFilter } from '@/types/filter.type';
import cn from 'classnames';
import React, { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  isActive: boolean;
  setActive: () => void;
  header: string;
  colorClass: IFilter['colorClass'];
  filters: string[];
  activeFilters: FilterItem[];
  handleFilter: (filter: FilterItem, e: React.MouseEvent<HTMLInputElement>) => void;
};
const Filter: FC<Props> = ({ activeFilters, colorClass, filters, handleFilter, header, isActive, setActive }) => {
  return (
    <div className={styles['filter__container']}>
      <button onClick={() => setActive()} className={styles['filter__header']}>
        {header}{' '}
        <svg
          className={cn(
            {
              [styles['filter__arrow-icon--active']]: isActive,
            },
            styles['filter__arrow-icon'],
          )}
          width="8"
          height="7"
          viewBox="0 0 8 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_758_1358)">
            <path d="M4 6C3.57093 6.00062 3.15658 5.77907 2.83532 5.37725C2.64365 5.13626 2.46195 4.9019 2.34296 4.73379L0.658953 2.39516C0.555317 2.2393 0.498371 2.03285 0.500036 1.81902C0.5017 1.60519 0.561846 1.40056 0.667883 1.24797C0.77392 1.09537 0.917627 1.00664 1.06892 1.00036C1.22021 0.994073 1.36736 1.07072 1.47956 1.21424L3.16767 3.55702C3.27786 3.71188 3.44199 3.92222 3.61256 4.13671C3.71964 4.27015 3.85751 4.34379 4.00029 4.34379C4.14308 4.34379 4.28095 4.27015 4.38803 4.13671C4.55801 3.92305 4.72214 3.71271 4.82881 3.56282L6.52044 1.21424C6.63264 1.07072 6.77979 0.994073 6.93108 1.00036C7.08237 1.00664 7.22608 1.09537 7.33212 1.24797C7.43815 1.40056 7.4983 1.60519 7.49996 1.81902C7.50163 2.03285 7.44468 2.2393 7.34105 2.39516L5.65411 4.73793C5.53688 4.90356 5.35693 5.13543 5.16585 5.37476C4.84463 5.77806 4.42973 6.00057 4 6Z" />
          </g>
          <defs>
            <clipPath id="clip0_758_1358">
              <rect width="7" height="7" fill="white" transform="matrix(1 0 0 -1 0.5 7)" />
            </clipPath>
          </defs>
        </svg>
      </button>

      <div className={styles['filter__content']}>
        {isActive &&
          filters.map((text, i) => (
            <label htmlFor={`${text}id`} className={cn(styles['filter__item'], styles[`filter__item--${colorClass}`])}>
              {text}{' '}
              <input
                checked={activeFilters.some(({ text: t }) => text === t)}
                onClick={(e) => handleFilter({ text, colorClass }, e)}
                id={`${text}id`}
                type="checkbox"
                className="myvisuallyhidden"
              />
            </label>
          ))}
      </div>
    </div>
  );
};

export default Filter;
