import axios from "axios";
import { store } from "../store";
import history from "../history";
import { notification } from "antd";

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
    if (error.response.status === 401) {
      history.push("/app");
      notification.open({
        message: "401",
        description: "You don't have permission to do this.",
      });
    }
    return Promise.reject(error);
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
