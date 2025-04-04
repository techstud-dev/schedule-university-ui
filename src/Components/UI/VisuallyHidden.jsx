import v from "./styles/VisuallyHidden.module.css";

export const VisuallyHidden = ({children}) => {
    return (
        <span className={v.visuallyHidden}>{children}</span>
    )
}
