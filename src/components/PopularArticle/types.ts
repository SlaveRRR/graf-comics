export interface PopularArticleType {
  id: number;
  title: string;
  description: string;
}

export interface PopularArticleProps {
  plans?: PopularArticleType[];
}
