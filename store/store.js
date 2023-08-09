import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import contactReducer from './features/contact/contactSlice';
import quoteReducer from './features/quote/quoteSlice';
import blogReducer from './features/blog/blogSlice';
import blogCommentReducer from './features/blogComment/blogCommentSlice';
import { authApi } from './services/auth/authService';

const store = configureStore({
  reducer: {
    auth: authReducer,
    contact: contactReducer,
    quote: quoteReducer,
    blog: blogReducer,
    blogComment: blogCommentReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
