import { SidebarItem } from "../components/molecules/Sidebar";
import { FaUser, FaCog } from 'react-icons/fa';
import { GrTransaction } from "react-icons/gr";
import { MdOutlineDashboard } from "react-icons/md";
export const sidebarItems: SidebarItem[] = [
  {
    title: 'Dashboard',
    icon: MdOutlineDashboard,
    path: '/dashboard',
  },
  {
    title: 'Transactions',
    icon: GrTransaction,
    path: '/transactions',
  },
  {
    title: 'Profile',
    icon: FaUser,
    path: '/profile',
  },
  {
    title: 'Settings',
    icon: FaCog,
    path: '/settings',
  },
];
