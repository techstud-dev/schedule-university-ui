import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Psges/Footer";
import Main from "./Psges/Main";
import Navbar from "./Psges/Navbar";

function App() {
  return (
    <div className="App">
      <div className="header"><Navbar /></div>
      <Routes>
        <Route path='/' element={<Main />}></Route>
      </Routes>
      <div className="footer"><Footer /></div>           
      {/* <Login /> */}
    </div>
  );
}

export default App;
