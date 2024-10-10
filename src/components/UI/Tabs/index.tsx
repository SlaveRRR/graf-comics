'use client';
import cn from 'classnames';
import React, { FC, useLayoutEffect, useState } from 'react';
import type { MixClass } from '../../../types/mixClass.type';
import styles from './index.module.scss';

type Props = {
  tabs: string[];
  children: React.ReactNode;
} & MixClass;

type ScrollActive = {
  left: number;
  width: number;
};

const Tabs: FC<Props> = ({ tabs, children, mixClass }) => {
  const [numActive, setNumActive] = useState<number>(0);

  const [scrollActive, setScrollActive] = useState<ScrollActive>({
    left: 0,
    width: 0,
  });

  const [tabsWidths, setTabsWidths] = useState<number[]>([]);

  const changeActive = (index: number) => {
    setNumActive(index);
    const { left } = document.querySelectorAll(`.${styles['btns__item']}`).item(index).getBoundingClientRect();

    setScrollActive({ ...scrollActive, width: tabsWidths[index], left: left - tabsWidths[index] / 8 });
  };

  useLayoutEffect(() => {
    const widths: number[] = [];

    document
      .querySelectorAll(`.${styles['btns__item']}`)
      .forEach((v) => widths.push(v.clientWidth + v.clientWidth / 4));

    setTabsWidths(widths);

    const { left } = document.querySelectorAll(`.${styles['btns__item']}`).item(0).getBoundingClientRect();

    setScrollActive({ ...scrollActive, width: widths[0], left: left - widths[0] / 8 });
    setNumActive(0);
  }, []);

  return (
    <div className={'tabs'}>
      <div className={cn(styles['tabs__scroller'], ...mixClass)}>
        <div className={cn(styles['tabs__btns'], styles['btns'])}>
          {tabs.map((value, index) => (
            <button
              onClick={() => changeActive(index)}
              key={index}
              className={cn(styles['btns__item'], {
                [styles['btns__item--active']]: numActive === index,
              })}
            >
              {value}
            </button>
          ))}
        </div>
        <span
          style={{
            left: `${scrollActive.left}px`,
            width: `${scrollActive.width}px`,
          }}
          className={styles['tabs__active']}
        ></span>
      </div>

      <div className={styles['tabs__content']}>{children[numActive]}</div>
    </div>
  );
};

export default Tabs;
