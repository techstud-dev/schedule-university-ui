import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Pages/Footer";
import Main from "./Pages/Main";
import Navbar from "./Pages/Navbar";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Navbar />
      </div>
      <div className="content">
      <AppRouter /></div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
