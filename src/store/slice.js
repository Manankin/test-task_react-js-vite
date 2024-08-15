import { createSlice } from '@reduxjs/toolkit';
import { fetchRockets } from './action';

const slice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.rockets = action.payload
      state.loading = false;
    })
    
    builder.addCase(fetchRockets.pending, (state, action) => {
      state.loading = true;
    })
  }
});

export const {addRockets} = slice.actions;
export default slice.reducer;