import { configureStore } from "@reduxjs/toolkit";
import slice from "./CreateTestRed";


const store = configureStore({
    reducer : {
        create_test : slice.reducer
    }
})

export default store