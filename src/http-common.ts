import axios, { AxiosRequestHeaders } from "axios";
import { API_URL, LS_ACCESS_TOKEN, LS_REFRESH_TOKEN, PAGE_SIGN_IN } from "./constants/constant";
import qs from "qs"
import ApiService from "./services/apiService";

export const config = {
  Accept: "application/json",
  "Content-Type": "application/json",
}

const instance = axios.create({
  baseURL: `${API_URL}`,
  paramsSerializer(params) {
    return qs.stringify(params, { indices: false });
  },
  headers: config
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(LS_ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  },
  (error) => Promise.reject(error)
);
let refreshingFunc: any = undefined;
instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response;
    } else {
      const messages = response.data
      if (messages) {
        if (messages instanceof Array) {
          return Promise.reject({ messages });
        }
        return Promise.reject({ messages: [messages] });
      }
      return Promise.reject({ messages: ["got errors"] });
    }
  },
  async (error) => {
    const originalConfig = error.config;
    const token = localStorage.getItem(LS_ACCESS_TOKEN);

    // if we don't have token in local storage or error is not 401 just return error and break req.
    if (!token) {
      return Promise.reject(error);
    }
    try {
      if (ApiService.isUnauthorizedError(error)) {
        if (!refreshingFunc)
          refreshingFunc = ApiService.renewToken();

        const [newToken, _newRefreshToken] = await refreshingFunc;

        originalConfig.headers.Authorization = `Bearer ${newToken}`;

        // retry original request
        try {
          return await axios.request(originalConfig);
        } catch (innerError) {
          // if original req failed with 401 again - it means server returned not valid token for refresh request
          if (ApiService.isUnauthorizedError(innerError)) {
            throw innerError;
          }
        }
      }
    } catch (err) {
      localStorage.removeItem(LS_ACCESS_TOKEN);
      localStorage.removeItem(LS_REFRESH_TOKEN);

      window.location.href = PAGE_SIGN_IN

    } finally {
      refreshingFunc = undefined;
    }
  }
);

export const http = instance;

export default http;