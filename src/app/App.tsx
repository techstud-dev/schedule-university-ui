import "./styles/app.css";
import { Outlet } from "react-router-dom";
import Header from "@/widgets/header/Header";
import Footer from "@/widgets/footer/Footer";
import { AuthContext } from "../context/AuthContext";
import { useEffect, useState } from "react";

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
          <Header />
        </div>
        <div className="content">
          <Outlet />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
