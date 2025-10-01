import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  clickState: boolean;
  toastActive: boolean;
}

const initialState: CounterState = {
  clickState: false,
  toastActive: false,
};

const clickStateSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setClickState: (state, action: PayloadAction<boolean>) => {
      state.clickState = action.payload;
    },
    setToastActive: (state, action) => {
      console.log(action.payload);
      state.toastActive = action.payload;
    },
  },
});

export const { setClickState, setToastActive } = clickStateSlice.actions;
export default clickStateSlice.reducer;
