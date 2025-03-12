import users from "../assets/test/testUsers";
import axios from "axios";

export default class AuthService {
  static async register(user) {
    const student = JSON.stringify(user);

    const response = await axios.post("http://localhost:8083/api/auth/register", student)
    console.log(response.data)
    console.log(response.status)

    const message = response.data
  }
}

export const authenticate = (email, password) => {
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  console.log("Я тут", email, password, user);
  return user
    ? { success: true, user }
    : { success: false, message: "Некорректный email или пароль" };
};

// export const register = (newUser) => {
//     const existingUser = users.find(user => user.username === newUser.username);
//     if (existingUser) {
//         return { success: false, message: 'Пользователь уже существует' };
//     }

//     users.push(newUser);
//     return { success: true, user: newUser };
// };
