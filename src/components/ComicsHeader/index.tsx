import React, { FC } from 'react';
import cn from 'classnames';
import { BackLink } from '../shared';
import styles from './index.module.scss';

type Props = {
  title: string;
};

const ComicsHeader : FC<Props> = ({ title }) => {
  return (
    <div className={cn(styles['header'],'container')}>
      <BackLink text='Назад'/>
      <p className={styles['header__title']}>{title}</p>
      <button className={styles['header__btn']}>
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 4H14M6 8H14M6 12H14"
            stroke="#7A5AF8"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="3" cy="4" r="1" fill="#7A5AF8" />
          <circle cx="3" cy="8" r="1" fill="#7A5AF8" />
          <circle cx="3" cy="12" r="1" fill="#7A5AF8" />
        </svg>
      </button>
    </div>
  );
};
export default ComicsHeader;
