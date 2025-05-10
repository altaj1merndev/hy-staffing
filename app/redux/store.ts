// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./baseApi";
import headerSlice from "./features/header.slice";
import authSlice from "./features/auth.slice";

export const store = configureStore({
  reducer: {
    // EXAMPLE
    [baseApi.reducerPath]: baseApi.reducer,
    header: headerSlice,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

// Types for hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
