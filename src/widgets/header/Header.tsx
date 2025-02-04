import { Link } from "react-router-dom";
import Profile from "@/entities/profile/ui/Profile";
import Logo from "@/shared/ui/logo/Logo";
import n from "./Header.module.scss";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { authSlice } from "@/features/auth/model/auth.slice";

const Header = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(state => authSlice.selectors.selectAuth(state))

  const login = () => {
    dispatch(authSlice.actions.login())
  };
  
  return (
    <nav className={n.navbar}>
      <Logo />
      <div className={n.menu}>
        {isAuth ? (
          <>
            <Link to="/places" className={n.link}>Места</Link>
            <Link to="/teachers" className={n.link}>Преподаватели</Link>
            <Link to="/groups" className={n.link}>Группы</Link>
            <Profile />
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

export default Header;
