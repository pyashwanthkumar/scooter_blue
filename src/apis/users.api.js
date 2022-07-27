import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "/"
    }),
    endpoints: (build) => ({
        createUser: build.mutation({
            query: (createUserRequest) => ({
                url: "users",
                body: createUserRequest               
            })
        })
    })
})

export const { useCreateUserMutation } = usersApi
export const { endpoints, reducerPath, reducer, middleware } = usersApi
