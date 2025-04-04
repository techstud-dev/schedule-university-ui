import { ButtonCustom } from '../UI/ButtonCustom'
import l from './styles/LoginComponents.module.css'

const LoginTitle = ({login, setLogin}) => {
    return (
        <div className={l.title_container}>
            <h2>
                {login ? 'Добро пожаловать, пользователь'
                : 'Создать аккаунт'}
            </h2>
            {!login && <p>
                Уже есть аккаунт?
                <ButtonCustom color={'text'} onClick={()=>setLogin(true)}>Войти</ButtonCustom>
                </p>
            }
        </div>
        
    )
}

export default LoginTitle;
