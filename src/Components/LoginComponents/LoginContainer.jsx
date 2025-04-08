import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import LoginTitle from "./LoginTitle";
import LinkAuth from "./LinkAuth";
import yandex from "../../assets/icons/yandex.svg";
import vk from "../../assets/icons/vk.svg";
import l from "./styles/Login.module.css";

const LoginContainer = () => {
  const [login, setLogin] = useState(true);

  return (
    <section className={l.container}>
      <LoginTitle login={login} setLogin={setLogin} />
      {login ? <SignIn /> : <SignUp />}
      {login && 
      <div className={l.button_container}>
        <p className={l.wrapper}>или войдите через</p>
      <LinkAuth title={' Войти с Яндекс ID'} src={yandex} href={'/'}/>
      <LinkAuth title={'Войти с VK ID'} src={vk} href={'/'}/>
      </div>}
    </section>
  );
};

export default LoginContainer;
