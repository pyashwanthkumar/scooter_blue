import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/auth'
    }),
    endpoints: (build) => ({
        login: build.mutation({
            query: (loginRequest) => ({
                url: "/login",
                method: "POST",
                body: loginRequest
            })
        })
    })
})

export const { useLoginMutation } = authApi
export const { endpoints, reducerPath, reducer, middleware } = authApi
