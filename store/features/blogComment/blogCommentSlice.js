import { createSlice } from '@reduxjs/toolkit';
import { blogCommentMessage } from './blogCommentActions';

const initialState = {
  loading: false,
  blogCommentInfo: null,
  error: null,
  success: false,
};

const blogCommentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(blogCommentMessage.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(blogCommentMessage.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.blogCommentInfo = payload;
      state.success = true;
    });
    builder.addCase(blogCommentMessage.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const actions = blogCommentSlice.actions;

export default blogCommentSlice.reducer;
