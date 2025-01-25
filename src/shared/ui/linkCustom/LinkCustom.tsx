import { Link } from 'react-router-dom'; 
import l from './LinkCustom.module.css';
import { getStyles } from '../../libs/getStyles';

interface LinkCustomProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    className?: string;
    path: string;
    children: React.ReactNode;
    size?: 'xs' | 'sm' | 'md' | 'lg'; 
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
