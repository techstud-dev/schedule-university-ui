import { Link } from "react-router-dom";
import p from "./Profile.module.css";
import { useState } from "react";
import profileIcon from "@/shared/assets/icons/profile.png";

const Profile = () => {
  // Состояние для отслеживания видимости меню
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Функция для переключения состояния меню
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
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
          <button
            className={p.menuBtn}
            onClick={() => {
              /* Здесь добавлю логику выхода */
            }}
          >
            Выйти
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
