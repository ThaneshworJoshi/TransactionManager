import { useState } from "react";
import { ILoginProps } from "./Login.type";
import { FaLock, FaNetworkWired, FaUser } from "react-icons/fa";
import LoginImage from './../../../assets/loginImage.png';
import { TextField } from "../../atoms";

const Login = ({ data, events }: ILoginProps) => {
  const [loginId, setLoginId] = useState('mausam07@yopmail.com');
  const [password, setPassword] = useState('Test@1234');
  const [ipAddress, setIpAddress] = useState('182.93.95.159');

  const handleLogin = () => {
    events?.handleLogin(loginId, password, ipAddress);
  };

  return (
    <div className="flex h-[500px] max-w-[800px] rounded-lg shadow-xl">
      <div className="md:w-1/2 flex flex-col justify-center items-center rounded-l-lg bg-white p-8 w-full">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <div className="mb-4 w-full">
          <TextField
            type="email"
            placeholder="Email"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
            icon={<FaUser />}
          />
        </div>
        <div className="mb-4 w-full">
          <TextField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<FaLock />}
          />
        </div>
        <div className="mb-4 w-full">
          <TextField
            type="text"
            placeholder="IP Address"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
            icon={<FaNetworkWired />}
          />
        </div>
        <button
          onClick={handleLogin}
          disabled={data?.isLoading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </div>
      <div className="hidden md:flex md:w-1/2 justify-center items-center rounded-r-lg bg-[#9B8DF5]">
        <img src={LoginImage} alt="Right Side" className="w-10/12 object-cover block" />
      </div>
    </div>
  );
};

export default Login;