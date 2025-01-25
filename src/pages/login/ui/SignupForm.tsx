import { useState } from "react";
import { useInput } from "../../../shared/hooks/useInput";
import l from "./Login.module.css";
import passHideIcon from "../../../shared/assets/icons/pass_hide.png";
import passShowIcon from "../../../shared/assets/icons/pass_show.png";

const SignupForm = () => {
  const vuzs = ["Другое", "Вуз 1", "Вуз 2", "Вуз 3", "Вуз 4", "Вуз 5"];

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

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className={l.login_container}>
      <form className={l.login_form}>
        <div className={l.input_group}>
          <input
            className={l.login_input}
            //   value={email.value}
            //   onChange={(e) => email.onChange(e)}
            //   onBlur={(e) => email.onBlur(e)}
            name={"username"}
            placeholder={"Введите никнейм"}
          />
          <input
            className={l.login_input}
            //   value={email.value}
            //   onChange={(e) => email.onChange(e)}
            //   onBlur={(e) => email.onBlur(e)}
            name={"name"}
            placeholder={"Введите своё имя"}
          />
          <input
            className={l.login_input}
            //   value={email.value}
            //   onChange={(e) => email.onChange(e)}
            //   onBlur={(e) => email.onBlur(e)}
            name={"surname"}
            placeholder={"Введите свою фамилию"}
          />
          <input
            className={l.login_input}
            //   value={email.value}
            //   onChange={(e) => email.onChange(e)}
            //   onBlur={(e) => email.onBlur(e)}
            name={"surname"}
            placeholder={"Введите своё отчество (если есть)"}
          />
        </div>

        <input
          className={l.login_input}
          type="text"
          list="vuz-list"
          placeholder="Выберите ВУЗ"
        />
        <datalist id="vuz-list" className={l.login_input}>
          <option value="" disabled selected>
            Другое
          </option>
          {vuzs.map((vuz) => (
            <option>{vuz}</option>
          ))}
        </datalist>
        <input
          className={l.login_input}
          //   value={email.value}
          //   onChange={(e) => email.onChange(e)}
          //   onBlur={(e) => email.onBlur(e)}
          name={"text"}
          placeholder={"Введите номер группы"}
        />

        {email.isDirty && email.isEmpty && (
          <div className={l.error_message}>Поле не может быть пустым</div>
        )}
        {email.isDirty && email.isMinLengthError && (
          <div className={l.error_message}>Слишком короткий email</div>
        )}
        {email.isDirty && email.isError && (
          <div className={l.error_message}>Некорректный email</div>
        )}
        <div className={l.input_group}>
          <input
            className={l.login_input}
            value={email.value}
            onChange={(e) => email.onChange(e)}
            onBlur={() => email.onBlur()}
            name={"email"}
            placeholder={"Электронная почта"}
          />
          <input
            className={l.login_input}
            //   value={email.value}
            //   onChange={(e) => email.onChange(e)}
            //   onBlur={(e) => email.onBlur(e)}
            type="tel"
            name={"phone"}
            placeholder={"Введите свой номер телефона"}
          />
        </div>
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
            onClick={togglePasswordVisibility}
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
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default SignupForm;