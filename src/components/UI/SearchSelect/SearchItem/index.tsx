'use client';
import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import cn from 'classnames';
import styles from './index.module.scss';
import { FilterItem } from '@/types/filter.type';
type Props = {
  text: string;
  setActiveElements: Dispatch<SetStateAction<FilterItem[]>>;
  activeElements: FilterItem[];
};

const SearchItem: FC<Props> = ({ text, setActiveElements, activeElements }) => {
  const [active, setActive] = useState(activeElements.some(e => e.text === text));

  const handleClick = () => {
    setActive((prev) => !prev);
    setActiveElements((prev) => (active ? prev.filter((el) => el.text !== text) : [{text,colorClass:'violet'}, ...prev]));
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
