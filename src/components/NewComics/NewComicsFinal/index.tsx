import React, { FC } from 'react';
import { AddComics } from '@/components/shared';
import { Logo } from '@/components/UI';
import styles from './index.module.scss';

const NewComicsFinal: FC = () => {
  return (
    <AddComics final={true}>
      <p className={styles['final-text']}>Ваш комикс был успешно загружен и отправлен на проверку!</p>
      <Logo mixClass={[styles['final-logo']]} />
    </AddComics>
  );
};

export default NewComicsFinal;
