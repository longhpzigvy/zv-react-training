import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9000",
  timeout: 1000,
});

export const login = (action) => {
  return instance.post("/login", {
    email: action.payload.email,
    password: action.payload.password,
  });
};
