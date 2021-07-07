import axios from "axios";
import { store } from "../redux/store";
import { BASE_URL } from "./Config";
const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
});

instance.interceptors.request.use(function (config) {
    const token = store.getState().userToken;
    if (token)
        config.headers.Authorization = `Bearer ${
            store.getState().userToken.token
        }`;
    return config;
});

instance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return error;
    }
);

const login = (action) => {
    return instance.post("/login", {
        email: action.data.email,
        password: action.data.password,
    });
};

const getUsers = (action) => {
    return instance.get("/api/users");
};

const getUser = (action) => {
    return instance.get("/api/users/my");
};
export { login, getUsers, getUser };
