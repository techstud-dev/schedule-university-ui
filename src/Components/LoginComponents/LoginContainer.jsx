import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import l from "./styles/Login.module.css";

const LoginContainer = () => {
  const [viewMode, setViewMode] = useState("login");

  const loginSwitch = () => {
      setViewMode("login");
  };
  const signupSwitch = () => {
      setViewMode("signup");
  };

  return (
    <div>
      <div className={l.login_button_wrapper}>
        <button className={l.nav_button} onClick={loginSwitch}>Войти</button>
        <button className={l.nav_button} onClick={signupSwitch}>Зарегистрироваться</button>
      </div>
      <h1 className={l.login_title}>{viewMode === 'login' ? "Вход в систему" : "Регистрация"}</h1>
      <div>
        {viewMode === 'login' ? <Login /> : <SignUp />}
      </div>
    </div>
  );
};

export default LoginContainer;
