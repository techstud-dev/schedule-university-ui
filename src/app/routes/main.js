import Login from "./../../features/auth/pages/Login";
import Main from "../../pages/Main";
import Profile from "../../components/profile/Profile";

export const publicRoutes = [
    {path: "/login", element: Login},
];

export const privateRoutes = [
    {path: "/schedule", element: Main},
    {path: "/profile", element: Profile},
];