import { useContext, useEffect, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { Input } from "../UI/Input";
import l from "./styles/Login.module.css";
import passHideIcon from "../../assets/icons/pass_hide.png";
import passShowIcon from "../../assets/icons/pass_show.png";
import InputErrors from "../UI/InputErrors";
import { AuthContext } from "../../Context/AuthContext";
import { authenticate } from "../../API/AuthService";
import { Link } from "react-router-dom";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // const email = useInput("", {
  //   isEmpty: true,
  //   isMinLengthError: 5,
  //   isEmail: false,
  // });
  // const password = useInput("", {
  //   isEmpty: true,
  //   isMinLengthError: 6,
  //   isMaxLengthError: 15,
  // });

  const login = (event) => {
    event.preventDefault();

    const result = authenticate(email, password);
    setMessage(result.success ? "Login successful" : result.message);
    console.log(result);

    if (result.success) {
      setIsAuth(true);
      localStorage.setItem("auth", JSON.stringify(result.user));
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePassVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className={l.login_container}>
      <form className={l.login_form} onSubmit={login}>
        {/* {email.isDirty && email.isEmpty && (
          <InputErrors errorMessage={email.errorEmpty} />
        )}
        {email.isDirty && email.isMinLengthError && (
          <InputErrors errorMessage={email.errorMin + " " + "email"} />
        )}
        {email.isDirty && email.isEmailError && (
          <div className={l.error_message}>{email.error + " " + "email"}</div>
        )} */}
        <input
          className={l.login_input}
          value={email.value}
          onChange={handleInputChange}
          // onBlur={(e) => email.onBlur(e)}
          name={"email"}
          placeholder={"Электронная почта"}
        />
        {/* {password.isDirty && password.isEmpty && (
          <div className={l.error_message}>Поле не может быть пустым</div>
        )}
        {password.isDirty && password.isMinLengthError && (
          <div className={l.error_message}>Слишком короткий пароль</div>
        )}
        {password.isDirty && password.isMaxLengthError && (
          <div className={l.error_message}>Слишком длинный пароль</div>
        )} */}
        <div className={l.password_container}>
          <input
            name="password"
            onChange={handleInputChange}
            className={l.login_input}
            type={isPasswordVisible ? "text" : "password"} // Условие для смены типа
            placeholder="Пароль"
            // {...password}
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
          // disabled={!email.isInputValid || !password.isInputValid}
        >
          {/* <Link to={'/schedule'}> */}
          Войти
          {/* </Link> */}
        </button>
      </form>
    </div>
  );
};

export default Login;
