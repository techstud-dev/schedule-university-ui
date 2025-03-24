import { useState } from "react";
import { useInput } from "../../hooks/useInput";
import l from "./styles/Login.module.css";
import passHideIcon from "../../assets/icons/pass_hide.png";
import passShowIcon from "../../assets/icons/pass_show.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authSlice } from "../../app/auth.slice";
import { useRegisterMutation } from "../../app/authApi";

const SignUp = () => {
  const dispatch = useDispatch();
  const [register, { data, error, isLoading }] = useRegisterMutation();

  const universities = ["Другое", "Вуз 1", "Вуз 2", "Вуз 3", "Вуз 4", "Вуз 5"];

  const [user, setUser] = useState({
    username: "",
    firstname: "",
    surname: "",
    middlename: "",
    university: "",
    group: "",
    email: "",
    phone: "",
    password: "",
    token: 123
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevValues) => ({
      ...prevValues,
      [name]: value,
      token: 123,
    }));
  };
  
  const signUp = (event) => {
    event.preventDefault();
    
  };

  // const submitForm = (event) => {
  //   event.preventDefault();
  //   AuthService.register(user);

  //   // signUp(user);
  // };

  const handleRegister = async () => {
    await register(user);
    dispatch(authSlice.actions.setIsAuth(true))
    localStorage.setItem("auth", JSON.stringify(user));
  };


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
            name="username"
            value={user.username}
            onChange={handleInputChange}
            //   onBlur={(e) => email.onBlur(e)}
            placeholder={"Введите никнейм"}
          />
          <input
            className={l.login_input}
            name="firstname"
            value={user.firstname}
            onChange={handleInputChange}
            //   onBlur={(e) => email.onBlur(e)}
            placeholder={"Введите своё имя"}
          />
          <input
            className={l.login_input}
            name="surname"
            value={user.surname}
            onChange={handleInputChange}
            //   onBlur={(e) => email.onBlur(e)}
            placeholder={"Введите свою фамилию"}
          />
          <input
            className={l.login_input}
            name="middlename"
            value={user.middlename}
            onChange={handleInputChange}
            //   onBlur={(e) => email.onBlur(e)}
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
          {universities.map((vuz) => (
            <option>{vuz}</option>
          ))}
        </datalist>
        <input
          className={l.login_input}
          name={"group"}
          value={user.group}
          onChange={handleInputChange}
          //   onBlur={(e) => email.onBlur(e)}
          placeholder={"Введите номер группы"}
        />

        {email.isDirty && email.isEmpty && (
          <div className={l.error_message}>Поле не может быть пустым</div>
        )}
        {email.isDirty && email.isMinLengthError && (
          <div className={l.error_message}>Слишком короткий email</div>
        )}
        {email.isDirty && email.isEmailError && (
          <div className={l.error_message}>Некорректный email</div>
        )}
        <div className={l.input_group}>
          <input
            className={l.login_input}
            name="email"
            value={user.email}
            onChange={handleInputChange}
            onBlur={(e) => email.onBlur(e)}
            placeholder={"Электронная почта"}
          />
          <input
            className={l.login_input}
            name="phone"
            value={user.phone}
            onChange={handleInputChange}
            //   onBlur={(e) => email.onBlur(e)}
            type="tel"
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
            name="password"
            value={user.password}
            onChange={handleInputChange}
            className={l.login_input}
            autoComplete="new-password"
            type={isPasswordVisible ? "text" : "password"} // Условие для смены типа
            placeholder="Пароль"
            // {...password}
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

        <Link to={"/schedule"}>
          <button
            className={l.login_button}
            onClick={handleRegister}
            // disabled={!email.isInputValid || !password.isInputValid}
          >
            Зарегистрироваться
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
