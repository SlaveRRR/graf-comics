import { ctx } from '@/context/contextProvider';
import Image from 'next/image';
import { FC, useContext } from 'react';
import styles from './index.module.scss';

type Props = {
  image: string;
  index: number;
};

const ComicsPage: FC<Props> = ({ image, index }) => {
  const { setVisibleMenu } = useContext(ctx);
  return (
    <div data-index={index} onClick={() => setVisibleMenu((prev) => !prev)} className={styles['comics-page']}>
      <div className={styles['comics-page__scrollable']}>
        <Image
          src={image}
          alt="comics page"
          className={styles['comics-page__item']}
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default ComicsPage;
