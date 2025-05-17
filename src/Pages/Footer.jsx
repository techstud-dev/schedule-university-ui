import { useLocation } from "react-router-dom";
import f from "./styles/Footer.module.css";

function Footer() {

return (
    <div className={f.footer}>
      <p className={f.footer__copyright}>© TechStud 2025<span>v1.1.1</span></p>
    </div>
  );
}

export default Footer;
