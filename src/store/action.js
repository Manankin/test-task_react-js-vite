import { createAsyncThunk } from '@reduxjs/toolkit'
import getData from '../features/getData'

// First, create the thunk
export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async (_, thunkAPI) => {
    const response = await getData()
    const data = await response.json()
    // for more mock data 
    return [...data, ...data, ...data]
  },
)


// (builder) => {
//   builder
//     .addCase(fetchUserData.pending, (state) => {
//       state.status = "loading";
//     })
//     .addCase(fetchUserData.fulfilled, (state, action) => {
//       state.status = "succeeded";
//       state.data = action.payload;
//     })
//     .addCase(fetchUserData.rejected, (state, action) => {
//       state.status = "failed";
//       state.error = action.error.message;
//     });
// },
// });