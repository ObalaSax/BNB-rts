import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const airURL =
  "https://cdn.rawgit.com/abbassiddiqi/airbnb-api/bbd1300a/flats.json";
export const AirApi = createApi({
  reducerPath: "airApi",
  baseQuery: fetchBaseQuery({ baseUrl: airURL }),
  endpoints: (builder) => ({}),
});
