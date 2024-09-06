import { configureStore } from "@reduxjs/toolkit";
import favListReducer from "./favListSlice"



export const store = configureStore({
    reducer: {
        favList: favListReducer,
    },
   
});