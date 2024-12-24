import DashboardContainer from "../Components/SchedulePageComponents/DashboardContainer";
import ScheduleContainer from "../Components/SchedulePageComponents/ScheduleContainer";

function Main() {
    return (
      <div className="Main">
        <DashboardContainer />
        <p>----------</p>
        <ScheduleContainer />
      </div>
    );
  }
  
  export default Main;