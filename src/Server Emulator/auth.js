import { useDispatch } from "react-redux";
import { authSlice } from "../app/auth.slice";

export const signUp = (user) => {
  console.log(user);

  const student = {
    username: user.username,
    firstname: user.firstname,
    surname: user.surname,
    middlename: user.middlename,
    university: user.university,
    group: user.group,
    email: user.email,
    phone: user.phone,
    password: user.password,
    token: user.token,
  };

  localStorage.setItem("student", JSON.stringify(student));

  const checkAuth = () => {
    const studentData = localStorage.getItem("student");
    const student = JSON.parse(studentData);
    console.log(student.username);
  };

  console.log(checkAuth());
};

export const useLogIn = (user) => {
  const dispatch = useDispatch();

  const studentData = localStorage.getItem("student");
  const student = JSON.parse(studentData);

  if (
    student.email === user.email &&
    student.password === user.password
  ) {
    dispatch(authSlice.actions.setIsAuth(true))
    localStorage.setItem("auth", JSON.stringify(student));
  }
};
