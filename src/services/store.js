import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

// configuring a store which is a global state that saves the entire information of our application
// but because we don't need the entire state, only reduce it to a specific slice of a pie (articleApi)
export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware),
});
