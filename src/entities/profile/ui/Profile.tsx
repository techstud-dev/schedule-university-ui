import { Link } from "react-router-dom";
import p from "./Profile.module.css";
import { useState } from "react";
import profileIcon from "@/shared/assets/icons/profile.png";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { authSlice } from "@/features/auth/model/auth.slice";

const Profile = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(state => authSlice.selectors.selectAuth(state))

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const logout = () => {
    dispatch(authSlice.actions.logout());
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
            <Link to="/login" className={p.menuBtn} onClick={logout}>
              Выйти
            </Link>
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
