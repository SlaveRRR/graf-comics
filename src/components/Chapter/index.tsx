'use client';
import { useActions } from '@/hooks/redux';
import { readFiles } from '@/utils/filereader';
import cn from 'classnames';
import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import { IChapter } from './types';

const defaultImages = ['/bg-default.svg', '/bg-default.svg', '/bg-default.svg'];

type Props = {
  chapter: IChapter;
  tomId: string;
};

const Chapter: FC<Props> = ({ chapter, tomId }) => {
  const { title, images, chapterId } = chapter;
  const { saveChapterImages, saveChapterName, removeChapter } = useActions();
  const [active, setActive] = useState(false);
  const [chapterTitle, setChapterTitle] = useState(title);
  const [disabled, setDisabled] = useState(true);
  const editRef = useRef<HTMLInputElement>(null);
  const handleBlur = () => {
    setDisabled(true);
    saveChapterName({ tomId, chapterName: chapterTitle, chapterId });
  };
  const handleRemove = () => {
    removeChapter({ tomId, chapter });
  };
  useEffect(() => {
    !disabled && editRef.current.focus();
  }, [disabled]);

  return (
    <div className={styles['chapter']}>
      <div className={styles['chapter-info']}>
        <button
          className={cn(styles['chapter-info__show-btn'], {
            [styles['chapter-info__show-btn--active']]: active,
          })}
          onClick={() => setActive((prev) => !prev)}
        >
          <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_758_1358)">
              <path
                d="M4 6C3.57093 6.00062 3.15658 5.77907 2.83532 5.37725C2.64365 5.13626 2.46195 4.9019 2.34296 4.73379L0.658953 2.39516C0.555317 2.2393 0.498371 2.03285 0.500036 1.81902C0.5017 1.60519 0.561846 1.40056 0.667883 1.24797C0.77392 1.09537 0.917627 1.00664 1.06892 1.00036C1.22021 0.994073 1.36736 1.07072 1.47956 1.21424L3.16767 3.55702C3.27786 3.71188 3.44199 3.92222 3.61256 4.13671C3.71964 4.27015 3.85751 4.34379 4.00029 4.34379C4.14308 4.34379 4.28095 4.27015 4.38803 4.13671C4.55801 3.92305 4.72214 3.71271 4.82881 3.56282L6.52044 1.21424C6.63264 1.07072 6.77979 0.994073 6.93108 1.00036C7.08237 1.00664 7.22608 1.09537 7.33212 1.24797C7.43815 1.40056 7.4983 1.60519 7.49996 1.81902C7.50163 2.03285 7.44468 2.2393 7.34105 2.39516L5.65411 4.73793C5.53688 4.90356 5.35693 5.13543 5.16585 5.37476C4.84463 5.77806 4.42973 6.00057 4 6Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_758_1358">
                <rect width="7" height="7" fill="white" transform="matrix(1 0 0 -1 0.5 7)" />
              </clipPath>
            </defs>
          </svg>
        </button>

        <input
          className={styles['chapter-info__title']}
          ref={editRef}
          disabled={disabled}
          value={chapterTitle}
          onBlur={() => handleBlur()}
          onChange={(e) => setChapterTitle(e.target.value)}
        />
        <button onClick={() => setDisabled(false)} className={styles['chapter-info__edit-btn']}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.125 10L2.5 12.5L5 11.875L12.1875 4.6875C12.7053 4.16973 12.7053 3.33027 12.1875 2.8125C11.6697 2.29473 10.8303 2.29473 10.3125 2.8125L3.125 10Z"
              stroke="#7A5AF8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M9.375 3.75L11.25 5.625" stroke="#7A5AF8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.125 12.5H13.125" stroke="#7A5AF8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button onClick={() => handleRemove()} className={styles['chapter-info__remove-btn']}>
          <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1609_10883)">
              <path d="M9 7V12" stroke="#E54545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6 7V12" stroke="#E54545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M3 4V13C3 14.1046 3.89543 15 5 15H10C11.1046 15 12 14.1046 12 13V4"
                stroke="#E54545"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path d="M1 4H14" stroke="#E54545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M3 4L4.8 1H10.2L12 4"
                stroke="#E54545"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1609_10883">
                <rect width="15" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>

      {active && (
        <div className={styles['imgs']}>
          <label className={styles['cover']} htmlFor="cover">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1324_9631)">
                <path d="M1 13H25" stroke="#7A5AF8" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M13 25L13 0.999999" stroke="#7A5AF8" strokeWidth="1.8" strokeLinecap="round" />
              </g>
              <defs>
                <clipPath id="clip0_1324_9631">
                  <rect width="26" height="26" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </label>
          <input
            type="file"
            id="cover"
            className={cn(styles['cover__input'], 'myvisuallyhidden')}
            onChange={(e) => {
              if (e.target.files.length <= 50 && e.target.files.length >= 1) {
                readFiles(e.target.files).then((data) =>
                  saveChapterImages({ images: data, tomId: tomId, chapterId: chapterId }),
                );
              }
            }}
            accept="image/png, image/jpeg"
            multiple
          />
          <span className={styles['cover-img']}>
            <Image
              width={83}
              height={100}
              className={styles['cover-img__item']}
              src={images[0] || '/bg-default.svg'}
              alt="bg of comics"
            />
          </span>
          {images.length >= 2
            ? images
                .slice(1)
                .map((el) => (
                  <Image className={styles['cover-img__item']} width={83} height={100} src={el} alt="bg of comics" />
                ))
            : defaultImages.map((el) => (
                <Image className={styles['cover-img__item']} width={83} height={100} src={el} alt="bg of comics" />
              ))}
        </div>
      )}
    </div>
  );
};
export default Chapter;
