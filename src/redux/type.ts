
export interface IAuthState {
  loading: boolean;
  isAuthenticated: boolean;
  accessToken: null | string;
  refreshToken: null | string;
  error: null;
}

export interface ILoginResponse {
  success?: boolean;
  accessToken: string;
  refreshToken: string;
  message?: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
  ipAddress: string;
}
