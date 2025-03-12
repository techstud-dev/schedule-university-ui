import { Navigate, Route, Routes } from "react-router";
import { privateRoutes, publicRoutes } from "./main";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function AppRouter() {
  const { isAuth, isLoading } = useContext(AuthContext);

    if (isLoading) {
      return (
        <div>Загружаемся...</div>
      );
    }

  return (
    <div>
      {!isAuth ? (
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              path={route.path}
              element={<route.element />}
              key={route.path}
            />
          ))}
          <Route path="/*" element={<Navigate to="/login" replace />} />
        </Routes>
      ) : (
        <Routes>
          {privateRoutes.map((route) => (
            <Route
              path={route.path}
              element={<route.element />}
              key={route.path}
            />
          ))}
          <Route path="/*" element={<Navigate to="/schedule" replace />} />
        </Routes>
      )}
    </div>
  );
}

export default AppRouter;
