import API_LOGIN from "./API_Login";

const endpoint = "https://wpreact.ctrlj.es/wp-json/jwt-auth/v1/token/";

/**
 * Login on the platform
 * @param username string ,
 * @param password string ,
 */
export const loginService = (params: {
  username?: string;
  password?: string;
}): Promise<{ token: string }> =>
  new Promise<{ token: string }>((resolve, reject) => {
    API_LOGIN()
      .post(`${endpoint}`, params)
      .then(
        (res) => {
          resolve(res.data);
        },
        (error) => {
          reject(error);
        }
      );
  });

export default loginService;

