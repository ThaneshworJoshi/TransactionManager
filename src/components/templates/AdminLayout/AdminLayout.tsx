import React from 'react'
import Sidebar from '../../molecules/Sidebar/Sidebar.component'
import { sidebarItems } from '../../../constants'
import Header from '../../molecules/Header/Header.component'
import profile from './../../../assets/profile.jpg';
import { AdminLayoutProps } from './AdminLayout.type';
import { logout } from '../../../redux/features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../../../redux/hooks';
import { clearTokens } from '../../../utils/token';

const AdminLayout = ({ title, children }: AdminLayoutProps) => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <div>
      <div className="flex">
        <Sidebar items={sidebarItems} />
        <div className="flex-grow h-[120px]">
          <div>
            <Header
              user={{
                isAuthenticated: true,
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
