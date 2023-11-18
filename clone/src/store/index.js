import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./slice/termSlice";

export const store = configureStore({
    reducer: {
        termStore: useReducer,
    },
});