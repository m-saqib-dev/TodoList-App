import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";
const reducer = {
    todos:todoReducer
}


    const store = configureStore({
        reducer,
    })

    export default store;