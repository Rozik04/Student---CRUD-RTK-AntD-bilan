import { configureStore } from "@reduxjs/toolkit";
import { mainApi } from "./api";

export const store = configureStore({
    reducer:{
        [mainApi.reducerPath]: mainApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
})

export type  RootStore = ReturnType<typeof store.getState>
export type  ApiDispatch = typeof store.dispatch