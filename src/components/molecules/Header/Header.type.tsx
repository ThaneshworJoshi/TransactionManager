interface IUser {
  isAuthenticated: boolean;
  name: string;
  profileImage: { imageUrl: string, alt: string };
};

export interface HeaderProps {
  user: IUser;
  events: {
    handleLogout: () => void;
  }
};