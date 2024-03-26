type ColorClass =
  | 'tags'
  | 'rating'
  | 'status'
  | 'viewcounts'
  | 'naprav'
  | 'genres'
  | 'size'
  | 'author'
  | 'theme'
  | 'violet';

export interface IFilter {
  text: string;
  filterType: 'sort' | 'search' | 'default';
  isActive: boolean;
  filters: string[];
  colorClass: ColorClass;
}

export type FilterItem = {
  text: string;
  colorClass: ColorClass;
};
