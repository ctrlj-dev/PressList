export interface IUser {
  username?: string;
  password?: string;
  [k: string]: FormDataEntryValue
}

export interface IUserLogin {
    id: number,
    jwt: string,
}

export interface IUserJWT {
  token: string;
  user_display_name: string;
  user_email: string;
  user_nicename: string;
  data: {
    user: {
      id: number;
    };
  };
}
