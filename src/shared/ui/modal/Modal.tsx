import { ReactNode } from 'react';
import {motion as m} from "framer-motion";
import n from "./Modal.module.css";

interface ModalProps {
    setIsOpen: (isOpen: boolean) => void;
    children: ReactNode;
}

export const Modal = (props: ModalProps) => {
    const { setIsOpen, children } = props;
    
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;

        if (target.dataset.class === 'overlay') {
            setIsOpen(false);
            console.log('hi')
        }
    };

    return (
        <div className={n.modal}>
            <div
                className={n.overlay}
                data-class="overlay"
                onClick={handleClick}
            >
                <m.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    {children}
                </m.div>
            </div>
        </div>
    );
};
