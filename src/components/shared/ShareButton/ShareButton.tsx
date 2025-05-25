import { useModal } from '@/context/modalProvider';
import { useWindowSize } from '@/hooks/useWindowSize';
import { FC, useState } from 'react';
import { MobileShareSheet, ShareUI } from './components';
import styles from './index.module.scss';
import { ShareButtonProps } from './types';

export const ShareButton: FC<ShareButtonProps> = ({ url }) => {
  const { size } = useWindowSize();

  const [openMobile, setOpenMobile] = useState(false);

  const { openModal } = useModal();

  const onClickButton = () => {
    if (size === 'desktop') {
      return openModal(<ShareUI url={url} />);
    }
    setOpenMobile(true);
  };

  const onCloseMobile = () => setOpenMobile(false);

  return (
    <>
      {openMobile && <MobileShareSheet url={url} onClose={onCloseMobile} />}
      <button onClick={onClickButton} className={styles['button']}>
        Поделиться
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.9963 3.50659C12.2854 4.00112 12.822 4.33333 13.4362 4.33333C14.3567 4.33333 15.1029 3.58714 15.1029 2.66667C15.1029 1.74619 14.3567 1 13.4362 1C12.5157 1 11.7695 1.74619 11.7695 2.66667C11.7695 2.97296 11.8522 3.25996 11.9963 3.50659ZM11.9963 3.50659L4.87606 7.66008M4.87606 7.66008C4.58696 7.16555 4.05038 6.83333 3.4362 6.83333C2.51572 6.83333 1.76953 7.57953 1.76953 8.5C1.76953 9.42047 2.51572 10.1667 3.4362 10.1667C4.05038 10.1667 4.58696 9.83445 4.87606 9.33992M4.87606 7.66008C5.02024 7.90671 5.10286 8.1937 5.10286 8.5C5.10286 8.8063 5.02024 9.09329 4.87606 9.33992M4.87606 9.33992L11.9963 13.4934M11.9963 13.4934C12.2854 12.9989 12.822 12.6667 13.4362 12.6667C14.3567 12.6667 15.1029 13.4129 15.1029 14.3333C15.1029 15.2538 14.3567 16 13.4362 16C12.5157 16 11.7695 15.2538 11.7695 14.3333C11.7695 14.027 11.8522 13.74 11.9963 13.4934Z"
            stroke="#7A5AF8"
            stroke-width="1.1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </>
  );
};
