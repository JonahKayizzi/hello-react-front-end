import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  greeting: null,
};

const URL = 'http://127.0.0.1:3000/api/v1/greetings';

export const fetchGreeting = createAsyncThunk(
  'greetings/fetchGreeting',
  async () => {
    const response = await axios.get(URL);
    return response.data;
  },
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGreeting.fulfilled]: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.greeting = action.payload;
    },
  },
});

export default greetingsSlice.reducer;
