import React, { FC } from 'react';
import ChapterCard from '../ChapterCard';
import { IChapter } from '@/components/Chapter/types';

type Props = {
  chapters: Pick<IChapter, 'title' | 'timeCode' | 'likes' | 'isRidden'>[];
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
