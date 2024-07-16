import { useState } from 'react';
import { HeaderProps } from './Header.type';
import logo from './../../../assets/logo.png';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = ({ user, events }: HeaderProps) => {
  const { isAuthenticated, name, profileImage } = user;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-black shadow-sm h-28">
      <div className="h-full flex justify-between items-center p-4 max-w-screen-2xl mx-auto relative">
        <div className="flex items-center space-x-4 w-4/12">
          {isAuthenticated ? <div className="flex items-center space-x-4 flex-grow max-w-full mx-auto">
            <div className="relative flex items-center w-full">
              <input
                type="text"
                placeholder="Search Here"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full py-2 pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9B8DF5] bg-white"
              />
              <FaSearch className="absolute left-3 text-gray-400" />
            </div>
          </div>
            : <Link to={'/'}> <img src={logo} className="w-[70px] rounded-full" alt="TransactionManager" /></Link>
          }
        </div>
        {isAuthenticated ? (
          <div className="flex items-center space-x-4">
            <div className="cursor-pointer" onClick={toggleMenu}>
              <img
                src={profileImage?.imageUrl}
                alt={profileImage?.alt}
                title={name}
                className="w-[40px] h-[40px] rounded-full border-4 border-[#808080]"
              />
            </div>
            {isMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
                <a href="/profile" className="block px-4 py-2 text-sm hover:bg-gray-200 hover:rounded-md">
                  Profile
                </a>
                <button
                  onClick={events?.handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-200"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to={'/login'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;