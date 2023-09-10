import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Navigation from './components/navbar';
import { AuthProvider } from './lib/auth.context';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import RequireAuth from './components/requireauth';
function App() {
  return (
    <div className='h-min-screen antialiased w-[100vw]'>
      <AuthProvider>
        <Navigation />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route
            path='/profile'
            element={
              <RequireAuth>
                <ProfilePage />
              </RequireAuth>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
