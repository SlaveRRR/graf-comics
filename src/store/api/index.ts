import { Comics, User } from '@prisma/client';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ARTICLETAG, COMICSTAG, POPULARTAG, SIMILARARTICLETAG, USERTAG } from './tags';

const users = 'users';

const likeComics = 'like-comics';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: [USERTAG, ARTICLETAG, COMICSTAG, POPULARTAG, SIMILARARTICLETAG],
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_AXIOS_URL}/api/` }),
  endpoints: (builder) => ({
    getUserById: builder.query<User, string>({
      query: (id) => `${users}/${id}`,
      providesTags: [USERTAG],
    }),
    likeComics: builder.mutation<Comics, { userId: string; comicsId: string }>({
      query: (body) => ({
        url: `${likeComics}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: (result, error, { comicsId }) => [{ type: 'Popular', id: comicsId }],
    }),
  }),
});

export const { useGetUserByIdQuery, useLikeComicsMutation } = api;
