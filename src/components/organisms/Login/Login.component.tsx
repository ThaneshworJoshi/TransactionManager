import { useState } from "react";
import { ILoginProps } from "./Login.type";
import { FaLock, FaNetworkWired, FaUser } from "react-icons/fa";
import LoginImage from './../../../assets/loginImage.png';
import { TextField } from "../../atoms";

const Login = ({ data, events }: ILoginProps) => {
  const [formState, setFormState] = useState({
    loginId: 'mausam07@yopmail.com',
    password: 'Test@1234',
    ipAddress: '182.93.95.159'
  });
  const [errors, setErrors] = useState<{ loginId?: string; password?: string; ipAddress?: string }>({});

  const validate = () => {
    const newErrors: { loginId?: string; password?: string; ipAddress?: string } = {};
    if (!formState.loginId) newErrors.loginId = 'Email is required';
    if (!formState.password) newErrors.password = 'Password is required';
    if (!formState.ipAddress) newErrors.ipAddress = 'IP Address is required';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value)
    setFormState(prevState => ({ ...prevState, [name]: value }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: undefined }));
  };

  const handleLogin = () => {
    if (validate()) {
      events?.handleLogin(formState.loginId, formState.password, formState.ipAddress);
    }
  };

  return (
    <div className="flex h-[500px] max-w-[800px] rounded-lg shadow-xl">
      <div className="md:w-1/2 flex flex-col justify-center items-center rounded-l-lg bg-white p-8 w-full">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <div className="mb-4 w-full">
          <TextField
            type="email"
            placeholder="Email"
            name="loginId" // Add name prop
            value={formState.loginId}
            onChange={handleFieldChange}
            icon={<FaUser />}
            error={errors.loginId}
          />
        </div>
        <div className="mb-4 w-full">
          <TextField
            type="password"
            placeholder="Password"
            name="password" // Add name prop
            value={formState.password}
            onChange={handleFieldChange}
            icon={<FaLock />}
            error={errors.password}
          />
        </div>
        <div className="mb-4 w-full">
          <TextField
            type="text"
            placeholder="IP Address"
            name="ipAddress" // Add name prop
            value={formState.ipAddress}
            onChange={handleFieldChange}
            icon={<FaNetworkWired />}
            error={errors.ipAddress}
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