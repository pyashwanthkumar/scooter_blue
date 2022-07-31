import { configureStore } from "@reduxjs/toolkit";
import create_test from "../slices/create_test.slice";
import add_question from "../slices/add_question.slice";
import { usersApi } from "../apis/users.api";
import { authApi } from "../apis/auth.api";
import auth from "../slices/auth.slice";
import { createTestSettingApi } from "../apis/createTestSetting.api";
import { addQuestionApi } from "../apis/addQuestion.api";
import { getTestApi } from "../apis/getTest.api";
import { giveTestApi } from "../apis/giveTest.api";
import { getTestReportApi } from "../apis/getTestReport.api";
import { askQuestionApi } from "../apis/askQuestion.api";
import { getQuestionListApi } from "../apis/getQuestionList.api";


export const store = configureStore({
    reducer : {
        [usersApi.reducerPath]: usersApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [createTestSettingApi.reducerPath]: createTestSettingApi.reducer,
        [addQuestionApi.reducerPath]: addQuestionApi.reducer,
        [getTestApi.reducerPath]: getTestApi.reducer,
        [giveTestApi.reducerPath]: giveTestApi.reducer,
        [getTestReportApi.reducerPath]: getTestReportApi.reducer,
        [askQuestionApi.reducerPath]: askQuestionApi.reducer,
        [getQuestionListApi.reducerPath]: getQuestionListApi.reducer,
        create_test,
        add_question,
        auth,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
            .concat(usersApi.middleware)
            .concat(authApi.middleware)
            .concat(createTestSettingApi.middleware)
            .concat(addQuestionApi.middleware)
            .concat(getTestApi.middleware)
            .concat(giveTestApi.middleware)
            .concat(getTestReportApi.middleware)
            .concat(askQuestionApi.middleware)
            .concat(getQuestionListApi.middleware)
})