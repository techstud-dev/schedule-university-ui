import { Link, useLocation } from "react-router-dom";
import ProfileElement from "../Components/NavbarComponents/ProfileElement.jsx";
import Logo from "../Components/NavbarComponents/Logo.jsx";
import n from "./styles/Navbar.module.css";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext.js";
import NavbarLinks from "../Components/NavbarComponents/NavbarLinks.jsx";
import { LinkCustom } from "../Components/UI/LinkCustom.jsx";
import { useDispatch } from "react-redux";
import { setLogin } from "../redux/registration_reducer.js";

function Navbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const location = useLocation();

  const login = (e) => {
    setIsAuth(true);
    localStorage.setItem("auth", "token123");
  };

  const welcome = location.pathname === '/welcome';
  let menu = false;

  const dispatch = useDispatch();

  const handelClickEntrance = () => {
    dispatch(setLogin(false));
  }

  const handelClickRegistration = () => {
    dispatch(setLogin(true));
  }

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
      {welcome && <div className={n.welcome}>
        <LinkCustom className={n.login_link} onClick={handelClickEntrance} path='/login' color={'secondary'}>Войти</LinkCustom>
        <LinkCustom className={n.login_link} onClick={handelClickRegistration} path='/login' color={'secondary'}>Регистрация</LinkCustom>
        </div>}
    </nav>
  );
}

export default Navbar;
