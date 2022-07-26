import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from './CounterSlice'

export const Store = configureStore({
    reducer:{
        Counter:CounterReducer

    }
})