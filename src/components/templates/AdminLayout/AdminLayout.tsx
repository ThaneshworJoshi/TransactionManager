import { useEffect } from 'react'
import Sidebar from '../../molecules/Sidebar/Sidebar.component'
import { sidebarItems } from '../../../constants'
import Header from '../../molecules/Header/Header.component'
import profile from './../../../assets/profile.jpg';
import { AdminLayoutProps } from './AdminLayout.type';
import { logout as logoutAction, selectAuth } from '../../../redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { clearTokens } from '../../../utils/token';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useLogoutMutation } from '../../../redux/services/auth/authService';

const AdminLayout = ({ title, children }: AdminLayoutProps) => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const data = useAppSelector(selectAuth)

  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      clearTokens();
      dispatch(logoutAction());
      toast.success('Logged out successfully');
      navigate('/login');
    } catch (error) {
      toast.error('Error logging out')
    }
  }

  useEffect(() => {
    if (!data?.isAuthenticated) {
      navigate("/login");
    }
  }, [data?.isAuthenticated, navigate])

  return (
    <div>
      <div className="flex">
        <Sidebar items={sidebarItems} events={{ handleLogout }} />
        <div className="flex-grow h-[120px]">
          <div>
            <Header
              user={{
                isAuthenticated: data?.isAuthenticated,
                name: 'Rita',
                profileImage: { imageUrl: profile, alt: 'alt' }
              }}
              events={{ handleLogout }}
            />
            <div className="p-4">
              <main className='mx-1 sm:mx-10 mt-10 sm:mt-3'>
                <h1 className="text-2xl font-bold mb-10">{title}</h1>
                {children && children}
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
