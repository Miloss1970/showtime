import { createSlice } from "@reduxjs/toolkit";

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    allCountries: [],
  },
  reducers: {
    getCountries: (state, action) => {
      state.allCountries = action.payload;
    },
  },
});
export const { getCountries } = countriesSlice.actions;
export default countriesSlice.reducer;
