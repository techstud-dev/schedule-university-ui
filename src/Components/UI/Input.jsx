import { getStyles } from '../../utils/getStyles';
import i from './styles/Input.module.css';

export const Input = ({
    register,
	name,
	options,
	setValue,
	error,
    className,
    label,
    ...otherProps
}) => {

    const mode = {
        [i.error]: !!error,
    };

    const additional = [
        className,
    ];

    const inputClasses = getStyles(i.input, mode, additional);

    return (
        <div className={i.inputWrapper}>
            {label && <label className={i.label} htmlFor={name}>{label}</label>}
            <div>
                <input
                    id={name}
                    {...register(name, options)}
                    className={inputClasses}
                    {...otherProps}
                />
                <p className={i.error_text}>{error ? error.message : ''}</p>
            </div>
        </div>
    );
};
