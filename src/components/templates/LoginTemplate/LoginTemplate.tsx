import Login from '../../organisms/Login/Login.component';
import { useLoginMutation } from '../../../redux/services/auth/authService';
import { loginSuccess } from '../../../redux/features/auth/authSlice';
import { useAppDispatch } from '../../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { storeTokens } from '../../../utils/token';
import CommonLayout from '../../../common/components/Layouts/CommonLayout/CommonLayout';

const LoginTemplate = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        toast.error(error?.data?.message)
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <CommonLayout>
      <div className="flex justify-center mt-20">
        <Login data={{ isLoading }} events={{ handleLogin }} />
      </div>
    </CommonLayout>
  )
}

export default LoginTemplate
