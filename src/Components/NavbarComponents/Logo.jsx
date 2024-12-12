import { Link } from "react-router-dom";
import l from "./NavbarComponents.module.css";
import logo from '../../assets/images/logo.jpg'

const Logo = () => {
    return (
      <div className={l.logoWrapper}>
        <Link to="/" className={l.logoLink}>
          <img className={l.logo} src={logo} alt="logo" />
          <span className={l.name}>Schedule University</span>
        </Link>
      </div>
    );
  };

export default Logo;
