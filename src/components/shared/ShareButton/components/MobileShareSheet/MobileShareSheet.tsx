import { FC } from 'react';
import { ShareUI } from '../ShareUI';
import styles from './index.module.scss';
import { MobileShareSheetProps } from './types';

export const MobileShareSheet: FC<MobileShareSheetProps> = ({ url, onClose }) => {
  return (
    <div className={styles['mobile-sheet']}>
      <div className={styles['sheet-overlay']} onClick={onClose} />
      <div className={styles['sheet-content']}>
        <ShareUI url={url} />
      </div>
    </div>
  );
};
