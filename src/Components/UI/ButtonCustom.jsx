import { getStyles } from "../../utils/getStyles";
import styles from './styles/ButtonCustom.module.css';

export const ButtonCustom = ({
    className,
    children,
    radius = 'rounded', // rounded | circle
    color = 'primary', // primary | secondary | text
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
    ];

    return (
        <button 
            className={getStyles(styles.button, mode, additional)}
            {...otherProps}
        >
            {children}
        </button>
    );
};
