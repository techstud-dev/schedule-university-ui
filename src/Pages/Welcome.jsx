import WelcomeContainer from "../Components/Welcome/WelcomeContainer";
import w from "./styles/Welcome.module.css"

function Welcome() {
    return (
        <div className={w.container}>
            <WelcomeContainer />
        </div>
    );
}

export default Welcome;