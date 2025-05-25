import { Article, Comics } from '@prisma/client';
import { api } from './index';
import { ARTICLETAG, POPULARTAG } from './tags';

const article = 'article';
const likeArticle = 'like-article';
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

    likeArticle: builder.mutation<Article, { userId: string; articleId: string }>({
      query: (body) => ({
        url: `${likeArticle}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: (result, error, { articleId }) => [{ type: 'Article', id: articleId }],
    }),
  }),
});
export const { useGetArticlesQuery, useGetArticleByIdQuery, useGetPopularQuery, useLikeArticleMutation } = extendedApi;
