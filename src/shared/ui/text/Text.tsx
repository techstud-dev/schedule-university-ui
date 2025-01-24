import { getStyles } from '../../libs/getStyles';
import t from './Text.module.css';


interface TextProps {
    type?: 'h1' | 'h2' | 'h3' | 'p' | 'li'; 
    children: React.ReactNode; 
    size?: 'xs' | 'sm' | 'md' | 'lg'| 'xl'|'xxl'; 
    className?: string; 
}

export const Text: React.FC<TextProps> = ({ 
    type = 'p', 
    children, 
    size = 'xs',
    className 
}) => {

    const mapTextTag: Record<string, React.ElementType> = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        p: 'p',
        li: 'li',
    }
    const TextTag = mapTextTag[type];

    const additional = [
        t[size],
        className
    ]

    return (
        <TextTag className={getStyles(t.text, {}, additional)}>
            {children}
        </TextTag>
    );
};
