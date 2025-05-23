import { useEffect } from "react";
import "./App.css";
import Footer from "./Pages/Footer";
import Navbar from "./Pages/Navbar";
import AppRouter from "./routes/AppRouter";
import { authSlice } from "./app/authSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

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
        <div className="footer">
          <Footer />
        </div>
    </div>
  );
}

export default App;
