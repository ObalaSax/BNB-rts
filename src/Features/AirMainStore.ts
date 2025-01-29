import { configureStore } from "@reduxjs/toolkit";

export const airStore = configureStore({
  reducer: {},
});

export type myRootState = ReturnType<typeof airStore.getState>;
export type myAirDispatch = typeof airStore.dispatch;
