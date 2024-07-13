import React, { useState } from 'react';
import Header from '../../molecules/Header/Header.component';
import Login from '../../organisms/Login/Login.component';
import image from './../../../assets/logo.png';
import { useLoginMutation } from '../../../redux/services/auth/authService';
import { loginSuccess, logout } from '../../../redux/features/auth/authSlice';
import { useAppDispatch } from '../../../redux/hooks';
import { useNavigate } from 'react-router-dom';

const LoginTemplate = () => {
  const [user, setUser] = useState({
    isAuthenticated: true, // Change based on your authentication logic
    name: 'John Doe',
    profileImage: {
      imageUrl: image,
      alt: 'alt'
    }, // Replace with actual user's profile image
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const [login, { isLoading, isError }] = useLoginMutation();

  const handleLogin = async (loginId: string, password: string, ipAddress: string) => {
    try {
      const { data, error } = await login({ login_id: loginId, login_password: password, ip_address: ipAddress })
      if (data) {
        loginSuccess(data);
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      } else {
        //Todo show toast message
        //@ts-ignore
        console.log(error?.data?.message)
      }

    } catch (error) {
      console.log(error)
    }
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <>
      <Header user={user} events={{ handleLogout }} />
      <div className="flex justify-center mt-20">
        <Login data={{ isLoading }} events={{ handleLogin }} />
      </div>
    </>
  )
}

export default LoginTemplate
