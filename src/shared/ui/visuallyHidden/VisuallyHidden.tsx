import v from "./VisuallyHidden.module.css"

interface VisuallyHiddenProps {
    children: React.ReactNode;
}

export const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({ children }) => {
    return (
        <span className={v.visuallyHidden}>{children}</span>
    );
};
