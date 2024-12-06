import Login from "../Pages/Login";
import Main from "../Pages/Main";

export const publicRoutes = [
    {path: "/", element: Main},
    {path: "/login", element: Login},
];

export const privateRoutes = [
    {path: "/main", element: Main},
    {path: "/login", element: Login},
];