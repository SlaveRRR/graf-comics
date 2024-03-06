'use client';

import React,{ FC,useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ScrollToTop : FC  = () => {
  
  const path = usePathname()

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
  return null
}

export default ScrollToTop;