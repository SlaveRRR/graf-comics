import React, { Dispatch, FC, SetStateAction, useContext } from 'react';
import Image from 'next/image';
import styles from './index.module.scss';
import { ctx } from '@/context/contextProvider';

type Props = {
  image: string;
};

const ComicsPage: FC<Props> = ({ image }) => {
    const {setVisibleMenu} = useContext(ctx)
  return (
    <div onClick={() => setVisibleMenu(prev => !prev)} className={styles['comics-page']}>
      <Image src={image} alt="comics page" className={styles['comics-page__item']} width={0} height={0} sizes="100vw" />
    </div>
  );
};

export default ComicsPage;
