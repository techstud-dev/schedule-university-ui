import main from "@/shared/assets/images/main.png";
import { Text } from "@/shared/ui/text/Text";
import { LinkCustom } from "@/shared/ui/linkCustom/LinkCustom";
import m from "./WellcomePage.module.scss";

function WellcomePage () {
    return (
        <main className={m.main}>
            <section className={m.container}>
                <div>
                    <Text type="h1" size="xxl">
                        "Schedule University - единая система расписания вузов"
                        Присоединяйся и попробуй, насколько это удобно
                    </Text>
                    <LinkCustom path={'/login'}>Зарегистрироваться</LinkCustom>
                </div>
                <div>
                    <img src={main} alt='картинка' width='250' height='200'/>
                </div>
            </section>
        </main>
    )
};

export default WellcomePage;
