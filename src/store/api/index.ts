import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from './types';

const users = 'users';

export const api = createApi({
  reducerPath: 'api',
  refetchOnFocus: false,
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_AXIOS_URL}/api/` }),
  endpoints: (builder) => ({
    getUserById: builder.query<IUser, string>({
      query: (id) => `${users}/${id}`,
      providesTags: ['User'],
    }),
  }),
});

export const { useGetUserByIdQuery } = api;
