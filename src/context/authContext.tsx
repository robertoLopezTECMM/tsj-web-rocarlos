import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string, userAvatar: string, userEmail: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC = ({ children }:any) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!sessionStorage.getItem("token"));

  // Comprobar si ya hay un token guardado al cargar la página
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    console.log('token from authContext', token)
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token: string, userAvatar:string, userEmail:string) => {
    sessionStorage.setItem("token", token); // Guardamos el token en sessionStorage
    sessionStorage.setItem('userAvatar', userAvatar)
    sessionStorage.setItem('userEmail', userEmail)
    setIsAuthenticated(true); // Marcamos al usuario como logueado
  };

  const logout = () => {
    sessionStorage.removeItem("token"); // Borramos el token
    setIsAuthenticated(false); // Marcamos al usuario como no logueado
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
