import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import { apiSlice } from './apiSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;