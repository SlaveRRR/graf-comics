import { Category } from '@prisma/client';

export interface IArticle {
  title: string;
  description: string;
  cover?: string;
  authorName: string;
  article: string;
  htmlFromFile: string;
  fileName: string;
  category: Category;
}
