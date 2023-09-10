import { useAuth } from '@/lib/auth.context';

type ProfilePageProps = {};

export default function ProfilePage() {
  const { user } = useAuth();
  return <div>{user && <p>Welcome: {user.name}</p>}</div>;
}
