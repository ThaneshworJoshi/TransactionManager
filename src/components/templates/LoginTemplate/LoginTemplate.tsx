import { useState } from 'react';
import Header from '../../molecules/Header/Header.component';
import Login from '../../organisms/Login/Login.component';
import image from './../../../assets/logo.png';
import { useLoginMutation } from '../../../redux/services/auth/authService';
import { loginSuccess, logout, selectAuth } from '../../../redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { clearTokens, storeTokens } from '../../../utils/token';

const LoginTemplate = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user  = useAppSelector(selectAuth);
  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (loginId: string, password: string, ipAddress: string) => {
    try {
      const { data, error } = await login({ email: loginId, password: password, ip_address: ipAddress })
      if (data) {
        dispatch(loginSuccess(data));
        storeTokens(data.accessToken, data.refreshToken);
        toast.success(data?.message)
        navigate('/dashboard');
      } else {
        //@ts-ignore
        toast.error(error?.data?.message)
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Header user={user} />
      <div className="flex justify-center mt-20">
        <Login data={{ isLoading }} events={{ handleLogin }} />
      </div>
    </>
  )
}

export default LoginTemplate
