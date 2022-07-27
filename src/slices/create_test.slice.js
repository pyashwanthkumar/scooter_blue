import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name : null,
    year : 0,
    semester : null,
    time : 0,
    num_of_questions : 0,
    points : 0,
    id : ""
}

const createTestSlice = createSlice({
    name : 'create_test',
    initialState,
    reducers : {
        handleTestnameChange : (state, action) => {
            return{
                ...state,
                name : action.payload
            }
        },
        handleYearChange : (state, action) => {
            return{
                ...state,
                year : action.payload
            }
        },
        handleSemesterChange : (state, action) => {
            return{
                ...state,
                semester : action.payload
            }
        },
        handleTimeChange : (state, action) => {
            return{
                ...state,
                time : action.payload
            }
        },
        handleNumOfQuestionsChange : (state, action) => {
            return{
                ...state,
                num_of_questions : action.payload
            }
        },
        handlePointsChange : (state, action) => {
            return{
                ...state,
                points : action.payload
            }
        },
        handleIdChange : (state, action) => {
            return{
                ...state,
                id : action.payload
            }
        },
    }
})

export const {handleTestnameChange, handleYearChange,handleSemesterChange, handleTimeChange, handleNumOfQuestionsChange, handlePointsChange, handleIdChange } = createTestSlice.actions

export default createTestSlice.reducer