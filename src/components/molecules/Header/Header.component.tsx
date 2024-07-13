import { useState } from 'react';
import { HeaderProps } from './Header.type';
import logo from './../../../assets/logo.png';

const Header = ({ user, events }: HeaderProps) => {
  const { isAuthenticated, name, profileImage } = user;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-black shadow-sm">
      <div className="flex justify-between items-center p-4 max-w-screen-2xl mx-auto relative">
        <div className="flex items-center space-x-4">
          <img src={logo} className="w-[70px] rounded-full" alt="TransactionManager" />
        </div>
        {isAuthenticated ? (
          <div className="flex items-center space-x-4 cursor-pointer " onClick={toggleMenu}>
            <span>{name}</span>
            <img src={profileImage?.imageUrl} alt={profileImage?.alt} className="w-[40px] h-[40px] rounded-full" />
          </div>
        )
          : (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          )}
        {isMenuOpen && (
          <div className="absolute right-0 bottom-[-120px] mb-12 w-48 bg-white text-black rounded-md shadow-lg z-10">
            <a href="/profile" className="block px-4 py-2 text-sm hover:bg-gray-200 hover:rounded-md">Profile</a>
            <button
              onClick={events?.handleLogout}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-200"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;