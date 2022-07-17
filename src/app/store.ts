//configureStore

import { tmdbApi } from '../features/tmdbApi/tmdbApi';
import { configureStore } from '@reduxjs/toolkit';
import genreOrCategoryReducer from '../features/genreOrCategory/genreOrCategory';

//pass the reducer in reducers key
export const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    genreOrCategory: genreOrCategoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
