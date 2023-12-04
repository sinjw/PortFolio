import { createSlice } from "@reduxjs/toolkit";

interface ButtonState {
  Clicked: boolean;
}

const initialState: ButtonState = {
  Clicked: false,
};

const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    modalButton: (state) => {
      state.Clicked = true;
    },
  },
});

export const { modalButton } = buttonSlice.actions;
export default buttonSlice.reducer;
