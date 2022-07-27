import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const addQuestionApi = createApi({
    reducerPath: "addQuestionApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "/create-test"
    }),
    endpoints: (build) => ({
        addQuestion: build.mutation({
            query: (payload) => ({
            url: `/${payload.id}`,
                method: "PUT",
                body: payload.questionObj
            })
        })
    })
})

export const { useAddQuestionMutation } = addQuestionApi
export const { endpoints, reducerPath, reducer, middleware } = addQuestionApi