// mockapi - https://630224a9e71700618a4443c0.mockapi.io/contacts/:endpoint

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://630224a9e71700618a4443c0.mockapi.io',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => 'contacts/',
      providesTags: ['contacts'],
    }),
    addContact: builder.mutation({
      query: data => ({
        url: 'contacts/',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
