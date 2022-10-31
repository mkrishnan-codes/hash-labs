import { createSlice } from "@reduxjs/toolkit";
import { getUid } from "../../common/util";

const initialState = { items: [], printView: false };

export const itinSlice = createSlice({
  name: "itins",
  initialState,
  reducers: {
    add: (state, { payload }) => {
      const id = getUid();
      state.items.push({ id, ...payload });
    },
    update: (state, { payload }) => {
      const { id } = payload;
      const index = state.items.findIndex((itm) => itm.id === id);
      state.items[index] = { ...state.items[index], ...payload };
    },
    remove: (state, { payload }) => {
      const { id } = payload;
      state.items = state.items.filter((itm) => itm.id !== id);
    },
    setPrintView: (state, { payload }) => {
      state.printView = payload;
    },
  },
});
export const { add, update, remove, setPrintView } = itinSlice.actions;
export const selectItineraries = (state) => state.itins.items;
export const selectPrintView = (state) => state.itins.printView;
export default itinSlice.reducer;
