import { Link } from "react-router-dom"
import n from './NavbarComponents.module.css'

const NavbarLinks = () => {
    return (
        <div>
            <Link to="/places" className={n.link__item}>Места</Link>
            <Link to="/teachers" className={n.link__item}>Преподаватели</Link>
            <Link to="/groups" className={n.link__item}>Группы</Link>
        </div>
    )
}

export default NavbarLinks;