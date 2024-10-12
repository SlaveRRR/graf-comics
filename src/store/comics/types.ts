import { ITom } from '@/components/Tom/types';
import { FilterItem } from '@/types/filter.type';

export enum Status {
  WORK = 'в процессе',
  FREEZED = 'заморожен',
  READY = 'завершён',
}

export interface IComics {
  title: string;
  description: string;
  covers: string[];
  banner: string;
  genres: FilterItem[];
  focus: FilterItem[];
  tags: FilterItem[];
  rating: FilterItem[];
  toms: ITom[];
  author: string;
  status: Status;
}

export interface IFilter {
  type: keyof Pick<IComics, 'focus' | 'genres' | 'rating' | 'tags'>;
  element: FilterItem;
}
