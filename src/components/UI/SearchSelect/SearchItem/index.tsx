'use client';
import React, { FC, useState } from 'react';
import cn from 'classnames';
import styles from './index.module.scss';
import { FilterItem } from '@/types/filter.type';
type Props = {
  text: string;
  toggleFilters: any;
  activeElement: boolean;
  multiple: boolean;
  state: FilterItem[];
};

const SearchItem: FC<Props> = ({ text, toggleFilters, activeElement, multiple, state }) => {
  const [active, setActive] = useState(activeElement);

  const handleClick = () => {
    if (multiple || (!multiple && state.length === 1 && state[0].text === text) || state.length === 0) {
      setActive((prev) => !prev);
      toggleFilters({ text, colorClass: 'violet' });
    }
  };

  return (
    <li
      className={cn(styles['item'], {
        [styles['item--active']]: active,
      })}
      onClick={(e) => handleClick()}
    >
      {text}
    </li>
  );
};
export default SearchItem;
