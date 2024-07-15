import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState, ILoginResponse } from "../../type";
import { RootState } from "../../store";


const initialState: IAuthState = {
  loading: false,
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<ILoginResponse>) => {
      state.isAuthenticated = true;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export const selectAuth = (state: RootState) => state.authApi;

export default authSlice.reducer;
