import { configureStore } from "@reduxjs/toolkit";
import buttonSlice from "../components/reducer/buttonClick-reducer";

const store = configureStore({
  reducer: {
    button: buttonSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
