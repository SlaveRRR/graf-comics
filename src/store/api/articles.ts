import { Article, Comics } from '@prisma/client';
import { api } from './index';
import { ARTICLETAG, POPULARTAG } from './tags';

const article = 'article';

const popular = 'popular';

const extendedApi = api.injectEndpoints({
  overrideExisting: true,
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

    getPopular: builder.query<Comics[], void>({
      query: () => `${popular}/`,
      providesTags: (result, error, arg) =>
        result ? [...result.map(({ id }) => ({ type: 'Popular' as const, id })), POPULARTAG] : [POPULARTAG],
    }),
  }),
});
export const { useGetArticlesQuery, useGetArticleByIdQuery, useGetPopularQuery } = extendedApi;
