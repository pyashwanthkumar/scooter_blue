import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getQuestionListApi  = createApi({
    reducerPath: "getQuestionListApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"/interaction"
    }),
    endpoints: (build) => ({
        getQuestionList: build.query({
            query: (params)=> ({
                url: `/student-questions/${params.test_name}`,
                method: "GET"
            })
        })
    })
})

export const { useGetQuestionListQuery } = getQuestionListApi