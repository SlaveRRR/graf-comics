'use client';
import React, { FC, useContext } from 'react';
import { ctx } from '../../../context/contextProvider';
import styles from './index.module.scss';

type Props = {
  children: React.ReactNode;
};

const Main: FC<Props> = ({ children }) => {
  const {setActiveBurger,setActiveAvatar} = useContext(ctx);
  const handleClick = () =>{
    setActiveBurger(false);
    setActiveAvatar(false)
  }
  return <main className={styles.main} onClick={() => handleClick()}>{children}</main>;
};

export default Main;
