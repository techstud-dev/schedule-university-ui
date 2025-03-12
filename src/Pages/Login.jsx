import LoginContainer from "../Components/LoginComponents/LoginContainer";
import l from "./styles/Login.module.css"

function Login() {
    return (
      <div className={l.Login}>
        <LoginContainer />
      </div>
    );
  }
  
  export default Login;