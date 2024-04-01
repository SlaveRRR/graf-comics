import { IChapter } from '../Chapter/types';
export interface ITom {
  tomId: string;
  title: string;
  chapters: IChapter[];
}
