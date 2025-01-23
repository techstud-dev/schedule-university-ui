import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
// import Schedule from "../entities/schedule/ui/";
import Login from "../pages/login/ui/LoginForm";

const isAuthenticated = () => {
  // Пример проверки авторизации
  return Boolean(localStorage.getItem("auth"));
};

const requireAuth = () => {
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
        // Component: Schedule,
        loader: requireAuth,
      },
      {
        path: '/login',
        Component: Login
      }
    ]
  }
])