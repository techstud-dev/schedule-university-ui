import { Link } from "react-router-dom";
import p from "./Profile.module.css";
import { useContext, useState } from "react";
import profileIcon from "@/shared/assets/icons/profile.png";
import { AuthContext } from "../../../context/AuthContext";

const Profile = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useContext must be used within an AuthProvider");
  }

  const { isAuth, setIsAuth } = authContext;

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const logout = () => {
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
          {isAuth ? (
            <button className={p.menuBtn} onClick={logout}>
              Выйти
            </button>
          ) : (
            <button className={p.menuBtn}>
              Войти
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
