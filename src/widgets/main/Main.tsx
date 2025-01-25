import { Text } from "../../shared/ui/text/Text";
import main from "../../shared/assets/images/main.png";
import { LinkCustom } from "../../shared/ui/linkCustom/linkCustom";
import m from "./Main.module.css";

export const Main = () => {
    return (
        <section className={m.container}>
            <div>
                <Text type="h1" size="xxl">
                    "Schedule University - единая система расписания вузов"
                    Присоединяйся и попробуй, насколько это удобно
                </Text>
                <LinkCustom path={'/'}>Зарегистрироваться</LinkCustom>
            </div>
            <div>
                <img src={main} alt='картинка' width='250' height='200'/>
            </div>
        </section>
    )
}
