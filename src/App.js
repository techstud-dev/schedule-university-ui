import { useEffect } from "react";
import "./App.css";
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
        <header className="header">
          <Navbar />
        </header>
        <main className="content">
          <AppRouter />
        </main>
        <footer className="footer">
          <Footer />
        </footer>
    </div>
  );
}

export default App;
