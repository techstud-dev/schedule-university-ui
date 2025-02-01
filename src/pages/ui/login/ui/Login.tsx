import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import l from "./Login.module.scss";

const Login = () => {
  const [viewMode, setViewMode] = useState("login");

  const loginSwitch = () => {
      setViewMode("login");
  };
  const signupSwitch = () => {
      setViewMode("signup");
  };

  return (
    <div className={l.login}>
      <div className={l.login_button_wrapper}>
        <button className={l.nav_button} onClick={loginSwitch}>Войти</button>
        <button className={l.nav_button} onClick={signupSwitch}>Зарегистрироваться</button>
      </div>
      <h1 className={l.login_title}>{viewMode === 'login' ? "Вход в систему" : "Регистрация"}</h1>
      <div>
        {viewMode === 'login' ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
};

export default Login;