import { createSlice } from '@reduxjs/toolkit';
import { quoteData } from './quoteActions';

const initialState = {
  loading: false,
  quoteInfo: null,
  error: null,
  success: false,
};

const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(quoteData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(quoteData.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.quoteInfo = payload;
      state.success = true;
    });
    builder.addCase(quoteData.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const actions = quoteSlice.actions;

export default quoteSlice.reducer;
