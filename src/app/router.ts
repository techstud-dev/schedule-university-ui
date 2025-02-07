import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
// import Schedule from "../entities/schedule/ui/";
import Login from "@/pages/ui/login/Login";
import Schedule from "@/entities/schedule/ui/Schedule";
import { store } from "./store";
import { authSlice } from "@/features/auth/model/auth.slice";
import Welcome from "@/pages/ui/welcome/Welcome";

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

console.log(isAuthenticated())

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
        loader: requireAuth,
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/welcome',
        Component: Welcome
      }
    ]
  }
])