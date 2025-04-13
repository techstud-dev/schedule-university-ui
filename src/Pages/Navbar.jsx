import { Link } from "react-router-dom";
import ProfileElement from "../Components/NavbarComponents/ProfileElement.jsx";
import Logo from "../Components/NavbarComponents/Logo.jsx";
import n from "./styles/Navbar.module.css";
import NavbarLinks from "../Components/NavbarComponents/NavbarLinks.jsx";
import { useSelector, useDispatch } from "react-redux";
import { authSlice } from "../app/authSlice.js";

function Navbar() {
  const dispatch = useDispatch();

  const isAuth = useSelector(state => authSlice.selectors.selectIsAuth(state));

  const login = (e) => {
    dispatch(authSlice.actions.setIsAuth(true))
    localStorage.setItem("auth", "token123");
  };

  let menu = false

  return (
    <nav className={n.navbar}>
      <Logo />
      {menu && <div className={n.menu}>
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
      </div>}
    </nav>
  );
}

export default Navbar;
