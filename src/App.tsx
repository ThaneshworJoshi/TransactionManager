import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginTemplate from './components/templates/LoginTemplate/LoginTemplate';
import ErrorBoundary from './components/molecules/ErrorBoundary/ErrorBoundary.component';
import Sidebar from './components/molecules/Sidebar/Sidebar.component';
import { sidebarItems } from './constants';
import Header from './components/molecules/Header/Header.component';
import profile from './assets/profile.jpg';

function App() {
  return (
    <>
      <BrowserRouter>
        <ErrorBoundary>
          <Routes>
            <Route path="/login" element={<LoginTemplate />} />
            <Route path="/dashboard" element={<div><div className="flex">
              <Sidebar items={sidebarItems} />
              <div className="flex-grow h-[120px]">
                {/* Your main content goes here */}
                {/* <h1 className="text-2xl">Main Content</h1> */}
                <Header 
                  user={{
                    isAuthenticated: true,
                    name: 'Rita',
                    profileImage: { imageUrl: profile, alt: 'alt' }
                  }}    
                  events={{ handleLogout: () => {}}}
                />
              </div>
            </div></div>} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  )
}

export default App
