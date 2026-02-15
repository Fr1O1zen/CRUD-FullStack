import AddHivePage from './components/addHivePage';
import DashboardPage from './components/dashboardPage';
import LoginPage from './components/loginPage';
import {MainPage} from './components/mainPage';
import ProtectedRoute from './components/protectedRoute';
import RegisterPage from './components/registerPage';
import { Route, Routes } from 'react-router-dom';
import SettingsPage from './components/settingsPage';

function App() {
  return (
    <>
        <div  className="App">
          <Routes>
            <Route path="/login"  element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={
              <ProtectedRoute>
              <MainPage />
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
    </>
  )
}

export default App
