import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

const bottonSlice = createSlice({
  name: "buttonClicked",
  initialState: initialState,
  reducers: {
    mainButton: (state: boolean, action) => {
      state = action.payload;
    },
  },
});

export const { mainButton } = bottonSlice.actions;
export const mainButtonReducer = bottonSlice.reducer;
