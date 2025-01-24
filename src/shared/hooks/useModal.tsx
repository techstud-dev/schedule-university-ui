import { ReactNode, useEffect, useState } from "react";
import { Modal } from "../ui/modal/Modal";
import useOverflowHidden from "./useOverflowHidden";

export const useModal = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    useOverflowHidden(isOpen);

    const changeOpen: () => void = () => {
        setIsOpen(prev => !prev);
    };

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        }
    }, [isOpen])

    const drawModal = (child: ReactNode): ReactNode => {
        return (
            isOpen &&
                <Modal setIsOpen={setIsOpen} >
                    {child}
                </Modal>
        );
    };

    return [changeOpen, drawModal, isOpen];
};
