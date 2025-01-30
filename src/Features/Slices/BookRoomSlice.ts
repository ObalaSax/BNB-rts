import { createSlice } from "@reduxjs/toolkit";
export interface RoomData {
  id: number;
  imageUrl: string;
  lat: number;
  lng: number;
  name: string;
  price: number;
  priceCurrency: string;
}
interface RoomState {
  room: RoomData[];
}

const initialState: RoomState = {
  room: [],
};

export const BookRoomSlice = createSlice({
  name: "bookroom",
  initialState,
  reducers: {},
});
