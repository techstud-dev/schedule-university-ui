import './App.css';
import Footer from './Psges/Footer';
import Login from './Psges/Login';
import Main from './Psges/Main';
import Navbar from './Psges/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Login />
      <Footer />
    </div>
  );
}

export default App;