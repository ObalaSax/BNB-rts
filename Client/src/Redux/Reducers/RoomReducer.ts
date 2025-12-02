import { createSlice } from "@reduxjs/toolkit";

export interface roomData {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  priceCurrency: string;
  lat: number;
  lng: number;
}

interface HomesState {
  room: roomData[];
}

const initialState: HomesState = {
  room: [],
};
export const RoomReducer = createSlice({
  name: "rooms",
  initialState,
  reducers: {},
});
