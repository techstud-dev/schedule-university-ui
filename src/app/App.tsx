import "./styles/app.css";
import { Outlet } from "react-router-dom";
import Header from "@/widgets/header/Header";
import Footer from "@/widgets/footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
