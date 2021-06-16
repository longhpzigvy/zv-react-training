import axios from "axios";
import { store } from "../store";

const instance = axios.create({
  baseURL: "http://localhost:9000",
  timeout: 1000,
});

instance.interceptors.request.use(function (config) {
  const token = store.getState().authentication.token;
  config.headers.Authorization = "Bearer " + token;
  return config;
});

export const fetchUsers = (action) => {
  return instance.get("/api/users");
};

export const fetchUser = (action) => {
  return instance.get("/api/users/my");
};
