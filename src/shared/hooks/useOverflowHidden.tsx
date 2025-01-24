import { useEffect } from 'react';

const useOverflowHidden = (isOpen:boolean): void => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);
};

export default useOverflowHidden;