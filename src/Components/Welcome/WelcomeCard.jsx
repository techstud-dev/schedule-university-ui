import { arrow } from "../../utils/arrow";
import { LinkCustom } from "../UI/LinkCustom";
import { VisuallyHidden } from "../UI/VisuallyHidden";
import w from "./styles/Welcome.module.css";

const WelcomeCard = ({img, title, description, link, links}) => {
    return (
        <li className={w.card_container}>
            <div className={w.card_wrapper_picture}>
                {img}
                <p>{title}</p>
            </div>
            <p className={w.card_description}>{description}</p>
            {link && <LinkCustom className={w.link_card} path={link.path} color={'secondary'}>
            {link.title}
            {arrow()}
            </LinkCustom>}
            <ul className={w.list_card}>
            {links && links.map((link, id) => 
                <li key={id}>
                    <img key={id} src={link.img} alt={link.alt} />
                    <VisuallyHidden>{link.alt}</VisuallyHidden>
                </li>
                )}
            </ul>
        </li>
    )
}

export default WelcomeCard;
