import LoginContainer from "./../components/LoginContainer";
import university from "../../../assets/images/university.png"
import l from "./styles/Login.module.css"

function Login() {
    return (
      <div className={l.login}>
        <LoginContainer />
        <img src={university} alt='здание университета в классическом стиле на закате' width={'1088'} height={980}/>
      </div>
    );
  }
  
  export default Login;