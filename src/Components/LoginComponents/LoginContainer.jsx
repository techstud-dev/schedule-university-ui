import { useEffect, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { Input } from "../UI/Input";

const LoginContainer = () => {
  const email = useInput("", {
    isEmpty: true,
    isMinLengthError: 5,
    isEmail: false,
  });
  const password = useInput("", {
    isEmpty: true,
    isMinLengthError: 6,
    isMaxLengthError: 15,
  });

  return (
    <div>
      <form>
        {email.isDirty && email.isEmpty && <div>Поле не может быть пустым</div>}
        {email.isDirty && email.isMinLengthError && (
          <div>Слишком короткий email</div>
        )}
        {email.isDirty && email.isEmailError && <div>Некорректный email</div>}
        <Input
          value={email.value}
          onChange={(e) => email.onChange(e)}
          onBlur={(e) => email.onBlur(e)}
          name={"email"}
          placeholder={"Электронная почта"}
        />
        {password.isDirty && password.isEmpty && (
          <div>Поле не может быть пустым</div>
        )}
        {password.isDirty && password.isMinLengthError && (
          <div>Слишком короткий пароль</div>
        )}
        {password.isDirty && password.isMaxLengthError && (
          <div>Слишком длинный пароль</div>
        )}
        <Input
          value={password.value}
          name={"password"}
          placeholder={"Пароль"}
          onChange={(e) => password.onChange(e)}
          onBlur={(e) => password.onBlur(e)}
        />
        <button disabled={!email.isInputValid || !password.isInputValid}>
          Войти
        </button>
      </form>
    </div>
  );
};

export default LoginContainer;
