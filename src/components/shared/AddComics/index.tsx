import React, { FC } from 'react';
import BackLink from '../BackLink';
import cn from 'classnames';
import styles from './index.module.scss';

type Props = {
  final: boolean;
  children: React.ReactNode;
};

const AddComics: FC<Props> = ({ children, final }) => {
  return (
    <div className={cn(styles['add-comics'], 'container')}>
      <BackLink mixClass={[styles['add-comics__link']]} />
      <div className={styles['add-comics__content']}>
        {final ? (
          <h2 className={styles['add-comics__final']}>Поздравляем!</h2>
        ) : (
          <h2 className={styles['add-comics__head']}>Добавить свой комикс</h2>
        )}
        {children}
      </div>
    </div>
  );
};
export default AddComics;
