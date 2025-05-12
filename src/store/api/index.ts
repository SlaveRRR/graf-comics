import { User } from '@prisma/client';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ARTICLETAG, COMICSTAG, POPULARTAG, USERTAG } from './tags';
const users = 'users';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: [USERTAG, ARTICLETAG, COMICSTAG, POPULARTAG],
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_AXIOS_URL}/api/` }),
  endpoints: (builder) => ({
    getUserById: builder.query<User, string>({
      query: (id) => `${users}/${id}`,
      providesTags: [USERTAG],
    }),
  }),
});

export const { useGetUserByIdQuery } = api;
