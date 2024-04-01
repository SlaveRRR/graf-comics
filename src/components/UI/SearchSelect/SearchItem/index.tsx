'use client';
import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import cn from 'classnames';
import styles from './index.module.scss';
import { FilterItem } from '@/types/filter.type';
type Props = {
  text: string;
  toggleFilters: any;
  activeElement: boolean;
};

const SearchItem: FC<Props> = ({ text, toggleFilters, activeElement }) => {
  const [active, setActive] = useState(activeElement);

  const handleClick = () => {
    setActive((prev) => !prev);
    toggleFilters({text,colorClass:'violet'})
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
