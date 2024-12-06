import { Link } from "react-router-dom";
import ProfileElement from "../Components/NavbarComponents/ProfileElement.jsx";
import AppRouter from '../routes/AppRouter.jsx'
import Logo from "../Components/NavbarComponents/Logo.jsx";
import n from './styles/Navbar.module.css'

function Navbar() {
  return (
    <div className={n.navbar}>
      <Logo />
      <Link to="/places">
        Места
      </Link>
      <Link to="/teachers">
        Преподаватели
      </Link>
      <Link to="/groups">
        Группы
      </Link>

      <ProfileElement />
    </div>
  );
}

export default Navbar;
