import Login from "../Pages/Login";
import Main from "../Pages/Main";

export const publicRoutes = [
    {path: "/login", element: Login},
];

export const privateRoutes = [
    {path: "/schedule", element: Main},
];