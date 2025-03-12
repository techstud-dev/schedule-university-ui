import { Link } from "react-router-dom";
import p from "./NavbarComponents.module.css";
import { useContext, useState } from "react";
import profileIcon from "../../assets/icons/profile.png";
import { AuthContext } from "../../Context/AuthContext";

const ProfileElement = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const logout = (e) => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className={p.container} style={{ position: "relative" }}>
      <div className={p.wrapper}>
        <button className={p.menuBtn} onClick={toggleMenu}>
          <img className={p.profileIcon} src={profileIcon} alt="profile" />{" "}
          <span>{"⌵"}</span>
        </button>
      </div>

      {isMenuOpen && (
        <div className={p.menu}>
          <Link to="/profile" className={p.menuLink} onClick={toggleMenu}>
            Профиль
          </Link>
          <Link to="/settings" className={p.menuLink} onClick={toggleMenu}>
            Настройки
          </Link>
          <button className={p.menuBtn} onClick={logout}>
            Выйти
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileElement;
