import AddHivePage from './components/addHive/addHivePage';
import DashboardPage from './components/dashboard/dashboardPage';
import LoginPage from './components/authPage/loginPage';
import ProtectedRoute from './components/protectedRoute';
import RegisterPage from './components/authPage/registerPage';
import { Route, Routes } from 'react-router-dom';
import SettingsPage from './components/settingsPage/settingsPage';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
        <div  className="App">
          <Routes>
            <Route path="/login"  element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={
              <ProtectedRoute>
              <DashboardPage />
              </ProtectedRoute>
              } />
            <Route path="/dashboard" element={
              <ProtectedRoute>
              <DashboardPage />
              </ProtectedRoute>
            } />
            <Route path="/addHive" element={
              <ProtectedRoute>
              <AddHivePage />
              </ProtectedRoute>
            } />
            <Route path="/settings" element={
              <ProtectedRoute>
              <SettingsPage />
              </ProtectedRoute>
            } />
          </Routes>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
