import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    name: "",
    ac: false,
    tv: false,
    automatic: false,
    kitchen: false,
    bath: false,
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addFilter: (state, { payload }) => {
      state.filters = { ...state.filters, ...payload };
      console.log("Updated filters:", state.filters);
    },
  },
});

export const selectNameFilter = state => state.filters.filters.name;
export const selectFilter = state => state.filters.filters;
export const filtersReducer = filtersSlice.reducer;
export const { addFilter } = filtersSlice.actions;
