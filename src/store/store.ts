import { configureStore } from '@reduxjs/toolkit';
import clickStateSlice from './ClickStateSlice';

export const store = configureStore({
  reducer: {
    clickStateR: clickStateSlice,
  },
});

// ✅ Types for dispatch & state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
