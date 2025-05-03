import cn from 'classnames';
import { FC } from 'react';
import { IChapter } from '../Chapter/types';
import { ChaptersButton } from '../UI';
import { BackLink } from '../shared';
import styles from './index.module.scss';

type Props = {
  title: string;
};
const chapters: IChapter[] = [
  {
    chapterId: '5',
    timeCode: '00.00.00',
    images: [],
    isRead: false,
    title: 'глава 0',
    likes: 5,
  },
  {
    chapterId: '8',
    timeCode: '00.00.00',
    images: [],
    isRead: false,
    title: 'глава 1',
    likes: 5,
  },
  {
    chapterId: '4',
    timeCode: '00.00.00',
    images: [],
    isRead: false,
    title: 'глава 2',
    likes: 5,
  },
];

const ComicsHeader: FC<Props> = ({ title }) => {
  return (
    <div className={cn(styles['header'], 'container')}>
      <BackLink text="Назад" />
      <p className={styles['header__title']}>{title}</p>
      <div className={styles['header__button']}>
        <ChaptersButton chapters={chapters} />
      </div>
      {/* <ChaptersButton chapters={chapters} /> */}
    </div>
  );
};
export default ComicsHeader;
