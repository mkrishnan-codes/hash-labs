import { configureStore } from '@reduxjs/toolkit';
import brandSliceReducer from '../features/brandcompare/brandSlice';
export const store = configureStore({
  reducer: {
    brands: brandSliceReducer,
  },
});
