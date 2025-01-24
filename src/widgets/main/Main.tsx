import { Text } from "../../shared/ui/text/Text";
import { RegistrationFormInModal } from "../../entities/registrationForm/ui/RegistrationFormInModal";
import main from "../../shared/assets/images/main.png";
import m from "./Main.module.css";


export const Main = () => {
    return (
        <section className={m.container}>
            <div>
                <Text type="h1" size="xxl">
                    "Schedule University - единая система расписания вузов"
                    Присоединяйся и попробуй, насколько это удобно
                </Text>
                <RegistrationFormInModal />
            </div>
            <img src={main} alt='картинка' width='250' height='200'/>
        </section>
    )
}
