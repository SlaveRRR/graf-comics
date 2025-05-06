import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const [size, setSize] = useState<'mobile' | 'tablet' | 'desktop'>(() => {
    if (typeof window === 'undefined') return 'desktop'; // SSR fallback
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width >= 768 && width < 1024) return 'tablet';
    return 'desktop';
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setSize('mobile');
      else if (width >= 768 && width < 1024) setSize('tablet');
      else setSize('desktop');
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { size };
};
