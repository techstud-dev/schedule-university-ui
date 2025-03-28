import { useEffect } from "react";
import "./App.css";
import Footer from "./Pages/Footer";
import Navbar from "./Pages/Navbar";
import AppRouter from "./routes/AppRouter";
import { authSlice } from "./app/auth.slice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      dispatch(authSlice.actions.setIsAuth(true))
    }
    dispatch(authSlice.actions.setIsLoading(false))
  }, []);

  return (
    <div className="App">
        <div className="header">
          <Navbar />
        </div>
        <div className="content">
          <AppRouter />
        </div>
        <div className="footer">
          <Footer />
        </div>
    </div>
  );
}

export default App;
