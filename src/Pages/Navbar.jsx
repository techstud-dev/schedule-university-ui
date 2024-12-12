import { Link } from "react-router-dom";
import ProfileElement from "../Components/NavbarComponents/ProfileElement.jsx";
import Logo from "../Components/NavbarComponents/Logo.jsx";
import n from "./styles/Navbar.module.css";
import { useState } from "react";

function Navbar() {
  const [isAuth, setIsAuth] = useState(false);
  
  return (
    <nav className={n.navbar}>
      <Logo />
      <div className={n.menu}>
        {isAuth ? (
          <>
            <Link to="/places" className={n.link}>Места</Link>
            <Link to="/teachers" className={n.link}>Преподаватели</Link>
            <Link to="/groups" className={n.link}>Группы</Link>
            <ProfileElement />
          </>
        ) : (
          <>
            <Link to="/about" className={n.link}>Почему мы?</Link>
            <button onClick={() => setIsAuth(true)} className={n.button}>
              Войти
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
