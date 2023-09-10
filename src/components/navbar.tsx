import { useAuth } from '@/lib/auth.context';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

export default function Navigation() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/');
  }
  return (
    <div className='flex flex-row items-center justify-between h-16'>
      <p className='text-2xl font-semibold'>Auth Demo</p>
      <div className='flex flex-row items-center text-2xl font-semibold'>
        <Link to='/about' className='ml-auto mr-4'>
          About
        </Link>
        <Link to='/' className='ml-auto mr-4'>
          Home
        </Link>
        {user && (
          <Link to='/profile' className='ml-auto mr-4'>
            Profile
          </Link>
        )}
        {!user ? (
          <Link to='/login' className='ml-auto mr-4'>
            Login
          </Link>
        ) : (
          <Button onClick={handleLogout}>Logout</Button>
        )}
      </div>
    </div>
  );
}
