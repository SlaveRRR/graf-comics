import { IChapter } from '@/components/Chapter/types';
import { FC } from 'react';
import ChapterCard from '../ChapterCard';

type Props = {
  chapters: Pick<IChapter, 'title' | 'timeCode' | 'likes' | 'isRead'>[];
};

const Chapters: FC<Props> = ({ chapters }) => {
  return (
    <>
      {chapters.map((obj, i) => (
        <ChapterCard key={i} {...obj} />
      ))}
    </>
  );
};

export default Chapters;
