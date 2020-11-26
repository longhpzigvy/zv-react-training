import axios from "axios";
import qs from "qs";

const axiosInstance = () => {
  const instance = axios.create({
    baseURL: "http://localhost:9000/",
    timeout: 30000,
  });

  //=======Request interceptor=========
  instance.interceptors.request.use(
    async (config) => {
      return config;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );

  //======Response interceptor============
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
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

export const putAsync = (
  url,
  json,
) => {
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

export default axiosInstance
