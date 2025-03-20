import { arrow } from "../../utils/arrow";
import { LinkCustom } from "../UI/LinkCustom";
import w from "./styles/Welcome.module.css";

const WelcomeCard = ({img, title, description, path, link}) => {
    return (
        <li className={w.card_container}>
            <div className={w.card_wrapper_picture}>
                {img}
                <p>{title}</p>
            </div>
            <p className={w.card_description}>{description}</p>
            {path && <LinkCustom className={w.link_card} path={path} color={'secondary'}>
            {link}
            {arrow()}
            </LinkCustom>}
        </li>
    )
}

export default WelcomeCard