import { LinkCustom } from "../../../components/ui/LinkCustom";
import l from "./../pages/styles/Login.module.css";

const LinkAuth = ({href, title, src}) => {
    return (
        <LinkCustom path={href} className={l.link}>
            <img src={src} alt={`иконка ${title}`} width={'35'} height={'35'}/>
            <p>{title}</p>
        </LinkCustom>
    )
}

export default LinkAuth;