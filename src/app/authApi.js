import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:8083/api/auth";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
    }),
    login: builder.mutation({
      query: (loginData) => ({
        url: "/login",
        method: "POST",
        body: loginData,
      }),
    }),
    refreshToken: builder.mutation({
      query: ({ refreshToken }) => ({
        url: "/refresh-token",
        method: "POST",
        body: { refreshToken },
      }),
    }),
  })
});

export const { useRegisterMutation, useLoginMutation, useRefreshTokenMutation } = authApi;