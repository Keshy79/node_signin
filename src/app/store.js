import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../Redux/CounterSlice";

export const store = new configureStore({
    reducer: {
        counter: CounterReducer
    },
})

export default store;