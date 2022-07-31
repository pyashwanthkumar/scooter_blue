import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const askQuestionApi = createApi({
    reducerPath: "askQuestionApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "/interaction"
    }),
    endpoints: (build) => ({
        askQuestion: build.mutation({
            query: (askQuestionRequest) => {
                console.log(askQuestionRequest)
                return({
                    url: "/ask-question",
                    method: "POST",
                    body: askQuestionRequest
                })
            }
        })
    })
})

export const { useAskQuestionMutation } = askQuestionApi