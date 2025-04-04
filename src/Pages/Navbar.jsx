import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileElement from "../Components/NavbarComponents/ProfileElement.jsx";
import Logo from "../Components/NavbarComponents/Logo.jsx";
import NavbarLinks from "../Components/NavbarComponents/NavbarLinks.jsx";
import { LinkCustom } from "../Components/UI/LinkCustom.jsx";
import { authSlice } from "../app/auth.slice.js";
import { registrationSlice } from "../app/registration.slice.js";
import n from "./styles/Navbar.module.css";

function Navbar() {
  const dispatch = useDispatch();
  const location = useLocation();

  const isAuth = useSelector(state => authSlice.selectors.selectIsAuth(state));

  const login = () => {
    dispatch(authSlice.actions.setIsAuth(true))
    localStorage.setItem("auth", "token123");
  };

  const welcome = location.pathname === '/welcome';
  let menu = false;

  const handelClickEntrance = () => {
    dispatch(registrationSlice.actions.setIsLogin(true));
  }

  const handelClickRegistration = () => {
    dispatch(registrationSlice.actions.setIsLogin(false));
  }

  return (
    <nav className={n.navbar}>
      <Logo className={welcome? n.welcome_logo : ''} />
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
