import { FC } from 'react';
import styles from './index.module.scss';
import { FilterBarComponentProps } from './types';

export const FilterBarComponent: FC<FilterBarComponentProps> = ({ currentSort, onSelect, onClose }) => {
  return (
    <div className={styles['modal-overlay']}>
      <button onClick={() => onSelect('new')} className={currentSort === 'new' ? styles['curr'] : ''}>
        Новые сначала
      </button>
      <div className={styles['line']}></div>
      <button onClick={() => onSelect('oldest')} className={currentSort === 'oldest' ? styles['curr'] : ''}>
        Старые сначала
      </button>
      <div className={styles['line']}></div>
      <button onClick={() => onSelect('popular')} className={currentSort === 'popular' ? styles['curr'] : ''}>
        Популярные
      </button>
    </div>
  );
};
