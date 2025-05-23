import { LinkCustom } from "../UI/LinkCustom";
import l from "./styles/Login.module.css";

const LinkAuth = ({href, title, src}) => {
    return (
        <LinkCustom path={href} className={l.link}>
            <img src={src} alt={`иконка ${title}`} width={'35'} height={'35'}/>
            <p>{title}</p>
        </LinkCustom>
    )
}

export default LinkAuth;