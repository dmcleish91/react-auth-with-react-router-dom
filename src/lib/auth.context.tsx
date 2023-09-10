import { useState, createContext, ReactNode, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

type User = {
  name: string;
};

type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  function login(user: User) {
    setUser(user);
  }

  function logout() {
    setUser(null);
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const currentAuthContext = useContext(AuthContext);
  if (!currentAuthContext) {
    throw new Error('useAuth must be used within <AuthContext.Provider>');
  }
  return currentAuthContext;
}
