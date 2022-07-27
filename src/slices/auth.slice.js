import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {

    },
    reducers: {
        handleAuthState: (state, {payload: {user}}) => {
            state.user = user
        }
    }
})

export const { handleAuthState } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user