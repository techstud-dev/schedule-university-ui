import { useState } from "react";
import { useSelector } from "react-redux";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import LoginTitle from "./LoginTitle";
import LinkAuth from "./LinkAuth";
import yandex from "../../assets/icons/yandex.svg";
import vk from "../../assets/icons/vk.svg";
import { registrationSlice } from "../../app/registration.slice";
import l from "./styles/LoginComponents.module.css";

const LoginContainer = () => {
  const registration = useSelector((state) =>registrationSlice.selectors.selectIsLogin(state));
  const [login, setLogin] = useState(registration);

  return (
    <section className={l.container}>
      <LoginTitle login={login} setLogin={setLogin} />
      {login ? <SignUp setLogin={setLogin} /> : <SignIn />}
      {login && 
      <div className={l.button_container}>
        <p className={l.wrapper}>или войдите через</p>
      <LinkAuth title={'Войти с Яндекс ID'} src={yandex} href={'/'}/>
      <LinkAuth title={'Войти с VK ID'} src={vk} href={'/'}/>
      </div>}
    </section>
  );
};

export default LoginContainer;
