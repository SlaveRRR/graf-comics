'use client';

import { ctx } from '@/context/contextProvider';

import { FC, useContext, useEffect, useRef, useState } from 'react';

import ComicsFooter from '../ComicsFooter';

import ComicsHeader from '../ComicsHeader';

import ComicsPage from '../ComicsPage';

import { IChapter } from '../Chapter/types';
import { ChaptersButton } from '../UI';
import styles from './index.module.scss';

type Props = {
  imgs: string[];
};

const chapters: IChapter[] = [
  {
    chapterId: '5',
    timeCode: '00.00.00',
    images: [],
    isRead: false,
    title: 'глава 0',
    likes: 5,
  },
  {
    chapterId: '8',
    timeCode: '00.00.00',
    images: [],
    isRead: false,
    title: 'глава 1',
    likes: 5,
  },
  {
    chapterId: '4',
    timeCode: '00.00.00',
    images: [],
    isRead: false,
    title: 'глава 2',
    likes: 5,
  },
];

const Comics: FC<Props> = ({ imgs }) => {
  const { visibleMenu } = useContext(ctx);

  const [currentPage, setCurrentPage] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const options = {
      root: containerRef.current,

      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);

          setCurrentPage(index);
        }
      });
    }, options);

    const elements = containerRef.current?.querySelectorAll('[data-index]');

    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, [imgs]);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  const goToNextPage = () => {
    if (currentPage < imgs.length - 1) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      {isMobile ? (
        <>
          {visibleMenu && <ComicsHeader title="Название главы" />}

          <div className={styles['comics']} ref={containerRef}>
            {imgs.map((url, i) => (
              <ComicsPage key={i} index={i} image={url} />
            ))}
          </div>

          {visibleMenu && <ComicsFooter currentPage={currentPage + 1} maxPage={imgs.length} />}
        </>
      ) : (
        <>
          <div className={styles['comics-pc']} ref={containerRef}>
            <div className="">
              <div className={styles['comics-pc__slideView']}>
                <h1 className={styles['comics-pc__slidePage']} onClick={goToPreviousPage}>
                  &lt;
                </h1>

                <h1 className={styles['comics-pc__slideText']}>
                  {currentPage + 1} - {imgs.length}
                </h1>

                <h1 className={styles['comics-pc__slidePage']} onClick={goToNextPage}>
                  &gt;
                </h1>
              </div>
              <div className="">
                <div className={styles['comics-pc__button']}>
                  <ChaptersButton chapters={chapters} />
                  <p>0</p>
                  <h1 className={styles['buttons__item']}>
                    <svg width="auto" height="auto" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M17 29.7499C24.0416 29.7499 29.75 24.0416 29.75 16.9999C29.75 9.95831 24.0416 4.24994 17 4.24994C9.95837 4.24994 4.25 9.95831 4.25 16.9999C4.25 19.1074 4.76132 21.0955 5.66667 22.8468L4.25 29.7499L11.1531 28.3333C12.9045 29.2386 14.8925 29.7499 17 29.7499Z"
                        stroke="#7A5AF8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M10 13.9999L23 13.9999" stroke="#7A5AF8" strokeWidth="2" strokeLinecap="round" />
                      <path d="M10 17.9999H14H18" stroke="#7A5AF8" strokeWidth="2" strokeLinecap="round" />
                      <path d="M10 21.9999H15H20" stroke="#7A5AF8" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </h1>
                  <p>0</p>
                  <h1 className={styles['buttons__item']}>
                    <svg width="auto" height="auto" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19.9559 1C18.7365 1.01993 17.5437 1.37753 16.498 2.03671C15.4522 2.69589 14.5906 3.63329 14 4.75426C13.4094 3.63329 12.5478 2.69589 11.502 2.03671C10.4563 1.37753 9.26346 1.01993 8.04407 1C6.10021 1.08873 4.26877 1.98209 2.94989 3.4849C1.631 4.98772 0.931876 6.97784 1.00524 9.02047C1.00524 14.1934 6.18798 19.843 10.5347 23.6735C11.5052 24.5303 12.7323 25 14 25C15.2677 25 16.4948 24.5303 17.4653 23.6735C21.812 19.843 26.9948 14.1934 26.9948 9.02047C27.0681 6.97784 26.369 4.98772 25.0501 3.4849C23.7312 1.98209 21.8998 1.08873 19.9559 1Z"
                        stroke="#7A5AF8"
                        strokeWidth="2"
                      />
                    </svg>
                  </h1>
                  <p>0</p>
                </div>
                <div className={styles['comics-pc__pages']}>
                  <div className={styles['comics-pc__slide']}>
                    <div className={styles['comics-pc__slide--back']} onClick={goToPreviousPage}></div>
                    <div className={styles['comics-pc__slide--next']} onClick={goToNextPage}></div>
                  </div>
                  <ComicsPage index={currentPage} image={imgs[currentPage]} />
                </div>
              </div>
              <div className={styles['comics-pc__slideView']}>
                <h1 className={styles['comics-pc__slidePage']} onClick={goToPreviousPage}>
                  &lt;
                </h1>

                <h1 className={styles['comics-pc__slideText']}>
                  {currentPage + 1} - {imgs.length}
                </h1>

                <h1 className={styles['comics-pc__slidePage']} onClick={goToNextPage}>
                  &gt;
                </h1>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Comics;
