import axios from "axios";
import qs from "qs";
import { store, persistor } from "../redux/store";
import customHistory from "./history";
import { userLogoutSucceed } from "../redux/auth/auth.action";

const axiosInstance = () => {
  const instance = axios.create({
    baseURL: "http://localhost:9000/",
    timeout: 30000,
  });

  //=======Request interceptor=========
  instance.interceptors.request.use(
    async (config) => {
      const { token } = store.getState().auth;
      if (token) {
        config.headers.common.Authorization = "Bearer " + token;
      }
      return config;
    },
    (error) => {
      console.log("Error", error);
      return Promise.reject(error);
    }
  );

  //======Response interceptor============
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // handle system return code 401
      if (error?.response?.status === 401) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error &&
          error.response.data.error.name === "TokenExpiredError"
        ) {
          store.dispatch(userLogoutSucceed());
          setTimeout(() => {
            persistor.purge();
          }, 200);
          customHistory.push("/login");
        }
        customHistory.push("/app");
      }

      // We need to make sure that this error includes data we need
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        // TODO: Add toast or something else here
        console.log(error.response.data.message);
      }

      return Promise.reject(error);
    }
  );

  return instance;
};

export const getAsync = (url, params) => {
  return axiosInstance().get(url, {
    params: params,
    paramsSerializer: function (serializeParams) {
      return qs.stringify(serializeParams, { arrayFormat: "repeat" });
    },
  });
};

export const postAsync = (url, json) => {
  return axiosInstance().post(url, json);
};

export const putAsync = (url, json) => {
  return axiosInstance().put(url, json);
};

export const deleteAsync = (url) => {
  return axiosInstance().delete(url);
};

export const putWithFormFileAsync = (url, file) => {
  return axios.put(url, file, {
    headers: { "Content-Type": "application/octet-stream" },
  });
};

export default axiosInstance;
