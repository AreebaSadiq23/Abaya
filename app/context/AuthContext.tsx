"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

type User = { name: string; email: string; phone: string } | null;

const AuthContext = createContext<{
  user: User;
  login: (userData: { name: string; email: string; phone: string }) => void;
  logout: () => void;
}>({ user: null, login: () => {}, logout: () => {} });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('abaya-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (userData: { name: string; email: string; phone: string }) => {
    setUser(userData);
    localStorage.setItem('abaya-user', JSON.stringify(userData));
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem('abaya-user');
  };
  
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
