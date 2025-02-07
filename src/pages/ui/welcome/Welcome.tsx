import picture from "@/shared/assets/images/welcome.png";
import { Text } from "@/shared/ui/text/Text";
import { LinkCustom } from "@/shared/ui/linkCustom/LinkCustom";
import m from "./Welcome.module.scss";

function Welcome () {
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
                    <img src={picture} alt='черный планшет с белыми строками на фоне оранжевых полукругов и расскрытых книг' width='250' height='200'/>
                </div>
            </section>
        </main>
    )
};

export default Welcome;
