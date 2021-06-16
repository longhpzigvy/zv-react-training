import axios from "axios";
import { store } from "../store";

const instance = axios.create({
  baseURL: "http://localhost:9000",
  timeout: 1000,
});

instance.interceptors.request.use(function (config) {
  const token = store.getState().authentication.token;
  if (token) config.headers.Authorization = "Bearer " + token;
  return config;
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return error.response.status;
  }
);

export const login = (action) => {
  return instance.post("/login", {
    email: action.payload.email,
    password: action.payload.password,
  });
};

export const fetchUsers = (action) => {
  return instance.get("/api/users");
};

export const fetchUser = (action) => {
  return instance.get("/api/users/my");
};
