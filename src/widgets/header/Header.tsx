import { Link } from "react-router-dom";
import Profile from "@/entities/profile/ui/Profile";
import Logo from "@/shared/ui/logo/Logo";
import n from "./Header.module.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const authContext = useContext(AuthContext);
  
  if (!authContext) {
    throw new Error('useContext must be used within an AuthProvider');
  }

  const { isAuth, setIsAuth } = authContext;

  const login = () => {
    setIsAuth(true);
    localStorage.setItem("auth", "token123");
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
