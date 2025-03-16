'use client';
import { IChapter } from '@/components/Chapter/types';
import { FC, useState } from 'react';
import Chapters from '../Chapters';
import styles from './index.module.scss';

type Props = {
  chapters: IChapter[];
};

const ChaptersButton: FC<Props> = ({ chapters }) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <button onClick={() => setActive((prev) => !prev)} className={styles['chapters__btn']}>
        {active ? (
          <svg width="auto" height="auto" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1528_10593)">
              <g clip-path="url(#clip1_1528_10593)">
                <path d="M4.75586 12.2426L13.2411 3.75736" stroke="#7A5AF8" stroke-width="1.8" stroke-linecap="round" />
                <path d="M13.2422 12.2426L4.75691 3.75736" stroke="#7A5AF8" stroke-width="1.8" stroke-linecap="round" />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_1528_10593">
                <rect width="17" height="16" fill="white" />
              </clipPath>
              <clipPath id="clip1_1528_10593">
                <rect width="14" height="14" fill="white" transform="translate(-0.900391 8) rotate(-45)" />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg width="auto" height="auto" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4H14M6 8H14M6 12H14" stroke="#7A5AF8" strokeWidth="2" strokeLinejoin="round" />
            <circle cx="3" cy="4" r="1" fill="#7A5AF8" />
            <circle cx="3" cy="8" r="1" fill="#7A5AF8" />
            <circle cx="3" cy="12" r="1" fill="#7A5AF8" />
          </svg>
        )}
      </button>
      {active && (
        <div className={styles['chapters']}>
          <Chapters chapters={chapters} />
        </div>
      )}
    </>
  );
};
export default ChaptersButton;
