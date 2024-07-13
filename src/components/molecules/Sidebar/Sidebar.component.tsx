import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SidebarProps } from './Sidebar.type';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const Sidebar = ({ items }: SidebarProps) => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="relative flex">
      <div className={`h-screen bg-white border-r border-gray-300 text-gray-800 flex flex-col ${isMinimized ? 'w-28' : 'w-72'} transition-width duration-300`}>
        <div className="flex justify-center items-center p-4 border-b border-gray-300">
          <img src={logo} className="w-[80px] rounded-full" alt="TransactionManager" />

        </div>
        <nav className="flex justify-center flex-col mt-4">
          {items.map((item) => (
            <NavLink
              to={item.path}
              key={item.title}
              title={item.title}
              className={({ isActive }) =>
                `flex items-center p-4 my-2 mx-4 rounded transition-colors duration-300 font-bold ${isActive ? 'bg-[#9B8DF5] text-white' : 'hover:bg-[#9B8DF5] hover:text-white'
                }`
              }
            >
              <item.icon className="text-2xl" />
              {!isMinimized && <span className="ml-4">{item.title}</span>}
            </NavLink>
          ))}
        </nav>
      </div>
      <button
        onClick={() => setIsMinimized(!isMinimized)}
        className="absolute right-[-15px] top-28  transform -translate-y-1/2 bg-gray-200 hover:bg-[#9B8DF5] p-2 border border-gray-300 rounded-full"
      >
        {isMinimized ? <FaChevronRight /> : <FaChevronLeft />}
      </button>
    </div>
  );
};

export default Sidebar;
