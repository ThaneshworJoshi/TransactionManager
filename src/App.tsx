import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LoginTemplate from './components/templates/LoginTemplate/LoginTemplate';
import ErrorBoundary from './components/molecules/ErrorBoundary/ErrorBoundary.component';
import DashboardTemplate from './components/templates/DashboardTemplate/DashboardTemplate';
import TransactionTemplate from './components/templates/TransactionTemplate/TransactionTemplate';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { loginSuccess } from './redux/features/auth/authSlice';
import { useEffect } from 'react';
import PrivateRoute from './common/components/PrivateRoute';
import useMount from './hooks/useMount';
import Loader from './components/molecules/Loader/Loader.componet';
import { getTokensFromCookies } from './utils/token';
import ProfileTemplate from './components/templates/ProfileTemplate/ProfileTemplate';
import SettingTemplate from './components/templates/SettingTemplate/SettingTemplate';

function App() {

  const dispatch = useAppDispatch();
  const isComponentLoading = useMount()
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    const { accessToken, refreshToken } = getTokensFromCookies();

    if (accessToken && refreshToken) {
      dispatch(loginSuccess({ accessToken, refreshToken }));
    }
  }, [dispatch]);

  if (isComponentLoading) {
    return <Loader />
  }

  return (
    <>
      <BrowserRouter>
        <ErrorBoundary>
          <Routes>
            <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginTemplate />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<DashboardTemplate />} />
              <Route path="/transactions" element={<TransactionTemplate />} />
              <Route path="/profile" element={<ProfileTemplate />} />
              <Route path="/settings" element={<SettingTemplate />} />
            </Route>
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  )
}

export default App
