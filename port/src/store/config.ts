import { configureStore } from "@reduxjs/toolkit";
import { mainButtonReducer } from "../components/reducer/buttonClick-reducer";

const store = configureStore({
  reducer: {
    mainButton: mainButtonReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
