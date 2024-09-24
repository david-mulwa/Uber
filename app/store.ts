import { configureStore } from '@reduxjs/toolkit'
// ...

import navSlicereducer from '@/features/navslice'
export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    // [counterApi.reducerPath]: counterApi.reducer
    nav: navSlicereducer
  }
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store