import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ILoginRequest, ILoginResponse } from '../../type';
import { externalApiEndpoints as endpoints } from '../../../constants/externalApiEndpoints';

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: endpoints.base }),
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResponse, ILoginRequest>({
      query: (credentials) => ({
        url: endpoints?.auth?.login,
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({ url: 'auths/logout', method: 'POST' }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApi;
