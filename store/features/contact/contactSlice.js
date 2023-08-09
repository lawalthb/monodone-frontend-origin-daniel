import { createSlice } from '@reduxjs/toolkit';
import { contactMessage } from './contactActions';

const initialState = {
  loading: false,
  contactInfo: null,
  error: null,
  success: false,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(contactMessage.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(contactMessage.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.contactInfo = payload;
      state.success = true;
    });
    builder.addCase(contactMessage.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const actions = contactSlice.actions;

export default contactSlice.reducer;
