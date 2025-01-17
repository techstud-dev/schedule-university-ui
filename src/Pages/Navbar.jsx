import { Link } from "react-router-dom";
import ProfileElement from "../Components/NavbarComponents/ProfileElement.jsx";
import Logo from "../Components/NavbarComponents/Logo.jsx";
import n from "./styles/Navbar.module.css";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext.js";
import NavbarLinks from "../Components/NavbarComponents/NavbarLinks.jsx";

function Navbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = (e) => {
    setIsAuth(true);
    localStorage.setItem("auth", "token123");
  };

  return (
    <nav className={n.navbar}>
      <Logo />
      <div className={n.menu}>
        {isAuth ? (
          <>
            <NavbarLinks />
            <ProfileElement />
          </>
        ) : (
          <>
            <Link to="/about" className={n.link}>
              Почему мы?
            </Link>
            <button onClick={login} className={n.button}>
              <Link to={"/schedule"}>Войти</Link>
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
