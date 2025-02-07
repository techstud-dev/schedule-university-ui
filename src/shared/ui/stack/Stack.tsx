import React, { forwardRef } from 'react';
import { getStyles } from '@/shared/libs/getStyles';
import s from './Stack.module.scss'; // Предполагается, что стили находятся в этом файле

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    justify?: 'justifyBetween' | 'justifyCenter' | 'justifyAround' | 'justifyEnd';
    direction?: 'row' | 'column'; 
    align?: 'alignCenter' | 'alignEnd';
    max?: boolean;
    gap?: 4 | 8 | 12 | 16 | 24 | 32 | 40 | 48 | 75;
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(({
    children, 
    className, 
    justify, // justifyBetween | justifyCenter | justifyAround | justifyEnd
    direction = 'row',
    align, // alignCenter | alignEnd
    max,
    gap,
    ...otherProps
}, ref) => {

    const mapGap: Record<number, string> = {
        4: 'gap4',
        8: 'gap8',
        12: 'gap12',
        16: 'gap16',
        24: 'gap24',
        32: 'gap32',
        40: 'gap40',
        48: 'gap48',
        75: 'gap75'
    };

    const mode = {
        [s.max]: max
    };

    const additional = [
        className,
        s[justify],
        s[align],
        s[direction],
        gap && s[mapGap[gap]]
    ];

    const stackClasses = getStyles(s.flex, mode, additional);

    return (
        <div className={stackClasses} ref={ref} {...otherProps}>
            {children}
        </div>
    );
});
