import { LinkCustom } from "../UI/LinkCustom";
import l from "./styles/LoginComponents.module.css";

const LinkAuth = ({href, title, src}) => {
    return (
        <LinkCustom path={href} className={l.link}>
            <img src={src} alt={`иконка ${title}`} width={'22'} height={'22'}/>
            <p>{title}</p>
        </LinkCustom>
    )
}

export default LinkAuth;
