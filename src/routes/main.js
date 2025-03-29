import Login from "../Pages/Login";
import Welcome from "../Pages/Welcome"
import Main from "../Pages/Main";
import Profile from "../Pages/Profile";

export const publicRoutes = [
    {path: "/login", element: Login},
    {path: "/welcome", element: Welcome},
];

export const privateRoutes = [
    {path: "/schedule", element: Main},
    {path: "/profile", element: Profile},
];