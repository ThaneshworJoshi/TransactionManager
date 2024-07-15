import { useState } from 'react';
import Header from '../../molecules/Header/Header.component';
import Login from '../../organisms/Login/Login.component';
import image from './../../../assets/logo.png';
import { useLoginMutation } from '../../../redux/services/auth/authService';
import { loginSuccess, logout } from '../../../redux/features/auth/authSlice';
import { useAppDispatch } from '../../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { storeTokens } from '../../../utils/token';

const LoginTemplate = () => {
  const [user] = useState({
    isAuthenticated: false, // Change based on your authentication logic
    name: 'John Doe',
    profileImage: {
      imageUrl: image,
      alt: 'alt'
    }, // Replace with actual user's profile image
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (loginId: string, password: string, ipAddress: string) => {
    try {
      const { data, error } = await login({ email: loginId, password: password, ipAddress: ipAddress })
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
