import { getStyles } from '@/shared/libs/getStyles';
import { ReactNode } from 'react';
import s from './ButtonCustom.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    size?: 's' | 'm' | 'l' ;
    radius?: 'rounded' | 'circle';
    color?: 'primary' | 'secondary' | 'outlined' | 'transparent';
    outlined?: boolean;
};

export const ButtonCustom: React.FC<ButtonProps> = ({
    className,
    children,
    size = 'xs',
    radius = 'rounded',
    color = 'primary',
    outlined,
    ...otherProps
}) => {
    const mode = {
        [s.outlined]: outlined,
    };

    const additional = [
        className,
        s[size],
        s[radius],
        s[color],
    ];

    return (
        <button 
            className={getStyles(s.button, mode, additional)}
            {...otherProps}
        >
            {children}
        </button>
    );
};
