import { IconType } from "react-icons";

export interface SidebarItem {
  title: string;
  icon: IconType;
  path: string;
}

export interface SidebarProps {
  items: Array<SidebarItem>;
  events: { handleLogout: () => void; }
}
