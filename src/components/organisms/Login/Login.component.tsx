import { useState } from "react";
import { ILoginProps } from "./Login.type";
import { FaLock, FaNetworkWired, FaUser } from "react-icons/fa";
import LoginImage from './../../../assets/loginImage.png';

const Login = ({ events }: ILoginProps) => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [ipAddress, setIpAddress] = useState(''); // Static IP address

  const handleLogin = () => {
    events?.handleLogin(loginId, password, ipAddress);
  };

  return (
    <div className="flex h-[500px] max-w-[800px] rounded-lg">
      <div className="md:w-1/2 flex flex-col justify-center items-center bg-gray-100 p-8 w-full">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <div className="mb-4 w-full flex items-center border rounded p-2  bg-[#F3F1FF]">
          <FaUser className="mr-2 text-gray-600" />
          <input
            type="email"
            placeholder="Email"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
            className="flex-grow focus:outline-none  bg-[#F3F1FF] sm:text-sm w-full rounded-md py-1 pl-3 pr-3"
          />
        </div>

        <div className="mb-4 w-full flex items-center border rounded p-2 bg-[#F3F1FF]">
          <FaLock className="mr-2 text-gray-600" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex-grow focus:outline-none bg-[#F3F1FF] sm:text-sm w-full rounded-md py-1 pl-3 pr-3"
          />
        </div>
        <div className="mb-4 w-full flex items-center border rounded p-2 bg-[#F3F1FF]">
          <FaNetworkWired className="mr-2 text-gray-600" />
          <input
            type="text"
            placeholder="IP Address"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
            className="flex-grow focus:outline-none bg-[#F3F1FF] sm:text-sm w-full rounded-md py-1 pl-3 pr-3"
          />
        </div>

        <button
          onClick={handleLogin}
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