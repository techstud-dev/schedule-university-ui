import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Pages/Footer";
import Navbar from "./Pages/Navbar";
import AppRouter from "./routes/AppRouter";
import { AuthContext } from "./Context/AuthContext";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
        <div className="header">
          <Navbar />
        </div>
        <div className="content">
          <AppRouter />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
