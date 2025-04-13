import ava from "../../assets/icons/profile.png";
import p from './styles/ProfileCard.module.css'

const ProfileCard = () => {
    const studentData = localStorage.getItem("auth")
    const student = JSON.parse(studentData)

  return (
    <div className={p.profileContainer}>
      <div>
        <img src={ava} alt="Ваша аватарка" />
      </div>
      <div>
        <div>{student.username}</div>
        <div>ФИО пользователя</div>
        <div>ВУЗ</div>
        <div>Номер группы</div>
        <div>{student.email}</div>
        <div>Номер телефона</div>
        <div>{student.password}</div>
      </div>
      <div>
        <button disabled>Сохранить изменения</button>
      </div>
    </div>
  );
};

export default ProfileCard;
