import { Link } from "react-router-dom";
import Profile from "@/entities/profile/ui/Profile";
import Logo from "@/shared/ui/logo/Logo";
import n from "./Header.module.css";
import { useState } from "react";

function Header() {
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
            <Profile />
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

export default Header;
