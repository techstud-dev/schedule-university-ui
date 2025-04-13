import l from './../pages/styles/Login.module.css'

const LoginTitle = ({login, setLogin}) => {
    return (
        <div className={l.title_container}>
            <h2>
                {login ? 'Создать аккаунт'
                : 'Добро пожаловать, пользователь'}
            </h2>
            {login && <p>
                Уже есть аккаунт?
                <button type="button" onClick={()=>setLogin(false)}>Войти</button>
                </p>}
        </div>
        
    )
}

export default LoginTitle