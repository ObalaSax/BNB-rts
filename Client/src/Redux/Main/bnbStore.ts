import { configureStore } from "@reduxjs/toolkit";
import { bnbApi } from "./bnbApi";
import { RoomReducer } from "../Reducers/RoomReducer";

export const bnbStore = configureStore({
  reducer: {
    [bnbApi.reducerPath]: bnbApi.reducer,
    room: RoomReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bnbApi.middleware),
});

export type BnbRootState = ReturnType<typeof bnbStore.getState>;
export type BnbAppDispatch = typeof bnbStore.dispatch;
