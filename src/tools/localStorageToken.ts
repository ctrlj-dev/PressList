import jwtDecode from "jwt-decode";
import { IUserJWT } from "../models/IUser";

export const userToken = localStorage.getItem("user-token");
export const setUsertoken = (token: string) =>
  localStorage.setItem("user-token", token);
  
export const parsedJWT = (token) => jwtDecode<IUserJWT>(token);
