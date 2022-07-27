import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const getTestApi = createApi({
    reducerPath: "getTestApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"/give-test"
    }),
    endpoints: (build) => ({
        getTest: build.query({
            query: (getTestRequest) => ({
                url: `/${getTestRequest.year}/${getTestRequest.semester}/${getTestRequest.test_name}`,
                method: "GET"
            })
        })
    })
})

export const { useGetTestQuery } = getTestApi
