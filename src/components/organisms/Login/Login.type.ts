export interface ILoginProps {
  events: {
    handleLogin: (loginId: string, password: string, ipAddress: string) => void;
  }
}
