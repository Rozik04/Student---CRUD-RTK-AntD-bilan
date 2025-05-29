import { mainApi } from "."

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => ({
        method: 'GET',
        url: '/student',
      }),
      providesTags: ['STUDENT'],
    }),
    createUsers: build.mutation({
      query: (body) => ({
        method: 'POST',
        url: '/student',
        body,
      }),
      invalidatesTags: ['STUDENT'],
    }),
    deleteUsers: build.mutation({
      query: (id) => ({
        method: 'DELETE',
        url: `/student/${id}`,
      }),
      invalidatesTags: ['STUDENT'],
    }),
    updateUsers: build.mutation({
      query: ({ id, ...body }) => ({
        method: 'PUT',
        url: `/student/${id}`,
        body,
      }),
      invalidatesTags: ['STUDENT'],
    }),
      getUser: build.query({
      query: (id) => ({
        method: 'GET',
        url: `/student/${id}`
      }),
      providesTags: ['STUDENT'],
    }),
  }),
})

export const {
  useGetUsersQuery,
  useCreateUsersMutation,
  useDeleteUsersMutation,
  useUpdateUsersMutation, 
  useGetUserQuery
} = extendedApi
