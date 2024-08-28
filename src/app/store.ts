import { configureStore } from '@reduxjs/toolkit'
import FileTreeSlice from './features/FileTreeSlice'


export const store = configureStore({
  reducer: {
    fileTree:FileTreeSlice
  },
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: 
export type AppDispatch = typeof store.dispatch