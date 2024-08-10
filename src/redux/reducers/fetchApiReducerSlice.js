import { createSlice } from "@reduxjs/toolkit";

const fetchApiReducerSlice = createSlice({
  name: "fetchApiReducer",
  initialState: {
    apiData: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchDataRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.apiData = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataRequest, fetchDataSuccess, fetchDataFailure } =
fetchApiReducerSlice.actions;

export default fetchApiReducerSlice.reducer;
