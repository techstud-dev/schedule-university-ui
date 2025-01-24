import { useModal } from "../../../shared/hooks/useModal";
import { VisuallyHidden } from "../../../shared/ui/visuallyHidden/VisuallyHidden";
import { RegistrationForm } from "./RegistrationForm";
import { getStyles } from '../../../shared/libs/getStyles';
import r from "./RegistrationForm.module.css";

export const RegistrationFormInModal = () => {
    const [changeCreateModal, drawCreateModal] = useModal();

    const additional = [
        r.buttonRegistration,
    ];

    const buttonClasses = getStyles(r.button, {}, additional);
    return (
        <>
            {drawCreateModal(
                <div className={r.container}>
                    <RegistrationForm changeOpen={()=>changeCreateModal() } />
                    <button className={r.buttonClosed} type="button" onClick={changeCreateModal}>
                        <VisuallyHidden>Закрыть модальное окно</VisuallyHidden>
                    </button>
                </div>
            )}
            <button className={buttonClasses} type="button" onClick={changeCreateModal}>Зарегистрироваться</button>
        </>
        
    )
}
