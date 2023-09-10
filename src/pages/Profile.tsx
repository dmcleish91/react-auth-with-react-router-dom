import { useAuth } from '@/lib/auth.context';

type ProfilePageProps = {};

export default function ProfilePage() {
  const auth = useAuth();
  return <div>{auth.user && <p>Welcome: {auth.user.name}</p>}</div>;
}
