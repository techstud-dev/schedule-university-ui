import { useState } from "react";
import LoginForm from "@/features/auth/ui/login/LoginForm";
import SignupForm from "@/features/auth/ui/login/SignupForm";
import l from "./Login.module.scss";
import { ButtonCustom } from "@/shared/ui/buttonCustom/ButtonCustom";
import { Text } from "@/shared/ui/text/Text";
import { Stack } from "@/shared/ui/stack/Stack";

function Login () {
  const [viewMode, setViewMode] = useState("login");

  const loginSwitch = () => {
      setViewMode("login");
  };
  const signupSwitch = () => {
      setViewMode("signup");
  };

  return (
    <div className={l.login}>
      <Stack className={l.login_button_wrapper} justify={'justifyCenter'} align={'alignCenter'}>
        <ButtonCustom className={l.nav_button} onClick={loginSwitch}>Войти</ButtonCustom>
        <ButtonCustom className={l.nav_button} onClick={signupSwitch}>Зарегистрироваться</ButtonCustom>
      </Stack>
      <Text type={'h2'} className={l.login_title}>{viewMode === 'login' ? "Вход в систему" : "Регистрация"}</Text>
      {viewMode === 'login' ? <LoginForm /> : <SignupForm />}

    </div>
  );
};

export default Login;