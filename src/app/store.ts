//configureStore

import { tmdbApi } from '../features/tmdbApi/tmdbApi';
import { configureStore } from '@reduxjs/toolkit';

//pass the reducer in reducers key
export const store = configureStore({
	reducer: {
		[tmdbApi.reducerPath]: tmdbApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(tmdbApi.middleware),
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
