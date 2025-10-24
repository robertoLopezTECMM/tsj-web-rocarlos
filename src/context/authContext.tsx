import React, { createContext, useContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

interface DecodedToken {
  email: string;
  permissions: string[];
  exp: number;
  name?: string;
  picture?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  permissions: string[];
  user: DecodedToken | null;
  loading: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [permissions, setPermissions] = useState<string[]>([]);
  const [user, setUser] = useState<DecodedToken | null>(null);
  const [loading, setLoading] = useState(true);

  const loadToken = () => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const decoded = jwt_decode<DecodedToken>(token);
      const now = Date.now() / 1000;

      console.log('DECODED TOKEN:', decoded);

      if (!decoded.exp || decoded.exp > now) {
        setIsAuthenticated(true);
        setPermissions(decoded.permissions || []);
        setUser(decoded);
      } else {
        logout();
      }
    } catch (error) {
      console.error('Error decoding token:', error);
      logout();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadToken();
  }, []);

  const login = (token: string) => {
    sessionStorage.setItem('token', token);
    // esperamos un ciclo de render antes de recargar el token
    setTimeout(() => loadToken(), 0);
  };

  const logout = () => {
    sessionStorage.removeItem('token');
    setIsAuthenticated(false);
    setPermissions([]);
    setUser(null);
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, permissions, user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
