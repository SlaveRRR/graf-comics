import cn from 'classnames';
import { FC } from 'react';
import { Progress } from '../UI';
import styles from './index.module.scss';

interface ComicsFooterProps {
  currentPage: number;
  maxPage: number;
}

const ComicsFooter: FC<ComicsFooterProps> = ({ currentPage, maxPage }) => {
  return (
    <div className={cn('container', styles['comics-footer'])}>
      <div className="progress-container">
        <p className={styles['progress-container__text']}>
          Страниц {currentPage} из {maxPage}
        </p>
        <Progress value={currentPage} maxValue={maxPage} />
      </div>
      <div className={styles['buttons']}>
        <button className={styles['buttons__item']}>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 4H10C8.89543 4 8 4.89543 8 6V31L17 26.5L26 31V6C26 4.89543 25.1046 4 24 4Z"
              stroke="#EE46BC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className={styles['buttons__item']}>
          <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.9559 1C18.7365 1.01993 17.5437 1.37753 16.498 2.03671C15.4522 2.69589 14.5906 3.63329 14 4.75426C13.4094 3.63329 12.5478 2.69589 11.502 2.03671C10.4563 1.37753 9.26346 1.01993 8.04407 1C6.10021 1.08873 4.26877 1.98209 2.94989 3.4849C1.631 4.98772 0.931876 6.97784 1.00524 9.02047C1.00524 14.1934 6.18798 19.843 10.5347 23.6735C11.5052 24.5303 12.7323 25 14 25C15.2677 25 16.4948 24.5303 17.4653 23.6735C21.812 19.843 26.9948 14.1934 26.9948 9.02047C27.0681 6.97784 26.369 4.98772 25.0501 3.4849C23.7312 1.98209 21.8998 1.08873 19.9559 1Z"
              stroke="#7A5AF8"
              strokeWidth="2"
            />
          </svg>
        </button>
        <button className={styles['buttons__item']}>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </button>
      </div>
    </div>
  );
};
export default ComicsFooter;
