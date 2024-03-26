interface IChapter {
  title: string;
  images: string[];
}

interface ITom {
  title: string;
  chapters: IChapter[];
}

export interface IComics {
  title: string;
  description: string;
  cover: string[];
  banner: string;
  genres: string[];
  focus: string[];
  tags: string[];
  rating: string[];
  toms: ITom[];
}
