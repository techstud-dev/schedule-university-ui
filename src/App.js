import { useEffect, useState } from "react";
import "./App.css";
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
        <header className="header">
          <Navbar />
        </header>
        <main className="content">
          <AppRouter />
        </main>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
