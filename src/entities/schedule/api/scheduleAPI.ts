import { baseAPI } from "@/shared/api/api";

export const scheduleAPI = baseAPI.injectEndpoints({
  endpoints: (create) => ({
    getOddWeekSchedules: create.query<unknown, void>({
      query: () => '/oddWeekSchedules',
    }),
    getEvenWeekSchedules: create.query<unknown, void>({
      query: () => '/evenWeekSchedules',
    }),
  }),
  overrideExisting: true
});

export const { useLazyGetEvenWeekSchedulesQuery, useLazyGetOddWeekSchedulesQuery} = scheduleAPI;