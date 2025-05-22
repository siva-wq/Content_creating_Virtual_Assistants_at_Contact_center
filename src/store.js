import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import chatReducer from './features/chat/chatSlice';
import analyticsReducer from './features/analytics/analyticsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
    analytics: analyticsReducer,
  },
});
