import './App.css'
import Cookies from 'js-cookie';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginTemplate from './components/templates/LoginTemplate/LoginTemplate';
import ErrorBoundary from './components/molecules/ErrorBoundary/ErrorBoundary.component';
import DashboardTemplate from './components/templates/DashboardTemplate/DashboardTemplate';
import TransactionTemplate from './components/templates/TransactionTemplate/TransactionTemplate';
import { useAppDispatch } from './redux/hooks';
import { loginSuccess } from './redux/features/auth/authSlice';
import { useEffect } from 'react';
import PrivateRoute from './common/components/PrivateRoute';
import useMount from './hooks/useMount';

function App() {

  const dispatch = useAppDispatch();
  const isComponentLoading = useMount()

  useEffect(() => {
    const accessToken = Cookies.get('accessToken');
    const refreshToken = Cookies.get('refreshToken');

    if (accessToken && refreshToken) {
      dispatch(loginSuccess({ accessToken, refreshToken }));
    }
  }, [dispatch]);

  if(isComponentLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <BrowserRouter>
        <ErrorBoundary>
          <Routes>
            <Route path="/login" element={<LoginTemplate />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<DashboardTemplate />} />
              <Route path="/transactions" element={<TransactionTemplate />} />
            </Route>
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  )
}

export default App
