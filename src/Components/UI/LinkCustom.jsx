import { Link } from "react-router-dom";
import { getStyles } from "../../utils/getStyles";
import styles from './styles/LinkCustom.module.css';

export const LinkCustom = ({
    className,
    path,
    children,
    radius = 'rounded', // rounded | circle
    color = 'primary', // primary | secondary |
    disabled,
    outlined,
    ...otherProps
}) => {

    const mode = {
        [styles.outlined]: outlined,
    };

    const additional = [
        className,
        styles[radius],
        styles[color],
        styles[disabled]
    ];

    return (
        <Link to={path}
            className={getStyles(styles.link, mode, additional)}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
