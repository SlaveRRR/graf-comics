'use client';
import React, { FC, useContext, useState } from 'react';
import ComicsPage from '../ComicsPage';
import styles from './index.module.scss';
import ComicsFooter from '../ComicsFooter';
import ComicsHeader from '../ComicsHeader';
import { ctx } from '@/context/contextProvider';

type Props = {
  imgs: string[];
};

const Comics: FC<Props> = ({ imgs }) => {
  
    const {visibleMenu} = useContext(ctx)

  return (
    <>
     {visibleMenu && <ComicsHeader title="Название главы" />} 
      <div className={styles['comics']}>
        {imgs.map((url, i) => (
          <ComicsPage key={i} image={url} />
        ))}
      </div>
      {visibleMenu && <ComicsFooter />} 
      
    </>
  );
};
export default Comics;
