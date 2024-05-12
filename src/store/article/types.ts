import { FilterItem } from '@/types/filter.type';

export interface IArticle {
  title: string;
  description: string;
  cover?: string;
  authorName: string;
  article: string;
  htmlFromFile: string;
  fileName: string;
  category: FilterItem[];
}

export interface IFilter {
  type: keyof Pick<IArticle, 'category'>;
  element: FilterItem;
}
