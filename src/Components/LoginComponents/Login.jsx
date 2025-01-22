import { useEffect, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { Input } from "../UI/Input";
import l from "./styles/Login.module.css";
import passHideIcon from "../../assets/icons/pass_hide.png";
import passShowIcon from "../../assets/icons/pass_show.png";
import InputErrors from "../UI/InputErrors";

const Login = () => {
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

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePassVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className={l.login_container}>
      <form className={l.login_form}>
        {email.isDirty && email.isEmpty && (
          <InputErrors errorMessage={email.errorEmpty} />
        )}
        {email.isDirty && email.isMinLengthError && (
          <InputErrors errorMessage={email.errorMin + " " + "email"} />
        )}
        {email.isDirty && email.isEmailError && (
          <div className={l.error_message}>{email.error + " " + "email"}</div>
        )}
        <input
          className={l.login_input}
          value={email.value}
          onChange={(e) => email.onChange(e)}
          onBlur={(e) => email.onBlur(e)}
          name={"email"}
          placeholder={"Электронная почта"}
        />
        {password.isDirty && password.isEmpty && (
          <div className={l.error_message}>Поле не может быть пустым</div>
        )}
        {password.isDirty && password.isMinLengthError && (
          <div className={l.error_message}>Слишком короткий пароль</div>
        )}
        {password.isDirty && password.isMaxLengthError && (
          <div className={l.error_message}>Слишком длинный пароль</div>
        )}
        <div className={l.password_container}>
          <input
            className={l.login_input}
            type={isPasswordVisible ? "text" : "password"} // Условие для смены типа
            placeholder="Пароль"
            {...password}
          />
          <button
            type="button"
            className={l.toggle_password}
            onClick={togglePassVisibility}
          >
            {isPasswordVisible ? (
              <img src={passShowIcon} />
            ) : (
              <img src={passHideIcon} />
            )}
          </button>
        </div>
        <button
          className={l.login_button}
          disabled={!email.isInputValid || !password.isInputValid}
        >
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
