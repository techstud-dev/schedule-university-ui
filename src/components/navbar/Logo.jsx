import { Link } from "react-router-dom";
import l from "./NavbarComponents.module.css";
import logo from '../../assets/images/logo.png'

const Logo = () => {
    return (
      <Link to="/" className={l.logoLink}>
        <img className={l.logo} src={logo} alt="logo" width={'275'} height={'40'}/>
      </Link>
    );
  };

export default Logo;
