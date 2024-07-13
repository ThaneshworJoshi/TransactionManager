
export interface IAuthState {
  loading: boolean;
  isAuthenticated: boolean;
  userInfo: null | any;
  userToken: null | string;
  error: null;
}

export interface IUser {
  // name: string;
  // token: string;
  // todo add user type
}


export interface ILoginResponse {
  token: string;
}

export interface ILoginRequest {
  login_id: string;
  login_password: string;
  ip_address: string;
}
