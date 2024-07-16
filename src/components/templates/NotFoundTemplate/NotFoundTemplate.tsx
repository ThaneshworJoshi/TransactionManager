import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";

const NotFoundTemplate = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

  const handleNavigation = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-blue-600">404</h1>
        <p className="mt-4 text-xl font-semibold">Page Not Found</p>
        <p className="mt-2 text-lg">Sorry, the page you are looking for does not exist.</p>
        <button
          onClick={handleNavigation}
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          {isAuthenticated ? 'Go to Dashboard' : 'Go to Homepage'}
        </button>
      </div>
    </div>
  );
};

export default NotFoundTemplate;