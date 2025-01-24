import { InputHTMLAttributes } from 'react';
import { getStyles } from '../../libs/getStyles';
import i from "./Input.module.css";

export interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string; 
    errorMessage?: string;
    className: string;
}

export const CustomInput= (props: CustomInputProps)  => {
    const { errorMessage, id, className, label, ...otherProps } = props;
    const mode = {
        [i.error]: !!errorMessage,
    };

    const additional = [
        className,
    ];

    const inputClasses = getStyles(i.input, mode, additional);

    return (
        <div className={inputClasses}>
            <label>{label}</label>
            <input {...otherProps} />
            <div className={i.errorMessage}>{!!errorMessage ? errorMessage : ''}</div>
        </div>
    );
};
