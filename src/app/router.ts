import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import Schedule from "@/entities/schedule/ui/Schedule";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        loader: () => redirect('/schedule')
      },
      {
        path: '/schedule',
        Component: Schedule
      }
    ]
  }
])