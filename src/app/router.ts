import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
// import Schedule from "../entities/schedule/ui/";
import Login from "../features/auth/ui/LoginForm";
import Schedule from "@/entities/schedule/ui/Schedule";
import { store } from "./store";
import { authSlice } from "@/features/auth/model/auth.slice";
import { scheduleAPI } from "@/entities/schedule/api/scheduleAPI";

const isAuthenticated = () => {
  // Пример проверки авторизации
  return Boolean(localStorage.getItem("auth"));
};

const requireAuth = () => {
  store.dispatch(authSlice.actions.checkAuth())

  if (!isAuthenticated()) {
    return redirect('/login');
  }
  return null;
};

const loaderSchedule = () => {
  store.dispatch(authSlice.actions.checkAuth())

  if (!isAuthenticated()) {
    return redirect('/login');
  }

  store.dispatch(scheduleAPI.util.prefetch('getWeekSchedules', undefined, {}))

  return null;
};

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        loader: () => redirect('/login')
      },
      {
        path: '/schedule',
        Component: Schedule,
        loader: loaderSchedule,
      },
      {
        path: '/login',
        Component: Login
      }
    ]
  }
])