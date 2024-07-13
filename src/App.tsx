import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginTemplate from './components/templates/LoginTemplate/LoginTemplate';
import ErrorBoundary from './components/molecules/ErrorBoundary/ErrorBoundary.component';

function App() {
  return (
    <>
      <BrowserRouter>
        <ErrorBoundary>
          <Routes>
            <Route path="/login" element={<LoginTemplate />} />
            <Route path="/dashboard" element={<div>dashboard</div>} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  )
}

export default App
