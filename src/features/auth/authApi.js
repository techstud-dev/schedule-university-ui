import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:8080/api/auth";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: "include",
});

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (credentials) => ({
        url: "/register",
        method: "POST",
        body: {
          data: {
            username: credentials.username,
            fullName: credentials.fullName,
            password: credentials.password,
            email: credentials.email,
            groupNumber: credentials.groupNumber,
            university: credentials.university,
          },
        },
      }),
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: {
          data: {
            identificationField: credentials.email,
            password: credentials.password,
          },
        },
      }),
    }),
    resendCodeUser: builder.mutation({
      query: (credentials) => ({
        url: "/resend-code",
        method: "POST",
        body: {
          data: {
            email: credentials.email,
          }
        },
      }),
    }),
    logoutUser: builder.mutation({
      query: (credentials) => ({
        url: "/logout",
        method: "DELETE",
        body: {
          data: {
            refreshToken: credentials.refreshToken,
          },
        },
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useResendCodeUserMutation,
  useLogoutUserMutation,
} = authApi;
