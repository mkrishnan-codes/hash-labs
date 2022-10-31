import { configureStore } from "@reduxjs/toolkit";
import brandSliceReducer from "../features/brandcompare/brandSlice";
import itinReducer from "../features/itinerarymaker/itinSlice";
export const store = configureStore({
  reducer: {
    brands: brandSliceReducer,
    itins: itinReducer,
  },
});
