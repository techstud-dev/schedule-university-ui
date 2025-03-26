import { Navigate, Route, Routes } from "react-router";
import { privateRoutes, publicRoutes } from "./main";
import { useSelector } from "react-redux";
import { authSlice } from "../app/auth.slice";

function AppRouter() {

  const isAuth = useSelector(state => authSlice.selectors.selectIsAuth(state));
  const isLoading = useSelector(state => authSlice.selectors.selectIsLoading(state));

    if (isLoading) {
      return (
        <div>Загружаемся...</div>
      );
    }

  return (
    <>
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
    </>
  );
}

export default AppRouter;
