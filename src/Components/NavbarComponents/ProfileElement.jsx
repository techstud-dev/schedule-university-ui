import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import profileIcon from "../../assets/icons/profile.png";
import { authSlice } from "../../app/auth.slice";
import p from "./NavbarComponents.module.css";

const ProfileElement = () => {
  const dispatch = useDispatch();

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const logout = (e) => {
    dispatch(authSlice.actions.setIsAuth(false))
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
