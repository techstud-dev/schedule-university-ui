import LoginContainer from "../Components/LoginComponents/LoginContainer";
import l from "./styles/Login.module.css"

function Login() {
    return (
      <div className={l.Login}>
        <LoginContainer />
        {/* <ul className={l.switch_list}>
          <li className={l.switch_item}>Регистрация</li>
          <li className={l.switch_item}>Вход</li>
        </ul>
        <div className={l.reg_container} id="register">
          <div className="naming-container">
            <input type="text" placeholder="Имя" className="name input" />
            <input type="text" placeholder="Фамилия" className="surname input"/>
            <input type="text" placeholder="Отчество" className="patronymic input"/>
          </div>
          <input type="text" placeholder="Университет" className="university input"/>
          <input type="text" placeholder="Имя пользователя(id)" className="username input" />
          <input type="email" placeholder="E-mail" className="email input" />
          <input type="tel" placeholder="Номер телефона" className="number input" />
          <button className="btn">
            Зарегестрироваться
          </button>
        </div>
        <div className="log-container">
          <input type="text" placeholder="Логин" className="username input" />
          <input type="password" placeholder="Пароль" className="password input" />
          <button className="btn">
            Войти
          </button>
          <a href="##" className="forgot-password">
            Забыли пароль?
          </a>
        </div> */}
      </div>
    );
  }
  
  export default Login;