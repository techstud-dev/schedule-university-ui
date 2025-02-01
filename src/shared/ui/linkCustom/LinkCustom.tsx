import { Link } from 'react-router-dom'; 
import { getStyles } from '../../libs/getStyles';
import l from './LinkCustom.module.scss';

interface LinkCustomProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    className?: string;
    path: string;
    children: React.ReactNode;
    size?: 'xs' | 's' | 'm' | 'l'; 
    color?: 'primary' | 'secondary' ; 
    disabled?: boolean; 
    outlined?: boolean;
}

export const LinkCustom: React.FC<LinkCustomProps> = ({
    className,
    path,
    children,
    size = 'xs',
    color = 'primary',
    disabled,
    outlined,
    ...otherProps
}) => {
    const mode = {
        [l.outlined]: outlined,
    };

    const additional = [
        className,
        l[size],
        l[color],
        disabled ? l.disabled : '',
    ];

    return (
        <Link
            to={path}
            className={getStyles(l.button, mode, additional)}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
