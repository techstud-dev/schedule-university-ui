import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

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
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const studentData = localStorage.getItem("student");
  const student = JSON.parse(studentData);

  if (
    student.email === user.email &&
    student.password === user.password
  ) {
    setIsAuth(true);
    localStorage.setItem("auth", JSON.stringify(student));
  }
};
