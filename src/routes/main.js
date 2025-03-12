import Login from "../Pages/Login";
import Main from "../Pages/Main";
import Profile from "../Pages/Profile";

export const publicRoutes = [
    {path: "/login", element: Login},
];

export const privateRoutes = [
    {path: "/schedule", element: Main},
    {path: "/profile", element: Profile},
];