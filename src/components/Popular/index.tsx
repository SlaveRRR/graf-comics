'use client';
import { useTheme } from '@/context/themeProvider';
import { FC, useEffect, useState } from 'react';
import PopularCards from '../PopularCards';
import { BackLink } from '../shared';
import styles from './index.module.scss';
const Popular: FC = () => {
  const { theme, setTheme } = useTheme();
  const [rating, setRating] = useState<string>();
  const [vector, setVector] = useState<string>();
  const [cup, setCup] = useState<string>();
  useEffect(() => {
    if (theme === 'light') {
      setRating('/rating.svg');
      setVector('/Vector.svg');
      setCup('/cup.svg');
    } else {
      setRating('/ratingWhite.svg');
      setVector('/VectorWhite.svg');
      setCup('/cupWhite.svg');
    }
  }, [theme]);
  return (
    <div>
      <div className={'container'}>
        <BackLink mixClass={[styles['popular__backLink']]} />
      </div>
      <div className={styles['container']}>
        <PopularCards icon_text={rating} title_text="Топ рейтинга (месяц)" />
        <PopularCards icon_text={vector} title_text="Топ просмотров (месяц)" />
        <PopularCards icon_text={cup} title_text="Лучшее за все время" />
      </div>
    </div>
  );
};
export default Popular;
