import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  metrics: {
    totalConversations: 0,
    averageResponseTime: 0,
    customerSatisfaction: 0,
    sentimentAnalysis: {
      positive: 0,
      neutral: 0,
      negative: 0,
    },
  },
  isLoading: false,
  error: null,
};

export const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    setMetrics: (state, action) => {
      state.metrics = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setMetrics, setLoading, setError } = analyticsSlice.actions;

export default analyticsSlice.reducer;
