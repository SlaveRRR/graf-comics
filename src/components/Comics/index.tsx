'use client';
import { ctx } from '@/context/contextProvider';
import { FC, useContext, useEffect, useRef, useState } from 'react';
import ComicsFooter from '../ComicsFooter';
import ComicsHeader from '../ComicsHeader';
import ComicsPage from '../ComicsPage';
import styles from './index.module.scss';

type Props = {
  imgs: string[];
};

const Comics: FC<Props> = ({ imgs }) => {
  const { visibleMenu } = useContext(ctx);
  const [currrentPage, setCurrentPage] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: containerRef.current,
      threshold: 0.5, // Срабатывает, когда половина элемента видна
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '1', 10);
          setCurrentPage(index + 1); // Индекс начинается с 0, поэтому прибавляем 1
        }
      });
    }, options);

    const elements = containerRef.current?.querySelectorAll('[data-index]');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, [imgs]);
  return (
    <>
      {visibleMenu && <ComicsHeader title="Название главы" />}
      <div className={styles['comics']} ref={containerRef}>
        {imgs.map((url, i) => (
          <ComicsPage key={i} index={i} image={url} />
        ))}
      </div>
      {visibleMenu && <ComicsFooter currentPage={currrentPage} maxPage={imgs.length} />}
    </>
  );
};
export default Comics;
