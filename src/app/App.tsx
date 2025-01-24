import "./styles/app.css";
import { Outlet } from "react-router-dom";
import Header from "@/widgets/header/Header";
import Footer from "@/widgets/footer/Footer";
import { Main } from "../widgets/main/Main";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <Outlet />
        <Main />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
