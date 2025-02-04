import { baseAPI } from "@/shared/api/api";
import { Lesson } from "@/shared/hooks/useSchedule";

export const scheduleAPI = baseAPI.injectEndpoints({
  endpoints: (create) => ({
    getWeekSchedules: create.query<Lesson[], void>({
      query: () => '/schedule',
      transformResponse: (response) => [...response.oddWeekSchedules, ...response.evenWeekSchedules]
    }),
  }),
  overrideExisting: true
});

export const { useGetWeekSchedulesQuery } = scheduleAPI;