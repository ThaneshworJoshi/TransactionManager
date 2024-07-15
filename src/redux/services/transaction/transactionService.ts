import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITransactionResponse } from '../../type';
import { externalApiEndpoints as endpoints } from '../../../constants/externalApiEndpoints';
import { RootState } from '../../store';

export const transactionApi = createApi({
  reducerPath: 'transactionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: endpoints.baseUrl, prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.accessToken;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTransactions: builder.query<ITransactionResponse, { page: number; perPage: number }>({
      query: ({ page, perPage }) => ({
        url: `${endpoints.admin.transactions}?page=${page}&perPage=${perPage}`,
      }),
    }),
  }),
});

export const { useGetTransactionsQuery } = transactionApi;
