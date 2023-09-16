import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [], // Initial data is an empty array
  query: '', // Initial query is an empty string
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    addData: (state, action) => {
      state.data.push(action.payload);
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setData, addData, setQuery } = dataSlice.actions;
export const selectData = (state) => state.data.data;
export const selectQuery = (state) => state.data.query;

export default dataSlice.reducer;
