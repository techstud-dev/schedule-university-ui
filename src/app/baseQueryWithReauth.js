import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authSlice } from "./authSlice";

const BASE_URL = "http://localhost:8080/api";

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "include",
});

/**
 * @typedef {Object} BaseQueryResult
 * @property {{ status: number }} [error]
 * @property {*} [data]
 */
export const baseQueryWithReauth = async (args, api, extraOptions) => {
    /** @type {BaseQueryResult} */
    let result = await baseQuery(args, api, extraOptions);

    if (result && result.error && result.error.status === 401) {
        console.log("Access token expired. Trying to refresh...");

        /** @type {BaseQueryResult} */
        const refreshResult = await baseQuery(
            { url: "/auth/refresh-token", method: "POST" },
            api,
            extraOptions
        );

        if (refreshResult && refreshResult.error && refreshResult.error.status === 401) {
            console.log("Refresh token invalid. Logging out...");
            api.dispatch(authSlice.actions.setIsAuth(false));

            if (extraOptions && extraOptions.navigate) {
                extraOptions.navigate("/login");
            }
        } else if (refreshResult && refreshResult.data) {
            console.log("Token refreshed. Retrying original request...");
            result = await baseQuery(args, api, extraOptions);
        }
    }

    return result;
};
