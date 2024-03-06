import React,{FC} from 'react'
import ChapterCard from '../ChapterCard';

type ChapterType = {
    likes:number;
    text:string;
    timeCode:string;
}

type Props = {
    chapters:ChapterType[]
}

const Chapters : FC<Props> = ({chapters}) => {
  return (
    <>
    {chapters.map((obj,i) => <ChapterCard key={i} {...obj} />)}
    </>
  )
}

export default Chapters