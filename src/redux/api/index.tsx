import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({ baseUrl:'https://68359743cd78db2058c25078.mockapi.io' }),
  endpoints: () => ({}),
  tagTypes:['STUDENT']
})

export const {} = mainApi
