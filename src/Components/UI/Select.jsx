import React, { useState } from 'react';
import s from './styles/Select.module.css';
import { VisuallyHidden } from './VisuallyHidden';
import { getStyles } from '../../utils/getStyles';

const Select = ({text, isOptions, handelOption, required, className, error, setError, option, setOption}) => {
    const additional = [
        className
    ];
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    
    const handleOptionClick = (element) => {
        handelOption(element)
        setOption(element)
        setIsOpen(false);
        setError(false);
    };

    return (
        <div>
            <div className={getStyles(s.select,{},additional)}>
                <div className={s.selected} onClick={toggleDropdown}>
                    {option === '' ? text : option}
                    <button className={s.button_selector}>
                        <VisuallyHidden>{text}</VisuallyHidden>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.16668 12.4998C4.16668 17.1022 7.89764 20.8332 12.5 20.8332C17.1024 20.8332 20.8333 17.1022 20.8333 12.4998C20.8333 7.89746 17.1024 4.1665 12.5 4.1665C7.89764 4.1665 4.16668 7.89746 4.16668 12.4998ZM12.5 22.9165C6.74704 22.9165 2.08334 18.2528 2.08334 12.4998C2.08334 6.74687 6.74704 2.08317 12.5 2.08317C18.253 2.08317 22.9167 6.74687 22.9167 12.4998C22.9167 18.2528 18.253 22.9165 12.5 22.9165ZM8.63844 10.7216C9.04524 10.3148 9.70478 10.3148 10.1116 10.7216L12.5 13.11L14.8884 10.7216C15.2952 10.3148 15.9548 10.3148 16.3616 10.7216C16.7684 11.1284 16.7684 11.7879 16.3616 12.1947L13.2366 15.3197C12.8298 15.7265 12.1702 15.7265 11.7634 15.3197L8.63844 12.1947C8.23164 11.7879 8.23164 11.1284 8.63844 10.7216Z" fill="#DBFC08"/>
                        </svg>
                    </button>
                </div>
                {isOpen && (
                    <div className={s.options}>
                    {isOptions.map((element) => (
                        <div
                        key={element.value}
                        className={s.option}
                        onClick={() => handleOptionClick(element.label)}
                        >
                        {element.label}
                        </div>
                    ))}
                    </div>
                )}
            </div>
                <p className={s.error}>{required && option === '' && error ? 'Пожалуйста, выберите опцию.' : ''}</p>
        </div>
        
    );
};

export default Select;
