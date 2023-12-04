import { configureStore } from "@reduxjs/toolkit";
import buttonSlice from "../components/reducer/buttonClick-reducer";
import modalButton from "../components/reducer/modalButton-reducer";
const store = configureStore({
  reducer: {
    button: buttonSlice,
    modalbutton: modalButton,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
