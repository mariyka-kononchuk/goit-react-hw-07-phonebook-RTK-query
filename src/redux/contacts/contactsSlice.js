
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://616af39216e7120017fa1160.mockapi.io/api/v1' }),
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
    }),
  }),
})

export const { useFetchContactsQuery } = contactsApi

