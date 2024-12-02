import "./App.css";
import Footer from "./Psges/Footer";
import Main from "./Psges/Main";
import Navbar from "./Psges/Navbar";

function App() {
  return (
    <div className="App">
      <div className="header"><Navbar /></div>
      <div className="content"><Main /></div>
      <div className="footer"><Footer /></div>           
      {/* <Login /> */}
    </div>
  );
}

export default App;
