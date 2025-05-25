import { Article, Comics } from '@prisma/client';
import { api } from './index';
import { ARTICLETAG, COMICSTAG, POPULARTAG, SIMILARARTICLETAG } from './tags';

const article = 'article';
const likeArticle = 'like-article';
const popular = 'popular';
const comics = 'comics';

type Params = Record<string, any>;

const extendedApi = api.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getArticles: builder.query<Article[], { take?: number } | void>({
      query: (params = {}) => ({
        url: `${article}/`,
        params: params as Params,
      }),
      providesTags: (result, error, arg) =>
        result ? [...result.map(({ id }) => ({ type: 'Article' as const, id })), ARTICLETAG] : [ARTICLETAG],
    }),
    getSimilarArticles: builder.query<Article[], string>({
      query: (id) => `${article}/similar/${id}`,
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: 'SimilarArticles' as const, id })), SIMILARARTICLETAG]
          : [SIMILARARTICLETAG],
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

    getSimilarComicses: builder.query<Comics[], string>({
      query: (id) => `${comics}/similar/${id}`,
      providesTags: (result, error, arg) =>
        result ? [...result.map(({ id }) => ({ type: 'Comics' as const, id })), COMICSTAG] : [COMICSTAG],
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
export const {
  useGetArticlesQuery,
  useGetArticleByIdQuery,
  useGetPopularQuery,
  useLikeArticleMutation,
  useGetSimilarArticlesQuery,
  useGetSimilarComicsesQuery,
} = extendedApi;
