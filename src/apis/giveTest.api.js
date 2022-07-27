import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const giveTestApi = createApi({
    reducerPath: "giveTestApi",
    baseQuery: fetchBaseQuery({
        baseUrl:  "/give-test"
    }),
    endpoints: (build) => ({
        giveTest: build.mutation({
            query: (giveTestRequest) => ({
                url: "/submit",
                method: "POST",
                body: giveTestRequest
            })
        })
    })
})

export const { useGiveTestMutation } = giveTestApi