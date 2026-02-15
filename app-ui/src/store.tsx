import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import userApiarySlice from "./features/userApiary/userApiarySlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    userApiary: userApiarySlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;