import { configureStore } from "@reduxjs/toolkit";
import { AirApi } from "./Slices/DataApi";
import { BookRoomSlice } from "./Slices/BookRoomSlice";

export const airStore = configureStore({
  reducer: {
    [AirApi.reducerPath]: AirApi.reducer,
    rooms: BookRoomSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AirApi.middleware),
});

export type myRootState = ReturnType<typeof airStore.getState>;
export type myAirDispatch = typeof airStore.dispatch;
