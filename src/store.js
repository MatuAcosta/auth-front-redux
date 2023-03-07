import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import registerReducer from './features/register/registerSlice'
import loginReducer from './features/login/loginSlice';
import { apiSlice } from "./features/api/apiSlice";
export const store = configureStore({
    reducer:{
        register: registerReducer,
        login: loginReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(apiSlice.middleware)
})


