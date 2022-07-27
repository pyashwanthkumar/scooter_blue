import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    question: "",
    options_with_feedback: [{
        option: "",
        feedback: ""
    }],
    answer: 0,
    points: 0
}

const addQuestionSlice = createSlice({
    name: 'add_question',
    initialState,
    reducers: {
        handleQuestionChange: (state, action) => ({
            ...state,
            question: action.payload
        }),
        handOptionsFeedbackChange: (state, action) => ({
            ...state,
            options_with_feedback: action.payload
        }),
        handleAnswerChange: (state, action) => ({
            ...state,
            answer: action.payload
        }),
        handlePointsChange: (state, action) => ({
            ...state,
            points: action.payload
        })
    }
})

export const {handleQuestionChange, handOptionsFeedbackChange, handleAnswerChange, handlePointsChange} = addQuestionSlice.actions

export default addQuestionSlice.reducer