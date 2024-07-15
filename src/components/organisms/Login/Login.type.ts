export interface ILoginProps {
  data: {
    isLoading: boolean;
  }
  events: {
    handleLogin: (email: string, password: string, ipAddress: string) => void;
  }
}
