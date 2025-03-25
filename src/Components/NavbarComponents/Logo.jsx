import { Link } from "react-router-dom";
import { getStyles } from "../../utils/getStyles";
import logo from '../../assets/images/logo.png';
import l from "./NavbarComponents.module.css";

const Logo = ({className}) => {
  const additional = [
    className,
  ]

    return (
      <Link to="/welcome" className={getStyles(l.logoLink, {} , additional)}>
        <img className={l.logo} src={logo} alt="logo" width={'275'} height={'40'}/>
      </Link>
    );
  };

export default Logo;
