import { useEffect } from "react";
import "./App.css";
import Footer from "./Pages/Footer";
import Navbar from "./Pages/Navbar";
import AppRouter from "./routes/AppRouter";
import { authSlice } from "./app/authSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const isLocation = useLocation();

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            dispatch(authSlice.actions.setIsAuth(true));
        }
        dispatch(authSlice.actions.setIsLoading(false));
    }, []);

  return (
    <div className="App">
        <header className="header">
          <Navbar />
        </header>
        <main className="content">
          <AppRouter />
        </main>
        {isLocation.path !== '/welcome' && (
            <footer className="footer">
                <Footer />
            </footer>
        )}
    </div>
  );
}

export default App;
