import { LinkCustom } from "@/shared/ui/linkCustom/LinkCustom";
import { Text } from "@/shared/ui/text/Text";
import main from "@/shared/assets/images/main.png";
import m from "./Main.module.css";

function Main () {
    return (
        <section className={m.container}>
            <div>
                <Text type="h1" size="xxl">
                    "Schedule University - единая система расписания вузов"
                    Присоединяйся и попробуй, насколько это удобно
                </Text>
                <LinkCustom path={"/schedule"}>Зарегистрироваться</LinkCustom>
            </div>
            <img src={main} alt='картинка' width='250' height='200'/>
        </section>
    )
}

export default Main
