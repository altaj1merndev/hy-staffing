import { getCookie } from "@/src/shears/utils/cookie";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_API}`,
    credentials: "include",
    prepareHeaders: (headers) => {
      const accessToken = getCookie("hy-staffing");
      if (accessToken) headers.set("authorization", accessToken);

      // headers.set("Content-Type", "application/json");

      // if (!(headers.get("Content-Type") === "multipart/form-data")) {
      //   headers.set("Content-Type", "application/json");
      // }
      return headers;
    },
  }),
  tagTypes: [
    "Users", "Category","Upload", "HowItWorks"

  ],
  endpoints: () => ({}),
});

export default baseApi;
