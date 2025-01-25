import { useState } from "react";
import LoginForm from "../../../pages/login/ui/LoginForm";
import SignupForm from "../../../pages/login/ui/SignupForm";
import l from "./Login.module.css";

const Login = () => {
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
        {viewMode === 'login' ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
};

export default Login;