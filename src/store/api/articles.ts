import { api } from './index';
import { Article } from '@prisma/client';
import { ARTICLETAG } from './tags';
const article = 'article';

const extendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query<Article[], void>({
      query: () => `${article}/`,
      providesTags: (result, error, arg) =>
        result ? [...result.map(({ id }) => ({ type: 'Article' as const, id })), ARTICLETAG] : [ARTICLETAG],
    }),
    getArticleById: builder.query<Article, string>({
      query: (id) => `${article}/${id}`,
      providesTags: (result, error, arg) => [{ type: 'Article' as const, id: result.id }, ARTICLETAG],
    }),
  }),
});
export const { useGetArticlesQuery, useGetArticleByIdQuery } = extendedApi;
