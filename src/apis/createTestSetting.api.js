import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const createTestSettingApi = createApi({
    reducerPath: "createTestSettingApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"/create-test"
    }),
    endpoints: (build) => ({
        createTestSetting: build.mutation({
            query: (testSettingRequest) => ({
                url: '/',
                method: "POST",
                body:testSettingRequest
            })
        })
    })  
})

export const { useCreateTestSettingMutation } = createTestSettingApi
export const { endpoints, reducerPath, reducer, middleware } = createTestSettingApi