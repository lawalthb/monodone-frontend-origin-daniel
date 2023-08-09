import { createSlice } from '@reduxjs/toolkit';
import { blogMessage } from './blogActions';

const initialState = {
  loading: false,
  blogInfo: null,
  error: null,
  success: false,
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(blogMessage.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(blogMessage.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.blogInfo = payload;
      state.success = true;
    });
    builder.addCase(blogMessage.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const actions = blogSlice.actions;

export default blogSlice.reducer;
