import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  clickState: boolean;
}

const initialState: CounterState = {
  clickState: false,
};

const clickStateSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setClickState: (state, action: PayloadAction<boolean>) => {
      state.clickState = action.payload;
    },
  },
});

export const { setClickState } = clickStateSlice.actions;
export default clickStateSlice.reducer;
