import axios from "axios";
import { userToken } from "../tools/localStorageToken";

const API = (useJWT: boolean) => {
  if (useJWT) {
    return axios.create({
      baseURL: process.env.REACT_APP_URL_REST_WP,
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
  }
  return axios.create({
    baseURL: process.env.REACT_APP_URL_REST_WP,
    headers: {},
  });
};

export default API;
