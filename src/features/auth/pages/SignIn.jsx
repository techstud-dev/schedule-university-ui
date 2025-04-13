import { useState } from "react";
import passHideIcon from "../../../assets/icons/pass_hide.svg";
import passShowIcon from "../../../assets/icons/pass_show.svg";
import { ButtonCustom } from "../../../components/UI/ButtonCustom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import l from "./styles/Login.module.css";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "../authApi";
import { authSlice } from "../authSlice";

const SignIn = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const dispatch = useDispatch();
  const [loginRequest, { data, error, isLoading }] = useLoginUserMutation();

  const togglePassVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const onSubmit = async (data) => {
    console.log('Submitted Data:', data);
    try {
      const response = await loginRequest(data).unwrap();
      dispatch(authSlice.actions.setIsAuth(true));
      navigate('/');
    } catch (err) {
      console.error('Ошибка при входе:', err);
    }
  };

  return (
      <form className={l.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
              className={l.input}
              id="email"
              type="email"
              name={"email"}
              placeholder={"Адрес почты"}
              autoComplete="email"
              {...register('email', {
                required: 'Поле обязательно к заполнению',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Введите корректный адрес электронной почты',
                },
              })}
          />
          <p className={l.error_message} >{errors.email?.message}</p>
        </div>
        <div className={l.password_container}>
          <div>
            <input
                name="password"
                className={l.input}
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Пароль"
                autoComplete="current-password"
                {...register('password', {
                  required: 'Поле обязательно к заполнению',
                  minLength: {
                    value: 6,
                    message: 'Пароль должен быть длинее 6 символов',
                  },
                  maxLength: {
                    value: 14,
                    message: 'Пароль должен быть короче 14 символов',
                  }
                })}
            />
            <p className={l.error_message}>{errors.password?.message}</p>
          </div>

          <button
              type="button"
              className={l.toggle_password}
              onClick={togglePassVisibility}
          >
            {isPasswordVisible ? (
                <img src={passShowIcon} alt='Скрыть пароль'/>
            ) : (
                <img src={passHideIcon} alt='Показать пароль'/>
            )}
          </button>
        </div>
        <ButtonCustom
            className={l.button}
            disabled={!isValid}
            type="submit"
        >
          <span>Продолжить</span>
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_329_414)">
              <path d="M16.5 22L22 16.5M22 16.5L16.5 11M22 16.5H11M2.75 16.5C2.75 8.90608 8.90608 2.75 16.5 2.75C24.0939 2.75 30.25 8.90608 30.25 16.5C30.25 24.0939 24.0939 30.25 16.5 30.25C8.90608 30.25 2.75 24.0939 2.75 16.5Z" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_329_414">
                <rect width="33" height="33" fill="white" transform="matrix(-1 0 0 -1 33 33)"/>
              </clipPath>
            </defs>
          </svg>
        </ButtonCustom>
      </form>
  );
};

export default SignIn;
