import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const bnbURL =
  "https://cdn.rawgit.com/abbassiddiqi/airbnb-api/bbd1300a/flats.json";
export const bnbApi = createApi({
  reducerPath: "bnbApi",
  baseQuery: fetchBaseQuery({ baseUrl: bnbURL }),
  endpoints: (builder) => ({
    getRooms: builder.query({
      query: () => "",
    }),
  }),
});

export const { useGetRoomsQuery } = bnbApi;
