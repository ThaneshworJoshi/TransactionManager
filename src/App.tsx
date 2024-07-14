import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginTemplate from './components/templates/LoginTemplate/LoginTemplate';
import ErrorBoundary from './components/molecules/ErrorBoundary/ErrorBoundary.component';
import DashboardTemplate from './components/templates/DashboardTemplate/DashboardTemplate';
import TransactionTemplate from './components/templates/TransactionTemplate/TransactionTemplate';

function App() {
  return (
    <>
      <BrowserRouter>
        <ErrorBoundary>
          <Routes>
            <Route path="/login" element={<LoginTemplate />} />
            <Route path="/dashboard" element={<DashboardTemplate />} />
            <Route path="/transactions" element={<TransactionTemplate />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  )
}

export default App
