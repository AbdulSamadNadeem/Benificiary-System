import { configureStore } from "@reduxjs/toolkit";
import { RequestSlice } from "./Slices/RequestSlice";


export const store = configureStore({
    reducer:RequestSlice.reducer
})
