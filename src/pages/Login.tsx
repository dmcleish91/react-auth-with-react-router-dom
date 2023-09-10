import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/lib/auth.context';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  return (
    <>
      <Login />
    </>
  );
}

function Login() {
  const [user, setUser] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || '/';
  const { login } = useAuth();

  function handleLogin() {
    login({ name: user });
    navigate(redirectPath, { replace: true });
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='w-60 space-y-2'>
        <Input placeholder='Username' onChange={(e) => setUser(e.target.value)} />
        <Button onClick={handleLogin}>Login</Button>
      </div>
    </div>
  );
}
