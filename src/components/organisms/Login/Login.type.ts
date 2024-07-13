export interface ILoginProps {
  data: {
    isLoading: boolean;
  }
  events: {
    handleLogin: (loginId: string, password: string, ipAddress: string) => void;
  }
}
