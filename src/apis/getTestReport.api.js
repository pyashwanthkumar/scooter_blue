import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getTestReportApi = createApi({
    reducerPath: "getTestReportApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "/test-report"
    }),
    endpoints: (build) => ({
        getTestReport: build.query({
            query: (getTestReportParam) => ({
                url: `/${getTestReportParam.student_id}/${getTestReportParam.test_name}`,
                method: 'GET'
            })
        })
    })
})

export const { useGetTestReportQuery } = getTestReportApi 