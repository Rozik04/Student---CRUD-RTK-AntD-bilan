import { mainApi } from ".";


const extendedApi = mainApi.injectEndpoints({
    endpoints:(build)=>({
        getUsers: build.query({
            query:()=>({
                method:'GET',
                url:'/student'
            }),
            providesTags:["STUDENT"]
        })
    })
})

export const {useGetUsersQuery} = extendedApi