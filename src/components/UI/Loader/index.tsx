'use client';
import React, { FC, useContext } from 'react';
import { ctx } from '@/context/contextProvider';
import cn from 'classnames';
import styles from './index.module.scss';

const Loader: FC = () => {
  const { activeLoader } = useContext(ctx);

  return (
    <>{activeLoader && <img className={styles['box']} src="/loader.gif" alt="loader" />}</>
    // <div
    //   className={cn(styles['loader'], {
    //     [styles['loader--active']]: activeLoader,
    //   })}
    // >
    //   <h2 className={styles['loader__text']}>Секундочку...</h2>
    //   <div className={styles['circles']}>
    //     <span className={styles['circles__item']}></span>
    //     <span className={styles['circles__item']}></span>
    //     <span className={styles['circles__item']}></span>
    //   </div>
    // </div>
  );
};

export default Loader;
