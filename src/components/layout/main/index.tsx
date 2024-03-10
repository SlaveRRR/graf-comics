'use client';
import React, { FC, useCallback, useContext } from 'react';
import { ctx } from '../../../context/contextProvider';

type Props = {
  children: React.ReactNode;
};

const Main: FC<Props> = ({ children }) => {
  const {setActiveBurger,setActiveAvatar} = useContext(ctx);
  const handleClick = useCallback(() =>{
    setActiveBurger(false);
    setActiveAvatar(false)
  },[])
  return <main onClick={() => handleClick()}>{children}</main>;
};

export default Main;
